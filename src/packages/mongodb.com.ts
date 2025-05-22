/**
 * Generated from pkgx.dev data
 */
export const mongodbcomPackage = {
  programs: [
    "install_compass",
    "mongod",
    "mongos",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se@8",
    "openssl.org@1.1",
  ] as const,
  versions: [
    "8.0.9",
    "8.0.8",
    "8.0.7",
    "8.0.6",
    "8.0.5",
    "8.0.4",
    "8.0.3",
    "8.0.2",
    "8.0.1",
    "8.0.0",
    "7.3.4",
    "7.3.3",
    "7.0.20",
    "7.0.19",
    "7.0.18",
    "7.0.17",
    "7.0.16",
    "7.0.15",
    "7.0.14",
    "6.0.23",
    "6.0.22",
    "6.0.21",
    "6.0.20",
    "6.0.19",
    "6.0.18",
    "6.0.17",
  ] as const,
  name: "mongodb.com" as const,
  domain: "mongodb.com" as const,
  description: "Package information for mongodb.com" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +mongodb.com -- $SHELL -i" as const,
}

export type MongodbcomPackage = typeof mongodbcomPackage
