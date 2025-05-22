export const zeromqorgPackage = {
  name: "zeromq.org" as const,
  domain: "zeromq.org" as const,
  description: "ZeroMQ core engine in C++, implements ZMTP/3.1" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/zeromq.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +zeromq.org -- $SHELL -i" as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "4.3.5",
    "4.3.4",
  ] as const,
  fullPath: "zeromq.org" as const,
}

export type ZeromqorgPackage = typeof zeromqorgPackage
