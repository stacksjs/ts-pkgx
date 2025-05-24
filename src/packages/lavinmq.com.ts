export const lavinmqcomPackage = {
  name: 'lavinmq' as const,
  domain: 'lavinmq.com' as const,
  description: 'Lightweight and fast AMQP (0-9-1) server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +lavinmq.com -- $SHELL -i' as const,
  programs: [
    'lavinmq',
    'lavinmqctl',
    'lavinmqperf',
  ] as const,
  companions: [] as const,
  dependencies: [
    'openssl.org^1.1',
    'pcre.org/v2@10',
    'libevent.org@2',
    'hboehm.info/gc@8',
  ] as const,
  versions: [
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.3.1',
  ] as const,
  fullPath: 'lavinmq.com' as const,
  aliases: [] as const,
}

export type LavinmqcomPackage = typeof lavinmqcomPackage
