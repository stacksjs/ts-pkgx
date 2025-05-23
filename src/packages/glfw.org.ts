export const glfworgPackage = {
  name: 'glfw.org' as const,
  domain: 'glfw.org' as const,
  description: 'A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +glfw.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'linuxfreeglut.sourceforge.io^3.4x.org/xcursor^1.2xkbcommon.org^1.0mesa3d.org^23.3',
    'freeglut.sourceforge.io^3.4',
    'x.org/xcursor^1.2',
    'xkbcommon.org^1.0',
    'mesa3d.org^23.3',
  ] as const,
  versions: [
    '3.4.0',
    '3.3.10',
    '3.3.9',
  ] as const,
  fullPath: 'glfw.org' as const,
}

export type GlfworgPackage = typeof glfworgPackage
