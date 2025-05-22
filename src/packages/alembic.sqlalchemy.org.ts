export const alembicsqlalchemyorgPackage = {
  name: "alembic" as const,
  domain: "alembic.sqlalchemy.org" as const,
  description: "A database migrations tool for SQLAlchemy." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/alembic.sqlalchemy.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) alembic" as const,
  programs: [
    "alembic",
  ] as const,
  companions: [] as const,
  dependencies: [
    "pkgx.sh^1",
  ] as const,
  versions: [
    "1.16.1",
    "1.16.0",
    "1.15.2",
    "1.15.1",
    "1.14.1",
    "1.14.0",
    "1.13.3",
    "1.13.2",
  ] as const,
  fullPath: "alembic.sqlalchemy.org" as const,
}

export type AlembicsqlalchemyorgPackage = typeof alembicsqlalchemyorgPackage
