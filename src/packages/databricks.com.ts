export const databrickscomPackage = {
  name: 'databricks' as const,
  domain: 'databricks.com' as const,
  description: 'Databricks CLI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/databricks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) databricks' as const,
  programs: [
    'databricks',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.252.0',
    '0.251.0',
    '0.250.0',
    '0.249.0',
    '0.248.0',
    '0.247.1',
    '0.247.0',
    '0.246.0',
    '0.245.0',
    '0.244.0',
    '0.243.0',
    '0.242.0',
    '0.241.2',
    '0.241.1',
    '0.241.0',
    '0.240.0',
    '0.239.1',
    '0.239.0',
    '0.238.0',
    '0.237.0',
    '0.236.0',
    '0.235.0',
    '0.234.0',
    '0.233.0',
    '0.232.1',
    '0.232.0',
    '0.231.0',
    '0.230.0',
    '0.229.0',
    '0.228.1',
    '0.228.0',
    '0.227.1',
    '0.227.0',
    '0.226.0',
    '0.225.0',
    '0.224.1',
    '0.224.0',
    '0.223.2',
    '0.223.1',
    '0.223.0',
    '0.222.0',
    '0.221.1',
    '0.221.0',
    '0.220.0',
    '0.219.0',
    '0.218.1',
    '0.218.0',
    '0.217.1',
    '0.217.0',
    '0.216.0',
    '0.215.0',
  ] as const,
  fullPath: 'databricks.com' as const,
  aliases: [] as const,
}

export type DatabrickscomPackage = typeof databrickscomPackage
