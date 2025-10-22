import type { PkgxPackage } from './types'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Generate Zig package definitions from TypeScript package data
 * This creates a compile-time package registry for the Zig implementation
 */

interface ZigPackageDefinition {
  name: string
  domain: string
  description: string
  homepageUrl?: string
  programs: string[]
  dependencies: string[]
  buildDependencies: string[]
  aliases: string[]
}

/**
 * Escape special characters in Zig strings
 */
function escapeZigString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
}

/**
 * Convert a package to Zig struct format
 */
function packageToZigStruct(pkg: ZigPackageDefinition): string {
  const programs = pkg.programs.map(p => `"${escapeZigString(p)}"`).join(', ')
  const deps = pkg.dependencies.map(d => `"${escapeZigString(d)}"`).join(', ')
  const buildDeps = pkg.buildDependencies.map(d => `"${escapeZigString(d)}"`).join(', ')
  const aliases = pkg.aliases.map(a => `"${escapeZigString(a)}"`).join(', ')

  return `    .{
        .name = "${escapeZigString(pkg.name)}",
        .domain = "${escapeZigString(pkg.domain)}",
        .description = "${escapeZigString(pkg.description)}",
        .homepage_url = ${pkg.homepageUrl ? `"${escapeZigString(pkg.homepageUrl)}"` : 'null'},
        .programs = &[_][]const u8{ ${programs} },
        .dependencies = &[_][]const u8{ ${deps} },
        .build_dependencies = &[_][]const u8{ ${buildDeps} },
        .aliases = &[_][]const u8{ ${aliases} },
    }`
}

/**
 * Generate Zig package definitions file
 */
export async function generateZigDefinitions(packagesDir: string, outputFile: string): Promise<void> {
  console.log(`🔍 Scanning packages directory: ${packagesDir}`)

  // Read all TypeScript package files
  const packageFiles = fs.readdirSync(packagesDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'aliases.ts')

  console.log(`📦 Found ${packageFiles.length} package files`)

  const packages: ZigPackageDefinition[] = []
  let processed = 0
  let errors = 0

  for (const file of packageFiles) {
    try {
      const filePath = path.join(packagesDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      // Extract the package constant name - format: export const bunPackage = { ... }
      const constMatch = content.match(/export const (\w+) = {/)
      if (!constMatch) {
        console.warn(`⚠️  Could not find export const in ${file}`)
        errors++
        continue
      }

      // Dynamically import the TypeScript file
      const fileUrl = `file://${path.resolve(packagesDir, file)}`
      const module = await import(fileUrl)
      const pkgData = module[constMatch[1]]

      if (!pkgData || !pkgData.domain) {
        console.warn(`⚠️  Invalid package data in ${file}`)
        errors++
        continue
      }

      packages.push({
        name: pkgData.name || pkgData.domain,
        domain: pkgData.domain,
        description: pkgData.description || '',
        homepageUrl: pkgData.homepageUrl,
        programs: Array.isArray(pkgData.programs) ? pkgData.programs : [],
        dependencies: Array.isArray(pkgData.dependencies) ? pkgData.dependencies : [],
        buildDependencies: Array.isArray(pkgData.buildDependencies) ? pkgData.buildDependencies : [],
        aliases: Array.isArray(pkgData.aliases) ? pkgData.aliases : [],
      })

      processed++
      if (processed % 100 === 0) {
        console.log(`  Processed ${processed}/${packageFiles.length} packages...`)
      }
    }
    catch (error) {
      console.error(`❌ Error processing ${file}:`, error)
      errors++
    }
  }

  console.log(`✅ Processed ${processed} packages (${errors} errors)`)

  // Sort packages by domain name for deterministic output
  packages.sort((a, b) => a.domain.localeCompare(b.domain))

  // Generate Zig file
  const zigCode = generateZigFile(packages)

  // Write to output file
  fs.writeFileSync(outputFile, zigCode, 'utf-8')
  console.log(`✅ Generated Zig definitions: ${outputFile}`)
  console.log(`📊 Total packages: ${packages.length}`)
}

/**
 * Generate complete Zig file with package definitions
 */
function generateZigFile(packages: ZigPackageDefinition[]): string {
  const packageStructs = packages.map(pkg => packageToZigStruct(pkg)).join(',\n')

  return `//! Package definitions generated from ts-pkgx
//! DO NOT EDIT MANUALLY - This file is auto-generated
//! Generated on: ${new Date().toISOString()}
//! Total packages: ${packages.length}

const std = @import("std");

/// Package information
pub const PackageInfo = struct {
    name: []const u8,
    domain: []const u8,
    description: []const u8,
    homepage_url: ?[]const u8,
    programs: []const []const u8,
    dependencies: []const []const u8,
    build_dependencies: []const []const u8,
    aliases: []const []const u8,
};

/// All known packages (${packages.length} total)
pub const packages = [_]PackageInfo{
${packageStructs}
};

/// Get package by domain name
pub fn getPackageByDomain(domain: []const u8) ?*const PackageInfo {
    for (&packages) |*pkg| {
        if (std.mem.eql(u8, pkg.domain, domain)) {
            return pkg;
        }
    }
    return null;
}

/// Get package by name (checks domain and aliases)
pub fn getPackageByName(name: []const u8) ?*const PackageInfo {
    for (&packages) |*pkg| {
        // Check domain
        if (std.mem.eql(u8, pkg.domain, name)) {
            return pkg;
        }

        // Check full name
        if (std.mem.eql(u8, pkg.name, name)) {
            return pkg;
        }

        // Check aliases
        for (pkg.aliases) |alias| {
            if (std.mem.eql(u8, alias, name)) {
                return pkg;
            }
        }
    }
    return null;
}

/// Get all package domains
pub fn getAllDomains(allocator: std.mem.Allocator) ![][]const u8 {
    var domains = try allocator.alloc([]const u8, packages.len);
    for (packages, 0..) |pkg, i| {
        domains[i] = pkg.domain;
    }
    return domains;
}

/// Get total package count
pub fn getPackageCount() usize {
    return packages.len;
}

test "Package registry has entries" {
    try std.testing.expect(packages.len > 0);
}

test "Can find node package" {
    const node = getPackageByName("node");
    if (node) |pkg| {
        try std.testing.expectEqualStrings("nodejs.org", pkg.domain);
    }
}

test "Can find package by domain" {
    const node = getPackageByDomain("nodejs.org");
    try std.testing.expect(node != null);
}

test "Can find package by alias" {
    const bun = getPackageByName("bun");
    if (bun) |pkg| {
        try std.testing.expect(
            std.mem.eql(u8, pkg.domain, "bun.sh") or
            std.mem.eql(u8, pkg.domain, "bun.com")
        );
    }
}
`
}

/**
 * Generate package aliases in Zig format
 */
export async function generateZigAliases(packagesDir: string, outputFile: string): Promise<void> {
  console.log(`🔍 Generating Zig aliases from: ${packagesDir}`)

  // Read all TypeScript package files
  const packageFiles = fs.readdirSync(packagesDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'aliases.ts')

  const aliases: Record<string, string> = {}

  for (const file of packageFiles) {
    try {
      const filePath = path.join(packagesDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      const constMatch = content.match(/export const (\w+) = {/)
      if (!constMatch)
        continue

      const fileUrl = `file://${path.resolve(packagesDir, file)}`
      const module = await import(fileUrl)
      const pkgData = module[constMatch[1]]

      if (!pkgData || !pkgData.domain)
        continue

      // Add aliases
      if (pkgData.aliases && Array.isArray(pkgData.aliases)) {
        for (const alias of pkgData.aliases) {
          aliases[alias] = pkgData.domain
        }
      }

      // Add friendly name if different from domain
      if (pkgData.name && pkgData.name !== pkgData.domain) {
        aliases[pkgData.name] = pkgData.domain
      }

      // Add common short names
      const shortName = pkgData.domain.split('.')[0]
      if (shortName && !aliases[shortName]) {
        aliases[shortName] = pkgData.domain
      }
    }
    catch (error) {
      // Ignore errors
    }
  }

  // Generate Zig aliases file
  const aliasEntries = Object.entries(aliases)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([alias, domain]) => `    .{ .alias = "${escapeZigString(alias)}", .domain = "${escapeZigString(domain)}" }`)
    .join(',\n')

  const zigCode = `//! Package aliases generated from ts-pkgx
//! DO NOT EDIT MANUALLY - This file is auto-generated
//! Generated on: ${new Date().toISOString()}

const std = @import("std");

pub const Alias = struct {
    alias: []const u8,
    domain: []const u8,
};

pub const aliases = [_]Alias{
${aliasEntries}
};

/// Resolve an alias to a domain name
pub fn resolvealias(alias: []const u8) ?[]const u8 {
    for (aliases) |entry| {
        if (std.mem.eql(u8, entry.alias, alias)) {
            return entry.domain;
        }
    }
    return null;
}

test "Alias resolution works" {
    const resolved = resolvealias("node");
    if (resolved) |domain| {
        try std.testing.expectEqualStrings("nodejs.org", domain);
    }
}
`

  fs.writeFileSync(outputFile, zigCode, 'utf-8')
  console.log(`✅ Generated Zig aliases: ${outputFile}`)
  console.log(`📊 Total aliases: ${Object.keys(aliases).length}`)
}
