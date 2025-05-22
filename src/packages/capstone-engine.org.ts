export const capstoneengineorgPackage = {
  name: "cstool" as const,
  domain: "capstone-engine.org" as const,
  description: "Capstone disassembly/disassembler framework for ARM, ARM64 (ARMv8), Alpha, BPF, Ethereum VM, HPPA, LoongArch, M68K, M680X, Mips, MOS65XX, PPC, RISC-V(rv32G/rv64G), SH, Sparc, SystemZ, TMS320C64X, TriCore, Webassembly, XCore and X86." as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/capstone-engine.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) cstool" as const,
  programs: [
    "cstool",
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "5.0.6",
    "5.0.5",
    "5.0.3",
    "5.0.2",
    "5.0.1",
    "5.0.0",
    "4.0.2",
  ] as const,
  fullPath: "capstone-engine.org" as const,
  aliases: [
    "cstool",
  ] as const,
}

export type CapstoneengineorgPackage = typeof capstoneengineorgPackage
