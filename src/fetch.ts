/* eslint-disable no-console */
import type { Browser } from 'playwright'
import type { FetchProjectsOptions, GitHubContent, PackageFetchOptions, PkgxPackage, ProjectFolder } from './types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { saveRateLimitInfo, shouldProceedWithGitHubRequest } from './utils'

/**
 * Map of common package aliases to their full domain names
 */
export const PACKAGE_ALIASES: Record<string, string> = {
  node: 'nodejs.org',
  python: 'python.org',
  go: 'go.dev',
  rust: 'rust-lang.org',
  ruby: 'ruby-lang.org',
  php: 'php.net',
  perl: 'perl.org',
  deno: 'deno.land',
  bun: 'bun.sh',
}

/**
 * Default cache directory for package data
 */
export const DEFAULT_CACHE_DIR = '.cache/packages'

/**
 * Default cache expiration time in minutes (24 hours)
 */
export const DEFAULT_CACHE_EXPIRATION_MINUTES = 1440

/**
 * Default timeout for all operations in milliseconds (10 seconds)
 * This applies to:
 * - Browser navigation
 * - Package fetching operations
 * - Individual package processing
 * Can be overridden via CLI --timeout option
 */
export const DEFAULT_TIMEOUT_MS = 10000

/**
 * Known packages list as a fallback if all other methods fail
 */
const ALL_KNOWN_PACKAGES = [
  'abseil.io',
  'acorn.io',
  'agpt.co',
  'agwa.name-git-crypt',
  'akuity.io',
  'alacritty.org',
  'alembic.sqlalchemy.org',
  'alsa-project.org',
  'amber-lang.com',
  'amp.rs',
  'amrdeveloper.github.io',
  'anchore.com',
  'android.com',
  'angular.dev',
  'ansible.com',
  'aomedia.googlesource.com',
  'apache.org',
  'apktool.org',
  'apollographql.com',
  'appium.io',
  'apple.com',
  'apple.com-remote_cmds',
  'apptainer.org',
  'aquasecurity.github.io',
  'arduino.github.io',
  'argbash.dev',
  'argoproj.github.io',
  'aria2.github.io',
  'arkade.dev',
  'asciidoctor.org',
  'asciinema.org',
  'aspell.net',
  'assimp.org',
  'ast-grep.github.io',
  'astral.sh',
  'astral.sh-ruff',
  'astral.sh-ty',
  'astral.sh-uv',
  'atlasgo.io',
  'attrs.org',
  'augeas.net',
  'authzed.com',
  'aux4.io',
  'aws.amazon.com',
  'aws.amazon.com-cli',
  'aws.amazon.com-sam',
  'bashly.dannyb.co',
  'bcrypt.sourceforge.net',
  'beyondgrep.com',
  'biomejs.dev',
  'bitcoin.org',
  'bittensor.com',
  'bitwarden.com',
  'blake2.net',
  'bloomreach.com',
  'boost.org',
  'bore.pub',
  'breakfastquay.com',
  'browser-use.com',
  'brxken128.github.io',
  'budimanjojo.github.io',
  'buf.build',
  'buildpacks.io',
  'bun.sh',
  'bytebase.com',
  'bytereef.org',
  'c-ares.org',
  'caddyserver.com',
  'cairographics.org',
  'capstone-engine.org',
  'carapace.sh',
  'cask.readthedocs.io',
  'catb.org',
  'ccache.dev',
  'cedarpolicy.com',
  'cedarpolicy.com-cli',
  'ceph.com',
  'ceph.com-cephadm',
  'ceres-solver.org',
  'certbot.eff.org',
  'certifi.io',
  'cgal.org',
  'changie.dev',
  'charm.sh',
  'checkov.io',
  'chezmoi.io',
  'chiark.greenend.org.uk',
  'chromedriver.chromium.org',
  'cilium.io',
  'circleci.com',
  'cisco.com',
  'classic.yarnpkg.com',
  'cli.github.com',
  'clisp.org',
  'clog-tool.github.io',
  'cloudflare.com',
  'cloudfoundry.org',
  'cloudnative-pg.io',
  'cmake.org',
  'cmocka.org',
  'cnquery.io',
  'cocoapods.org',
  'cocoapods.org-xcodeproj',
  'cocogitto.io',
  'code.videolan.org',
  'coder.com',
  'cointop.sh',
  'conda.org',
  'conftest.dev',
  'connectrpc.org',
  'consul.io',
  'convco.github.io',
  'coredns.io',
  'cpanmin.us',
  'cr.yp.to',
  'crates.io',
  'crates.io-aichat',
  'crates.io-bake-rs',
  'crates.io-cargo-tarpaulin',
  'crates.io-ducker',
  'crates.io-flamegraph',
  'crates.io-ox',
  'crates.io-pik',
  'crates.io-qsv',
  'crates.io-ripgrep-all',
  'crates.io-rucola-notes',
  'crates.io-samply',
  'crazymax.dev',
  'creativeprojects.github.io',
  'cruft.github.io',
  'cryptography.io',
  'crystal-lang.org',
  'cscope.sourceforge.io',
  'csie.ntu.edu.tw',
  'ctags.io',
  'ctop.sh',
  'cuelang.org',
  'curl.se',
  'curlie.io',
  'cyrusimap.org',
  'cython.org',
  'd2lang.com',
  'dagger.io',
  'dart.dev',
  'darwinsys.com',
  'databricks.com',
  'daytona.io',
  'dblab.danvergara.com',
  'debian.org',
  'deepwisdom.ai',
  'denilson.sa.nom.br',
  'deno.land',
  'depot.dev',
  'dest-unreach.org',
  'dev.yorhel.nl',
  'developer.1password.com',
  'developer.1password.com-1password-cli',
  'developers.yubico.com',
  'devpod.sh',
  'dgraph.io',
  'dhall-lang.org',
  'dhruvkb.dev',
  'digger.dev',
  'digip.org',
  'digitalocean.com',
  'direnv.net',
  'dkrz.de',
  'dns.lookup.dog',
  'docbook.org',
  'docker.com',
  'doctave.com',
  'docutils.org',
  'dotenv-linter.github.io',
  'dotenvx.com',
  'dotnet.microsoft.com',
  'doxygen.nl',
  'dozzle.dev',
  'dprint.dev',
  'dri.freedesktop.org',
  'duckdb.org',
  'duktape.org',
  'dystroy.org',
  'dystroy.org-bacon',
  'earthly.dev',
  'ebassi.github.io',
  'edgedb.com',
  'eigen.tuxfamily.org',
  'eksctl.io',
  'elementsproject.org',
  'elfutils.org',
  'elixir-lang.org',
  'elizaOS.github.io',
  'elv.sh',
  'encore.dev',
  'endoflife.date',
  'epsilon-project.sourceforge.io',
  'erlang.org',
  'etcd.io',
  'exiftool.org',
  'expo.dev',
  'eyrie.org',
  'f1bonacc1.github.io',
  'fabianlindfors.se',
  'facebook.com',
  'fairwinds.com',
  'fastlane.tools',
  'felixkratz.github.io',
  'fermyon.com',
  'ffmpeg.org',
  'fftw.org',
  'filippo.io',
  'fishshell.com',
  'flipt.io',
  'flit.pypa.io',
  'fltk.org',
  'fluentci.io',
  'flutter.dev',
  'fluxcd.io',
  'fly.io',
  'flywaydb.org',
  'fmt.dev',
  'fna-xna.github.io',
  'freedesktop.org',
  'freeglut.sourceforge.io',
  'freetds.org',
  'freetype.org',
  'frei0r.dyne.org',
  'fuellabs.github.io',
  'fukuchi.org',
  'fullstory.com',
  'fury.co',
  'fx.wtf',
  'gaia-gis.it',
  'gdal.org',
  'geoff.greer.fm',
  'getclipboard.app',
  'getcomposer.org',
  'getfoundry.sh',
  'getsops.io',
  'getsynth.com',
  'getzola.org',
  'geuz.org',
  'gflags.github.io',
  'ghostgum.com.au',
  'ghostscript.com',
  'giflib.sourceforge.io',
  'git-cliff.org',
  'git-lfs.com',
  'git-quick-stats.sh',
  'git-scm.org',
  'git-town.com',
  'git.osgeo.org',
  'git.tozt.net',
  'github.com',
  'github.com-0age-create2crunch',
  'github.com-Cyfrin-safe-tx-hashes-util',
  'github.com-Diniboy1123-usque',
  'github.com-MilesCranmer-rip2',
  'github.com-MinseokOh-toml-cli',
  'github.com-Parchive-par2cmdline',
  'github.com-blacktop-lporg',
  'github.com-blynn-nex',
  'github.com-fastfetch-cli-fastfetch',
  'github.com-fiatjaf-nak',
  'github.com-git-ecosystem-git-credential-manager',
  'github.com-glauth-glauth',
  'github.com-igorshubovych-markdownlint-cli',
  'github.com-jarun-nnn',
  'github.com-koekeishiya-skhd',
  'github.com-lucianosrp-rye-uv',
  'github.com-mas-cli-mas',
  'github.com-mycreepy-pakku',
  'github.com-peak-s5cmd',
  'github.com-peripheryapp-periphery',
  'github.com-shaka-project-shaka-packager',
  'github.com-sorah-envchain',
  'github.com-spencerkimball-stargazers',
  'github.com-withered-magic-starpls',
  'gitlab.com',
  'gitleaks.io',
  'glaros.dtc.umn.edu',
  'gleam.run',
  'glew.sourceforge.io',
  'glfw.org',
  'glm.g-truc.net',
  'gnome.org',
  'gnu.org',
  'gnupg.org',
  'gnuplot.info',
  'gnutls.org',
  'go.dev',
  'go.uber.org',
  'gohugo.io',
  'golangci-lint.run',
  'gomplate.ca',
  'google.com',
  'google.github.io',
  'goreleaser.com',
  'gource.io',
  'gphoto.org',
  'gqlgen.com',
  'gradle.org',
  'grafana.com',
  'granted.dev',
  'graphicsmagick.org',
  'graphite.sil.org',
  'graphqleditor.com',
  'graphviz.org',
  'groonga.org',
  'groovy-lang.org',
  'grpc.io',
  'gstreamer.freedesktop.org',
  'gtk.org',
  'gts.sourceforge.net',
  'hadrons.org',
  'harding.motd.ca',
  'harfbuzz.org',
  'hashicorp.com',
  'haskell.org',
  'hasura.io',
  'hatch.pypa.io',
  'hboehm.info',
  'hdfgroup.org',
  'heasarc.gsfc.nasa.gov',
  'helix-editor.com',
  'helm.sh',
  'heroku.com',
  'hetzner.com',
  'hjson.github.io',
  'html-tidy.org',
  'htop.dev',
  'htslib.org',
  'httpie.io',
  'huggingface.co',
  'hugo.wang',
  'hunspell.github.io',
  'hurl.dev',
  'ibr.cs.tu-bs.de',
  'idleberg.github.io',
  'ijg.org',
  'imageflow.io',
  'imagemagick.org',
  'indexsupply.com',
  'info-zip.org',
  'infracost.io',
  'intel.com',
  'invisible-island.net',
  'invisible-island.net-lynx',
  'ipfs.tech',
  'ipython.org',
  'iroh.computer',
  'isc.org',
  'isc.org-bind9',
  'istio.io',
  'itstool.org',
  'ivarch.com',
  'jbang.dev',
  'jbig2dec.com',
  'jedisct1.github.io',
  'jedsoft.org',
  'jemalloc.net',
  'jenkins-x.io',
  'jenkins.io',
  'jenv.be',
  'jetporch.com',
  'jfrog.com',
  'jless.io',
  'jonas.github.io',
  'jpeg.org',
  'jsonnet.org',
  'jugit.fz-juelich.de',
  'juju.is',
  'julialang.org',
  'jumppad.dev',
  'jupyter.org',
  'just.systems',
  'k3d.io',
  'k6.io',
  'k9scli.io',
  'kafka.apache.org',
  'kaggle.com',
  'keephq.dev',
  'kerberos.org',
  'kernel.org',
  'kernel.org-libcap',
  'khanacademy.org',
  'khronos.org',
  'kind.sigs.k8s.io',
  'kislyuk.github.io',
  'kluctl.io',
  'ko.build',
  'kornel.ski',
  'kotlinlang.org',
  'koyeb.com',
  'kpt.dev',
  'krew.sigs.k8s.io',
  'ktlint.github.io',
  'kubebuilder.io',
  'kubecm.cloud',
  'kubectx.dev',
  'kubelinter.io',
  'kubernetes.io',
  'kubeshark.co',
  'ladspa.org',
  'lame.sourceforge.io',
  'langchain.com',
  'laravel.com',
  'lavinmq.com',
  'lcdf.org',
  'leethomason.github.io',
  'leo-lang.org',
  'leonerd.org.uk',
  'leptonica.org',
  'lftp.yar.ru',
  'libarchive.org',
  'libcxx.llvm.org',
  'libevent.org',
  'libexif.github.io',
  'libexpat.github.io',
  'libgd.github.io',
  'libgeos.org',
  'libgit2.org',
  'libimobiledevice.org',
  'libisl.sourceforge.io',
  'libjpeg-turbo.org',
  'liblqr.wikidot.com',
  'libpipeline.gitlab.io',
  'libpng.org',
  'libproxy.github.io',
  'libraw.org',
  'libsdl.org',
  'libsodium.org',
  'libsoup.org',
  'libspng.org',
  'libssh.org',
  'libssh2.org',
  'libtom.net',
  'liburcu.org',
  'libusb.info',
  'libuv.org',
  'libvips.org',
  'libwebsockets.org',
  'libzip.org',
  'lima-vm.io',
  'linkerd.io',
  'linux-pam.org',
  'litecli.com',
  'littlecms.com',
  'llm.datasette.io',
  'lloyd.github.io',
  'llvm.org',
  'localai.io',
  'localstack.cloud',
  'logdy.dev',
  'logological.org',
  'lua.org',
  'luajit.org',
  'luarocks.org',
  'lucagrulla.com',
  'lunarvim.org',
  'lxml.de',
  'lychee.cli.rs',
  'lz4.org',
  'maaslalani.com',
  'macvim.org',
  'mailpit.axllent.org',
  'makotemplates.org',
  'man-db.gitlab.io',
  'mandoc.bsd.lv',
  'mariadb.com',
  'markupsafe.palletsprojects.com',
  'materialize.com',
  'matio.sourceforge.io',
  'maturin.rs',
  'maven.apache.org',
  'mcmc-jags.sourceforge.io',
  'mercure.rocks',
  'mercurial-scm.org',
  'mergestat.com',
  'mesa3d.org',
  'mesonbuild.com',
  'micro-editor.github.io',
  'microbrew.org',
  'microcks.io',
  'microsoft.com',
  'microsoft.com-code-cli',
  'microsoft.com-markitdown',
  'midnight-commander.org',
  'min.io',
  'mise.jdx.dev',
  'mitmproxy.org',
  'mkcert.dev',
  'mkdocs.org',
  'modal.com',
  'modernc.org',
  'modernc.org-goyacc',
  'mongodb.com',
  'moonrepo.dev',
  'mosh.org',
  'mozilla.org',
  'mozilla.org-cbindgen',
  'mpg123.de',
  'mpmath.org',
  'mpv.io',
  'msgpack.org',
  'mujs.com',
  'mun-lang.org',
  'mupdf.com',
  'musepack.net',
  'musl.libc.org',
  'mvdan.cc',
  'mvdan.cc-gofumpt',
  'mypy-lang.org',
  'mysql.com',
  'nano-editor.org',
  'nasm.us',
  'neovim.io',
  'netflix.com',
  'netlib.org',
  'netpbm.sourceforge.net',
  'networkx.org',
  'nghttp2.org',
  'nginx.org',
  'nike.com',
  'nim-lang.org',
  'ninja-build.org',
  'nixos.org',
  'nixpacks.com',
  'nlnetlabs.nl',
  'nmap.org',
  'node',
  'nomadproject.io',
  'nongnu.org',
  'notroj.github.io',
  'npmjs.com',
  'ntp.org',
  'numbat.dev',
  'numpy.org',
  'nushell.sh',
  'nx.dev',
  'oauth2-proxy.github.io',
  'oberhumer.com',
  'oberhumer.com-ucl',
  'odigos.io',
  'ohmyposh.dev',
  'ollama.ai',
  'onefetch.dev',
  'onsi.github.io',
  'open-mpi.org',
  'openai.com',
  'openapi-generator.tech',
  'openbao.org',
  'openblas.net',
  'opencore-amr.sourceforge.io',
  'opendap.org',
  'opendev.org',
  'openexr.com',
  'openinterpreter.com',
  'openjdk.org',
  'openjpeg.org',
  'openldap.org',
  'openldap.org-liblmdb',
  'openmp.llvm.org',
  'openpmix.github.io',
  'openpolicyagent.org',
  'openprinting.github.io',
  'openresty.org',
  'opensearch.org',
  'openshift.com',
  'openslide.org',
  'openssh.com',
  'openssl.org',
  'opentofu.org',
  'openvpn.net',
  'operatorframework.io',
  'opus-codec.org',
  'oracle.com',
  'oras.land',
  'ordinals.com',
  'orhun.dev',
  'ots.sniptt.com',
  'packer.io',
  'pagure.io',
  'palletsprojects.com',
  'pandoc.org',
  'pantsbuild.org',
  'paulfitz.github.io',
  'pcre.org',
  'pcsclite.apdu.fr',
  'pdm.fming.dev',
  'people.engr.tamu.edu',
  'people.redhat.com',
  'perl.org',
  'permit.io',
  'php.net',
  'phpmyadmin.net',
  'pimalaya.org',
  'pinniped.dev',
  'pip.pypa.io',
  'pipenv.pypa.io',
  'pixman.org',
  'pkgx.sh',
  'pkgx.sh-dev',
  'pkgx.sh-pkgm',
  'pkl-lang.org',
  'planetscale.com',
  'plantuml.com',
  'plasmasturm.org',
  'plocate.sesse.net',
  'pluralith.com',
  'pngquant.org',
  'pnpm.io',
  'po4a.org',
  'pocketbase.io',
  'podman.io',
  'pokt.network',
  'poppler.freedesktop.org',
  'portaudio.com',
  'postgresql.org',
  'postgrest.org',
  'practical-scheme.net',
  'pre-commit.com',
  'prefix.dev',
  'pressly.github.io',
  'prettier.io',
  'printfn.github.io',
  'priver.dev',
  'proj.org',
  'project-copacetic.github.io',
  'projectdiscovery.io',
  'projectdiscovery.io-nuclei',
  'projen.io',
  'protobuf.dev',
  'prql-lang.org',
  'psycopg.org',
  'public.hronopik.de',
  'pugixml.org',
  'pulumi.io',
  'pwgen.sourceforge.io',
  'pwmt.org',
  'pygments.org',
  'pyinvoke.org',
  'pypa.github.io',
  'pypa.io',
  'pytest.org',
  'python-pillow.org',
  'python-poetry.org',
  'python.org',
  'pyyaml.org',
  'qemu.org',
  'qhull.org',
  'qpdf.sourceforge.io',
  'qt.io',
  'quary.dev',
  'quickwit.io',
  'r-wos.org',
  'rabbitmq.com',
  'raccoin.org',
  'radicle.org',
  'railway.app',
  'rapidjson.org',
  'rarlab.com',
  'rbenv.org',
  'rclone.org',
  're2c.org',
  'reacher.email',
  'rebar3.org',
  'redis.io',
  'render.com',
  'replibyte.com',
  'restic.net',
  'rhash.sourceforge.net',
  'rigaux.org',
  'riverbankcomputing.com',
  'robotframework.org',
  'rockdaboot.github.io',
  'rome.tools',
  'rpm.org',
  'rsync.samba.org',
  'rtmpdump.mplayerhq.hu',
  'rtomayko.github.io',
  'rubocop.org',
  'ruby-lang.org',
  'rubygems.org',
  'rucio.cern.ch',
  'runatlantis.io',
  'rust-lang.github.io',
  'rust-lang.org',
  'rust-lang.org-rust-bindgen',
  'rust-script.org',
  'rye.astral.sh',
  's3tools.org',
  'saerasoft.com',
  'sagiegurari.github.io',
  'sass-lang.com',
  'savannah.nongnu.org',
  'scala-lang.org',
  'scala-sbt.org',
  'scaleway.com',
  'schollz.com',
  'scons.org',
  'scryer.pl',
  'sdkman.io',
  'seaweedfs.com',
  'sentry.io',
  'sf.net',
  'sfcgal.org',
  'sftpgo.com',
  'shellcheck.net',
  'sigstore.dev',
  'simplesystems.org',
  'sing-box.app',
  'skaffold.dev',
  'smartmontools.org',
  'snaplet.dev',
  'sniffnet.net',
  'snyk.io',
  'solana.com',
  'soldeer.xyz',
  'soliditylang.org',
  'sonarqube.org',
  'sourceforge.net',
  'sourceware.org',
  'soxr.sourceforge.net',
  'spacetimedb.com',
  'spawn.link',
  'speex.org',
  'sphinx-doc.org',
  'sqlc.dev',
  'sqlfluff.com',
  'sqlite.org',
  'squawkhq.com',
  'srtalliance.org',
  'sshx.io',
  'starship.rs',
  'steampipe.io',
  'stedolan.github.io',
  'strace.io',
  'streamlink.github.io',
  'stripe.com',
  'supabase.com',
  'surrealdb.com',
  'svenstaro.github.io',
  'swagger.io',
  'swift.org',
  'swig.org',
  'symfony.com',
  'sympy.org',
  'syncthing.net',
  'systemd.io',
  'taglib.org',
  'tailcall.run',
  'tailwindcss.com',
  'taku910.github.io',
  'talos.dev',
  'taplo.tamasfe.dev',
  'tart.run',
  'taskfile.dev',
  'tcl-lang.org',
  'tcl.tk',
  'tcpdump.org',
  'tcsh.org',
  'tea.xyz',
  'tectonic-typesetting.github.io',
  'templ.guide',
  'temporal.io',
  'terraform-docs.io',
  'terraform.io',
  'terragrunt.gruntwork.io',
  'terratag.io',
  'tesseract-ocr.github.io',
  'thekelleys.org.uk',
  'theora.org',
  'thoughtworks.github.io',
  'thrysoee.dk',
  'tidbyt.com',
  'tilt.dev',
  'tinybird.co',
  'tinygo.org',
  'tldr.sh',
  'tlr.dev',
  'tmate.io',
  'tox.wiki',
  'traefik.io',
  'tree-sitter.github.io',
  'trippy.cli.rs',
  'trufflesecurity.com',
  'tsl0922.github.io',
  'tuist.io',
  'tukaani.org',
  'turso.tech',
  'typescriptlang.org',
  'typst.app',
  'unbound.net',
  'undefined',
  'unicode.org',
  'unidata.ucar.edu',
  'unixodbc.org',
  'upliftci.dev',
  'upx.github.io',
  'uriparser.github.io',
  'vale.sh',
  'valkey.io',
  'vamp-plugins.org',
  'vanna.ai',
  'vapoursynth.com',
  'vaultproject.io',
  'vcluster.com',
  'vektra.github.io',
  'velero.io',
  'veracode.com',
  'vercel.com',
  'versity.com',
  'viaduct.ai',
  'viaduct.ai-ksops',
  'videolan.org',
  'vim.org',
  'virtualenv.pypa.io',
  'virtualsquare.org',
  'vitejs.dev',
  'vlang.io',
  'volta.sh',
  'wails.io',
  'wait4x.dev',
  'wasmer.io',
  'watchexec.github.io',
  'waterlan.home.xs4all.nl',
  'wavpack.com',
  'wayland.freedesktop.org',
  'webmproject.org',
  'werf.io',
  'wezfurlong.org',
  'wilfred.me.uk',
  'wimlib.net',
  'wireshark.org',
  'wix.com',
  'wkentaro.github.io',
  'wpewebkit.org',
  'wundergraph.com',
  'wxwidgets.org',
  'x.org',
  'x.org-xscrnsaver',
  'xcfile.dev',
  'xerces.apache.org',
  'xiph.org',
  'xkbcommon.org',
  'xplr.dev',
  'xpra.org',
  'xtls.github.io',
  'xvid.com',
  'yadm.io',
  'yarnpkg.com',
  'yasm.tortall.net',
  'youtube-dl.org',
  'yt-dlp.org',
  'yui.github.io',
  'zarf.dev',
  'zeromq.org',
  'ziglang.org',
  'zlib.net',
  'zrok.io',
  'zsh.sourceforge.io',
]

/**
 * Checks if a cached package exists and is still valid
 * @param packageName Name of the package to check
 * @param options Cache options
 * @returns The cached package data if valid, null otherwise
 */
export function getValidCachedPackage(
  packageName: string,
  options: PackageFetchOptions = {},
): { packageInfo: PkgxPackage, filePath: string } | null {
  try {
    // Determine cache directory
    const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR

    // If cache is disabled, return null immediately
    if (options.cache === false) {
      console.log(`Cache disabled for ${packageName}, skipping cache check`)
      return null
    }

    // Handle aliases - need to check the canonical name
    const resolvedName = PACKAGE_ALIASES[packageName] || packageName

    // Create a safe filename for the cache file - preserve dots, only replace slashes
    const safeFilename = resolvedName.replace(/\//g, '-')
    const cacheFilePath = path.join(cacheDir, `${safeFilename}.json`)

    console.log(`Checking for cache file: ${cacheFilePath}`)

    // Check if the cache file exists
    if (!fs.existsSync(cacheFilePath)) {
      return null
    }

    // Read and parse the cached data
    const cachedData = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8')) as PkgxPackage

    // Check if the cached data has a fetchedAt timestamp
    if (!cachedData.fetchedAt) {
      return null
    }

    // Check if the cache has expired
    const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
    const cacheExpirationMs = cacheExpirationMinutes * 60 * 1000
    const now = Date.now()

    if (now - cachedData.fetchedAt > cacheExpirationMs) {
      console.log(`Cache for ${packageName} has expired (age: ${Math.round((now - cachedData.fetchedAt) / 60000)} minutes)`)
      return null
    }

    console.log(`Using cached data for ${packageName} (age: ${Math.round((now - cachedData.fetchedAt) / 60000)} minutes)`)
    return { packageInfo: cachedData, filePath: cacheFilePath }
  }
  catch (error) {
    console.error(`Error reading cache for ${packageName}:`, error)
    return null
  }
}

/**
 * Saves package data to the cache
 * @param packageName Name of the package
 * @param packageInfo Package data to cache
 * @param options Cache options
 * @returns Path to the cached file
 */
export function saveToCacheAndOutput(
  packageName: string,
  packageInfo: PkgxPackage,
  options: PackageFetchOptions = {},
): { cachePath: string, outputPath: string } {
  // Add timestamp to the package info for cache
  const enhancedPackageInfo = {
    ...packageInfo,
    fetchedAt: Date.now(),
  }

  // Determine cache directory and ensure it exists
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }

  // Create a safe filename for the cache file - preserve dots, only replace slashes
  const safeFilename = packageName.replace(/\//g, '-')
  const cacheFilePath = path.join(cacheDir, `${safeFilename}.json`)

  // Save to cache with fetchedAt timestamp
  fs.writeFileSync(cacheFilePath, JSON.stringify(enhancedPackageInfo, null, 2))

  // Determine output directory and ensure it exists
  const outputDir = options.outputDir || 'packages'
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Create TypeScript file in the output directory
  const outputFilePath = savePackageAsTypeScript(outputDir, safeFilename, packageInfo)

  return { cachePath: cacheFilePath, outputPath: outputFilePath }
}

// Global browser instance to be shared across fetches (only used when not in concurrent mode)
let sharedBrowser: Browser | null = null

// Browser pool for concurrent operations
const browserPool: { browser: Browser, inUse: boolean, createdAt: number }[] = []
// Maximum number of browsers to keep in the pool
const MAX_BROWSER_POOL_SIZE = 6 // Conservative limit to prevent system overload

// Function to check system resources and adjust behavior
function getSystemResourceStatus() {
  const memUsage = process.memoryUsage()
  const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024)
  const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024)
  const rssUsedMB = Math.round(memUsage.rss / 1024 / 1024)

  // Consider system under stress if heap usage is high or RSS is very high
  const isUnderStress = heapUsedMB > 500 || rssUsedMB > 1000 || browserPool.length >= MAX_BROWSER_POOL_SIZE

  return {
    heapUsedMB,
    heapTotalMB,
    rssUsedMB,
    browserCount: browserPool.length,
    isUnderStress,
  }
}

// Define a variable to track if we've already logged a navigation message
let navigationLogged = false

// Create a function to log navigation only once
function logNavigation(url: string) {
  if (!navigationLogged) {
    console.log(`Navigating to ${url}...`)
    navigationLogged = true
  }
}

/**
 * Ensures all browser resources are properly closed
 */
export async function cleanupBrowserResources(): Promise<void> {
  // Clean up shared browser if it exists
  if (sharedBrowser) {
    try {
      console.log('Closing shared browser contexts and pages...')
      // Close any remaining contexts first
      const contexts = await sharedBrowser.contexts()
      for (const context of contexts) {
        try {
          // Close any pages in the context
          const pages = context.pages()
          for (const page of pages) {
            try {
              await Promise.race([
                page.close().catch(() => {}),
                new Promise(resolve => setTimeout(resolve, 1000)),
              ])
            }
            catch {
              // Ignore errors when closing pages
            }
          }
          await Promise.race([
            context.close().catch(() => {}),
            new Promise(resolve => setTimeout(resolve, 1000)),
          ])
        }
        catch {
          // Ignore errors when closing contexts
        }
      }

      // Close the browser with a timeout
      console.log('Closing browser...')
      await Promise.race([
        sharedBrowser.close().catch(e => console.error('Error closing browser:', e)),
        new Promise(resolve => setTimeout(resolve, 3000)),
      ])

      // Clear the shared browser reference even if close fails
      sharedBrowser = null
      console.log('Shared browser resources cleaned up')
    }
    catch (error) {
      console.error('Error during browser cleanup:', error)
      // Clear the reference even on error
      sharedBrowser = null
    }
  }

  // Clean up browser pool
  if (browserPool.length > 0) {
    console.log(`Closing ${browserPool.length} browsers from pool...`)
    const closePromises = browserPool.map(async (entry, index) => {
      try {
        console.log(`Closing browser ${index + 1}/${browserPool.length}...`)
        await Promise.race([
          entry.browser.close().catch(e => console.error(`Error closing pool browser ${index + 1}:`, e)),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ])
      }
      catch (error) {
        console.error(`Error closing browser ${index + 1} from pool:`, error)
      }
    })

    try {
      await Promise.all(closePromises)
    }
    catch (error) {
      console.error('Error during pool cleanup:', error)
    }

    // Clear the pool regardless of errors
    browserPool.length = 0
    console.log('Browser pool cleaned up')
  }
}

/**
 * Get a browser from the pool or create a new one if needed
 */
async function acquireBrowser(timeout: number): Promise<Browser | null> {
  // Check system resources before proceeding
  const resourceStatus = getSystemResourceStatus()
  if (resourceStatus.isUnderStress) {
    console.log(`System under stress (Heap: ${resourceStatus.heapUsedMB}MB, RSS: ${resourceStatus.rssUsedMB}MB, Browsers: ${resourceStatus.browserCount}), forcing cleanup...`)
    await cleanupBrowserResources()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait 2 seconds after cleanup
  }

  // First, check for and remove any dead browsers from the pool
  for (let i = browserPool.length - 1; i >= 0; i--) {
    try {
      // Try a simple operation to check if browser is still responsive
      try {
        await browserPool[i].browser.contexts()
      }
      catch {
        // If this fails, the browser is dead and should be removed
        console.log(`Removing dead browser from pool (index: ${i})`)
        browserPool.splice(i, 1)
      }
    }
    catch {
      // Remove from pool if any error occurs
      console.log(`Removing errored browser from pool (index: ${i})`)
      browserPool.splice(i, 1)
    }
  }

  // Try to reuse an available browser from the pool
  const availableEntry = browserPool.find(entry => !entry.inUse)
  if (availableEntry) {
    availableEntry.inUse = true
    return availableEntry.browser
  }

  // If pool is at max capacity, wait for an available browser instead of creating new ones
  if (browserPool.length >= MAX_BROWSER_POOL_SIZE) {
    console.log(`Browser pool at max capacity (${MAX_BROWSER_POOL_SIZE}), waiting for available browser...`)

    // Wait for a browser to become available (with timeout)
    const maxWaitTime = 30000 // 30 seconds
    const startWait = Date.now()

    while (Date.now() - startWait < maxWaitTime) {
      const availableEntry = browserPool.find(entry => !entry.inUse)
      if (availableEntry) {
        availableEntry.inUse = true
        return availableEntry.browser
      }
      // Wait a bit before checking again
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // If we still can't get a browser, force close the oldest one
    console.log('Timeout waiting for available browser, forcing cleanup...')
    browserPool.sort((a, b) => a.createdAt - b.createdAt)
    const oldestEntry = browserPool.shift()
    if (oldestEntry) {
      try {
        await Promise.race([
          oldestEntry.browser.close().catch(e => console.error('Error closing oldest browser:', e)),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ])
      }
      catch (error) {
        console.error('Error closing oldest browser:', error)
      }
    }
  }

  // If not found, create a new browser instance with retry logic
  let browser: Browser | null = null
  let retryCount = 0
  const maxRetries = 3

  // Add a small delay to prevent overwhelming the system with concurrent launches
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000))

  while (!browser && retryCount < maxRetries) {
    try {
      browser = await chromium.launch({
        headless: true,
        timeout: Math.min(timeout, 8000), // Cap browser launch timeout at 8 seconds
      })
    }
    catch (error) {
      retryCount++
      console.error(`Browser launch attempt ${retryCount} failed:`, error)

      // If we get ENOENT or connection errors, the system is likely overwhelmed
      const errorString = String(error)
      if (errorString.includes('ENOENT') || errorString.includes('Failed to connect')) {
        console.error('System appears overwhelmed, forcing cleanup and waiting longer...')
        // Force cleanup of all browsers
        await cleanupBrowserResources()
        // Wait longer before retrying
        await new Promise(resolve => setTimeout(resolve, 5000 * retryCount))
      }

      if (retryCount >= maxRetries) {
        console.error(`Failed to launch browser after ${maxRetries} attempts, skipping this operation`)
        return null // Return null instead of throwing to allow graceful degradation
      }
      // Wait before retrying with exponential backoff
      await new Promise(resolve => setTimeout(resolve, 2000 * retryCount))
    }
  }

  if (!browser) {
    throw new Error('Failed to create browser instance')
  }

  // Add to pool with current timestamp
  browserPool.push({
    browser,
    inUse: true,
    createdAt: Date.now(),
  })
  console.log(`Created new browser instance (pool size: ${browserPool.length}/${MAX_BROWSER_POOL_SIZE})`)

  return browser
}

/**
 * Release a browser back to the pool
 */
function releaseBrowser(browser: Browser): void {
  const entry = browserPool.find(entry => entry.browser === browser)
  if (entry) {
    entry.inUse = false
    console.log(`Released browser back to pool (available: ${browserPool.filter(e => !e.inUse).length}/${browserPool.length})`)
  }
}

/**
 * Fetches project folder names from the pkgxdev pantry repository using GitHub API
 * @param options Optional configuration
 * @returns Promise resolving to an array of project folders
 */
export async function fetchPkgxProjects(options: FetchProjectsOptions = {}): Promise<ProjectFolder[]> {
  const apiUrl = options.apiUrl || 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

  try {
    console.log(`Fetching projects from GitHub API: ${apiUrl}`)

    const response = await fetch(apiUrl, {
      headers: {
        // Using GitHub API without authentication has a lower rate limit
        // If you hit rate limits, you'll need to add an auth token
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from GitHub API: ${response.statusText}`)
    }

    const contents = await response.json() as GitHubContent[]

    // Filter to only include directories
    const projects = contents
      .filter(item => item.type === 'dir')
      .map(item => ({
        name: item.name,
        url: item.html_url,
      }))

    console.log(`Retrieved ${projects.length} projects from GitHub API`)

    // Sort projects alphabetically for consistency
    projects.sort((a, b) => a.name.localeCompare(b.name))

    return projects
  }
  catch (error) {
    console.error('Error fetching projects from GitHub API:', error)
    throw error
  }
}

/**
 * Fetches package information from pkgx.dev using Playwright
 * @param packageName The name of the package to fetch
 * @param options Optional configuration
 * @returns Promise resolving to package information with original name and full domain name
 */
export async function fetchPkgxPackage(
  packageName: string,
  options: PackageFetchOptions = {},
): Promise<{ packageInfo: PkgxPackage, originalName: string, fullDomainName: string }> {
  const originalName = packageName
  let fullDomainName = packageName
  let browser = null
  let page = null
  // Track if we created a browser or are using a provided one
  let createdBrowser = false

  // Special handling for known patterns
  // For paths like 'agwa.name/git-crypt', treat 'git-crypt' as the name
  // and 'agwa.name' as the domain
  if (packageName.includes('/')) {
    const [domain, name] = packageName.split('/')
    console.log(`Identified nested package: domain=${domain}, name=${name}`)
  }

  // Handle common package aliases
  if (PACKAGE_ALIASES[packageName]) {
    console.error(`'${packageName}' is an alias for '${PACKAGE_ALIASES[packageName]}', redirecting...`)
    fullDomainName = PACKAGE_ALIASES[packageName]
    packageName = PACKAGE_ALIASES[packageName]
  }

  try {
    // Set a maximum time for browser operations
    const browserTimeout = options.timeout || DEFAULT_TIMEOUT_MS
    const debugMode = options.debug || false

    // Try to use the provided browser from the pool if available
    if (options.browser) {
      browser = options.browser
    }
    // Otherwise try to use shared browser instance if available
    else if (sharedBrowser) {
      browser = sharedBrowser
    }
    else {
      // Launch a new browser with retries
      let retryCount = 0
      const maxLaunchRetries = 3
      createdBrowser = true

      while (retryCount < maxLaunchRetries) {
        try {
          browser = await chromium.launch({
            headless: true,
            timeout: 8000, // 8 second timeout for browser launch
          })
          sharedBrowser = browser
          break
        }
        catch (error) {
          retryCount++
          console.error(`Browser launch attempt ${retryCount} failed:`, error)
          if (retryCount >= maxLaunchRetries) {
            throw new Error(`Failed to launch browser after ${maxLaunchRetries} attempts`)
          }
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }

    // At this point browser should never be null due to our retry logic
    if (!browser) {
      console.error('Unexpected error: browser is null after successful launch')
      return createMinimalPackageInfo(packageName, originalName, fullDomainName)
    }

    const context = await browser.newContext()
    page = await context.newPage()

    const timeout = browserTimeout

    try {
      // Reset navigation logged state at the beginning of each fetch
      navigationLogged = false

      const pkgUrl = `https://pkgx.dev/pkgs/${packageName}/`
      logNavigation(pkgUrl)

      // Navigate to the package page
      await page.goto(pkgUrl, {
        timeout,
        waitUntil: 'networkidle',
      })

      // Wait a bit for client-side rendering to finish
      await page.waitForTimeout(2000)

      // Take a screenshot if debug mode is enabled
      if (debugMode) {
        const debugDir = path.join(process.cwd(), 'debug')
        if (!fs.existsSync(debugDir)) {
          fs.mkdirSync(debugDir, { recursive: true })
        }
        const screenshotPath = path.join(debugDir, `${packageName.replace(/\//g, '-')}_debug.png`)
        await page.screenshot({ path: screenshotPath })
        console.error(`Saved debug screenshot to ${screenshotPath}`)
      }

      console.log('Extracting package information...')

      // Extract package information and possible alias
      const result = await page.evaluate(() => {
        // Helper functions
        const getTextContent = (selector: string): string => {
          const element = document.querySelector(selector)
          return element ? (element.textContent?.trim() || '') : ''
        }

        // Get primary data from the page - using the MUI classes
        const nameElement = document.querySelector('h2.MuiTypography-h2')

        // Get the name (which might be an alias)
        const name = nameElement ? nameElement.childNodes[0].textContent?.trim() || '' : ''

        // Extract domain from span inside the h2
        const domainElement = document.querySelector('h2.MuiTypography-h2 span')
        const domain = domainElement
          ? domainElement.textContent?.trim().replace(/[()]/g, '') || ''
          : window.location.pathname.split('/pkgs/')[1]?.replace(/\/$/, '') || ''

        // Check for possible alias (e.g., "bun" for "bun.sh")
        const possibleAlias = name.toLowerCase()

        // Get description
        const description = getTextContent('h5.MuiTypography-h5:not(:has(+ ul))')

        // Get links
        const packageYmlUrl = (document.querySelector('a[href*="package.yml"]') as HTMLAnchorElement)?.href || ''
        const homepageUrl = (document.querySelector('a[href*="Homepage"]') as HTMLAnchorElement)?.href
          || (document.querySelector('a[href*="homepage"]') as HTMLAnchorElement)?.href || ''
        const githubUrl = (document.querySelector('a[href*="GitHub"]') as HTMLAnchorElement)?.href
          || (document.querySelector('a[href*="github"]') as HTMLAnchorElement)?.href || ''

        // Get install command
        const installCommand = getTextContent('div[data-terminal="true"]')

        // Find elements with specific headings and get the list items below them
        function getItemsBelowHeading(heading: string): string[] {
          const headings = Array.from(document.querySelectorAll('h5.MuiTypography-h5'))

          for (const h of headings) {
            if (h.textContent?.includes(heading)) {
              // Find the next UL after this heading
              let nextEl = h.nextElementSibling
              while (nextEl && nextEl.tagName !== 'UL') {
                nextEl = nextEl.nextElementSibling
              }

              if (nextEl && nextEl.tagName === 'UL') {
                // Get all list items
                const items = Array.from(nextEl.querySelectorAll('li'))
                return items.map(li => li.textContent?.trim() || '').filter(Boolean)
              }
            }
          }

          return []
        }

        // Get lists using the heading-based approach
        const programs = getItemsBelowHeading('Programs')
        const companions = getItemsBelowHeading('Companions')
        const dependencies = getItemsBelowHeading('Dependencies')
        const versions = getItemsBelowHeading('Versions')

        // Return two separate objects to avoid type issues
        return {
          possibleAlias,
          packageInfo: {
            name,
            domain,
            description,
            packageYmlUrl,
            homepageUrl,
            githubUrl,
            installCommand,
            programs,
            companions,
            dependencies,
            versions,
          },
        }
      })

      // Extract the package info and possible alias
      const { packageInfo, possibleAlias } = result

      // Special handling for nested paths
      if (originalName.includes('/')) {
        const [parentDomain, subPath] = originalName.split('/')

        // If we have a nested path, ensure proper domain and name are set
        if (!packageInfo.name || packageInfo.name === '') {
          // Use the subPath as the name if name is empty
          packageInfo.name = subPath
        }

        if (!packageInfo.domain || packageInfo.domain === '') {
          // Use the parent domain if domain is empty
          packageInfo.domain = parentDomain
        }

        // Update fullDomainName to include the parent
        fullDomainName = packageInfo.domain.includes('/')
          ? packageInfo.domain
          : `${packageInfo.domain}/${subPath}`
      }

      // Check for reverse aliases (eg "bun" for "bun.sh")
      if (possibleAlias && packageInfo.domain
        && possibleAlias !== packageInfo.domain
        && !packageInfo.domain.startsWith(possibleAlias)) {
        console.log(`Detected reverse alias: '${possibleAlias}' for '${packageInfo.domain}'`)
        // Update our full domain name if we found a reverse alias through the website
        fullDomainName = packageInfo.domain

        // Add the newly identified alias to our aliases map
        if (possibleAlias && possibleAlias !== originalName && packageInfo.domain) {
          console.log(`Adding new alias: '${possibleAlias}' -> '${packageInfo.domain}'`)
          PACKAGE_ALIASES[possibleAlias] = packageInfo.domain
        }

        // Also add the original name as an alias if it's different from both possibleAlias and domain
        if (originalName !== possibleAlias && originalName !== packageInfo.domain) {
          console.error(`Adding original name as alias: '${originalName}' -> '${packageInfo.domain}'`)
          PACKAGE_ALIASES[originalName] = packageInfo.domain
        }
      }

      // Alternative content extraction if the first method fails
      if (!packageInfo.name || packageInfo.name === '') {
        console.warn('First extraction method failed, trying alternative approach...')

        // Take a screenshot for debugging
        if (debugMode) {
          const debugDir = path.join(process.cwd(), 'debug')
          if (!fs.existsSync(debugDir)) {
            fs.mkdirSync(debugDir, { recursive: true })
          }
          const screenshotPath = path.join(debugDir, `${packageName.replace(/\//g, '-')}_alternative_debug.png`)
          await page.screenshot({ path: screenshotPath })
          console.error(`Saved alternative debug screenshot to ${screenshotPath}`)
        }

        // Try a simpler extraction approach
        const content = await page.content()

        // For nested paths, use the last part as the name
        if (originalName.includes('/')) {
          const parts = originalName.split('/')
          packageInfo.name = parts[parts.length - 1]
          packageInfo.domain = parts[0]
        }
        else {
          packageInfo.name = originalName
          packageInfo.domain = fullDomainName
        }

        // Try direct selector approach
        packageInfo.description = await page.evaluate(() => {
          const descEl = document.querySelector('h5.MuiTypography-root')
          return descEl ? descEl.textContent?.trim() || '' : ''
        })

        // Extract from HTML content for versions
        if (!packageInfo.versions || packageInfo.versions.length === 0) {
          const versionMatch = content.match(/<li>([\d.]+)<\/li>/g)
          if (versionMatch) {
            packageInfo.versions = versionMatch
              .map((m: string) => m.replace(/<\/?li>/g, ''))
              .filter(Boolean)
          }
          else {
            packageInfo.versions = []
          }
        }

        // Try to extract package links
        const ymlUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="package.yml"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.packageYmlUrl = ymlUrl

        const homeUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="Homepage"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.homepageUrl = homeUrl

        const gitUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="GitHub"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.githubUrl = gitUrl
      }

      // Try to get versions from GitHub API if still empty
      if (!packageInfo.versions || packageInfo.versions.length === 0) {
        console.warn('Attempting to fetch versions from GitHub API...')
        try {
          // Get the correct GitHub path - use domain if available
          const githubPath = packageInfo.domain || packageName
          const versions = await fetchVersionsFromGitHub(githubPath)
          packageInfo.versions = versions
        }
        catch (error) {
          console.warn(`Failed to fetch versions for ${packageName} from GitHub API:`, error)
          packageInfo.versions = []
        }
      }

      // Sort versions using semver if they exist
      if (packageInfo.versions && packageInfo.versions.length > 0) {
        try {
          // Sort versions in descending order (newest first)
          packageInfo.versions.sort((a: string, b: string) => {
            try {
              // Use Bun.semver.order with negative multiplier for descending sort (newest first)
              return -1 * Bun.semver.order(a, b)
            }
            catch {
              // Fallback to string comparison if semver fails
              return b.localeCompare(a)
            }
          })
        }
        catch (error) {
          console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
        }
      }

      // Ensure we have values for required fields
      packageInfo.name = packageInfo.name || originalName
      packageInfo.domain = packageInfo.domain || fullDomainName
      packageInfo.installCommand = packageInfo.installCommand || `pkgx ${originalName}`
      packageInfo.programs = packageInfo.programs || []
      packageInfo.companions = packageInfo.companions || []
      packageInfo.dependencies = packageInfo.dependencies || []
      packageInfo.versions = packageInfo.versions || []

      return { packageInfo, originalName, fullDomainName }
    }
    finally {
      // Close the page but keep the browser for reuse
      if (page) {
        try {
          await page.close()
        }
        catch (pageError) {
          console.error(`Error closing page for ${packageName}:`, pageError)
        }
      }
    }
  }
  catch (error) {
    console.error(`Error in fetchPkgxPackage for ${packageName}:`, error)

    // Make sure to close the browser if the outer try block fails
    if (browser) {
      try {
        await browser.close()
      }
      catch (err) {
        console.error(`Error closing browser for ${packageName}:`, err)
      }
    }

    throw error
  }
  finally {
    // Only close the browser if we created it and it's not the shared browser
    if (page) {
      try {
        await page.close()
      }
      catch {
        // Ignore errors when closing page
      }
    }

    // We don't close the browser here if we didn't create it or if it's the shared browser
    if (createdBrowser && browser && browser !== sharedBrowser) {
      try {
        await browser.close()
      }
      catch {
        // Ignore errors when closing browser
      }
    }
  }
}

/**
 * Attempts to fetch package versions from GitHub API
 */
async function fetchVersionsFromGitHub(packageName: string): Promise<string[]> {
  try {
    // Check if we're rate limited before making the request
    if (!shouldProceedWithGitHubRequest()) {
      console.warn(`Skipping GitHub API request for versions due to rate limiting`)
      return []
    }

    const response = await fetch(`https://api.github.com/repos/pkgxdev/pantry/contents/projects/${packageName}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'pkgx-tools',
      },
      // Add a timeout to prevent hanging
      signal: AbortSignal.timeout(15000),
    })

    // Save rate limit information to file
    saveRateLimitInfo(response.headers)

    // Handle rate limiting
    if (response.status === 403) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
      const rateLimitReset = response.headers.get('X-RateLimit-Reset')

      const resetTime = rateLimitReset ? new Date(Number(rateLimitReset) * 1000).toLocaleString() : 'unknown'
      console.warn(`GitHub API rate limit exceeded. Remaining: ${rateLimitRemaining || 0}, Reset: ${resetTime}`)

      // Return empty array instead of throwing to avoid breaking the flow
      return []
    }

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }

    const data = await response.json() as any[]
    // Look for version files or directories
    return data
      .filter(item => item.name.match(/^v\d+/))
      .map(item => item.name)
  }
  catch (error) {
    console.error('Error fetching versions from GitHub:', error)
    return []
  }
}

function generateProgressBar(completed: number, total: number, width = 30): string {
  const percentage = Math.min(100, Math.round((completed / total) * 100))
  const filledWidth = Math.round((width * completed) / total)
  const emptyWidth = width - filledWidth

  const filledBar = '='.repeat(filledWidth)
  const emptyBar = ' '.repeat(emptyWidth)

  return `[${filledBar}${emptyBar}] ${percentage}%`
}

// Add periodic cleanup function for browser resources
const CLEANUP_INTERVAL = 300000 // 5 minutes
let cleanupInterval: NodeJS.Timeout | null = null

/**
 * Sets up process exit handlers to ensure proper cleanup
 */
export function setupCleanupHandlers(): void {
  // Add graceful shutdown handlers
  const exitHandler = async (signal: string) => {
    console.log(`\nReceived ${signal} signal. Cleaning up resources...`)

    // Clear any intervals
    if (cleanupInterval) {
      clearInterval(cleanupInterval)
    }

    // Perform cleanup of browser resources
    await cleanupBrowserResources()

    console.log('Resources cleaned up. Exiting.')

    // Force exit after 5 seconds if process is hanging
    setTimeout(() => {
      console.log('Forcing process exit...')
      process.exit(0)
    }, 5000)
  }

  // Handle various termination signals
  process.on('SIGINT', () => exitHandler('SIGINT'))
  process.on('SIGTERM', () => exitHandler('SIGTERM'))
  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error)
    exitHandler('uncaughtException')
  })
}

// Initialize handlers
setupCleanupHandlers()

// Start a periodic cleanup task
export function startPeriodicCleanup(): void {
  // Clear any existing interval
  if (cleanupInterval) {
    clearInterval(cleanupInterval)
  }

  // Set a new interval to periodically clean up resources
  cleanupInterval = setInterval(() => {
    console.log('Running periodic browser resource cleanup...')
    cleanupBrowserResources()
      .then(() => console.log('Periodic cleanup completed'))
      .catch(err => console.error('Error during periodic cleanup:', err))
  }, CLEANUP_INTERVAL)
}

/**
 * Fetches and saves all packages with proper concurrency support
 */
export async function fetchAndSaveAllPackages(options: PackageFetchOptions = {}): Promise<string[]> {
  // Start the periodic cleanup task
  startPeriodicCleanup()

  const timeout = options.timeout || DEFAULT_TIMEOUT_MS
  const outputDir = options.outputDir || 'packages'
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  const useCache = options.cache !== false
  const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
  const concurrency = options.concurrency || 10

  // Use the requested concurrency (no artificial limit)
  const actualConcurrency = concurrency

  console.log(`Using timeout: ${timeout}ms for all operations`)

  // Track progress and timing
  const startTime = Date.now()
  let lastCleanupTime = startTime

  try {
    console.log('Fetching all packages...')

    // Start by fetching the complete list from GitHub API
    let allPackageNames: string[] = []
    try {
      // This is now our primary source of package information
      const projects = await fetchPkgxProjects()
      allPackageNames = projects.map(project => project.name)
      console.log(`Found ${allPackageNames.length} packages from GitHub API`)
    }
    catch (githubError) {
      console.error(`Error fetching from GitHub API: ${githubError}`)

      // Fall back to web scraping if GitHub API fails
      console.log('Falling back to web scraping...')

      try {
        // Launch browser for web scraping (not shared, just for this operation)
        const scrapingBrowser = await chromium.launch({
          headless: true,
          timeout: timeout / 2,
        })

        try {
          const context = await scrapingBrowser.newContext()
          const page = await context.newPage()

          console.log('Navigating to pkgx.dev/pkgs...')
          await page.goto('https://pkgx.dev/pkgs', {
            timeout,
            waitUntil: 'networkidle',
          })

          // Wait for client-side rendering
          await page.waitForTimeout(2000)

          console.log('Extracting package list...')
          allPackageNames = await page.evaluate(() => {
            const packageElements = Array.from(document.querySelectorAll('a[href^="/pkgs/"]'))
            return packageElements
              .map((link) => {
                const href = (link as HTMLAnchorElement).href
                const path = href.split('/pkgs/')[1]
                return path ? path.replace(/\/$/, '') : null
              })
              .filter(Boolean) as string[]
          })

          console.log(`Found ${allPackageNames.length} packages from web scraping`)
        }
        finally {
          // Close the scraping browser
          await scrapingBrowser.close()
        }
      }
      catch (scrapingError) {
        console.error(`Error with web scraping fallback: ${scrapingError}`)
      }
    }

    // If both methods failed or returned too few packages, use our built-in list
    if (allPackageNames.length < 600) {
      console.log(`Package count seems low (${allPackageNames.length}), using built-in package list...`)

      // Merge with any packages we already found to ensure we have a complete list
      const combinedList = [...new Set([...allPackageNames, ...ALL_KNOWN_PACKAGES])]
      allPackageNames = combinedList

      console.log(`Combined with built-in list, now have ${allPackageNames.length} packages`)
    }

    // Apply limit if specified
    if (options.limit && options.limit > 0 && options.limit < allPackageNames.length) {
      console.log(`Limiting to ${options.limit} packages as requested`)
      allPackageNames = allPackageNames.slice(0, options.limit)
    }

    // Process packages in chunks for concurrency
    const processedDomains = new Set<string>()
    const savedPackages: string[] = []
    const failedPackages: string[] = []

    // Define a function to process a single package with its own browser instance
    const processPackage = async (packageName: string): Promise<string | null> => {
      // Skip if we've already processed this domain
      if (processedDomains.has(packageName)) {
        console.log(`Skipping ${packageName} (already processed)`)
        return null
      }

      // Check cache first if enabled
      if (useCache) {
        const cachedPackage = getValidCachedPackage(packageName, {
          cacheDir,
          cacheExpirationMinutes,
        })

        if (cachedPackage) {
          const { packageInfo } = cachedPackage
          const fullDomainName = packageInfo.domain || packageName
          const safeFilename = fullDomainName.replace(/\//g, '-')

          // Generate TypeScript file in the output directory
          savePackageAsTypeScript(outputDir, safeFilename, packageInfo)
          console.log(`Used cached data for ${packageName} (generated TypeScript)`)

          // Mark this domain as processed
          processedDomains.add(fullDomainName)

          // Also mark any aliases as processed
          if (packageInfo.aliases && packageInfo.aliases.length > 0) {
            for (const alias of packageInfo.aliases) {
              processedDomains.add(alias)
            }
          }

          return fullDomainName
        }
      }

      let browser = null
      try {
        // Only acquire a browser if we didn't find the package in cache
        browser = await acquireBrowser(timeout)

        // If browser acquisition failed, skip this package
        if (!browser) {
          console.error(`Failed to acquire browser for ${packageName}, skipping`)
          failedPackages.push(packageName)
          return null
        }

        // Fetch and save the package with a timeout to prevent hanging
        const fetchPromise = fetchAndSavePackage(
          packageName,
          outputDir,
          timeout,
          false, // Save as TypeScript instead of JSON
          1, // First attempt
          3, // Max retries
          options.debug || false,
          { // Pass the same cache options
            cacheDir,
            cache: useCache,
            cacheExpirationMinutes,
            browser, // Now correctly passing the browser instance
          },
        )

        // Set a package-specific timeout as a safety measure
        const packageTimeout = timeout // Use the same flat timeout
        const result = await Promise.race([
          fetchPromise,
          new Promise<null>((resolve) => {
            setTimeout(() => {
              console.error(`Package ${packageName} processing timed out after ${packageTimeout}ms`)
              resolve(null)
            }, packageTimeout)
          }),
        ])

        if (!result) {
          // Timeout occurred
          failedPackages.push(packageName)
          console.error(`Skipping ${packageName} due to timeout`)
          return null
        }

        if (result.success && result.fullDomainName) {
          // Mark this domain as processed
          processedDomains.add(result.fullDomainName)

          // Also mark any aliases as processed
          if (result.aliases && result.aliases.length > 0) {
            for (const alias of result.aliases) {
              processedDomains.add(alias)
            }
          }

          return result.fullDomainName
        }
        else {
          // Failed to fetch - check if we have an existing file to preserve
          const safeFilename = packageName.replace(/\//g, '-')
          const existingFilePath = path.join(outputDir, `${safeFilename}.ts`)

          if (fs.existsSync(existingFilePath)) {
            console.log(`Preserving existing file for ${packageName} at ${existingFilePath}`)
            // Mark as processed to avoid overwriting
            processedDomains.add(packageName)
            return packageName
          }

          // No existing file, mark as failed
          failedPackages.push(packageName)
          return null
        }
      }
      catch (error) {
        console.error(`Error processing package ${packageName}:`, error)
        failedPackages.push(packageName)
        return null
      }
      finally {
        // Always release the browser back to the pool if we acquired one
        if (browser) {
          try {
            releaseBrowser(browser)
          }
          catch (error) {
            console.error(`Error releasing browser for ${packageName}:`, error)
            // If we can't release the browser, try to close it to prevent leaks
            try {
              await browser.close().catch(() => {})
            }
            catch {
              // Ignore any close errors
            }
          }
        }
      }
    }

    // Process all packages in parallel with controlled concurrency
    console.log(`Processing ${allPackageNames.length} packages with concurrency of ${actualConcurrency}...`)

    // Set a maximum time for the entire operation (30 minutes)
    const maxOperationTime = 30 * 60 * 1000 // 30 minutes
    const operationStartTime = Date.now()

    // Create chunks for better progress reporting
    // Limit chunk size to prevent system overload
    const chunkSize = Math.min(actualConcurrency, MAX_BROWSER_POOL_SIZE)
    const chunks: string[][] = []
    for (let i = 0; i < allPackageNames.length; i += chunkSize) {
      chunks.push(allPackageNames.slice(i, i + chunkSize))
    }

    console.log(`Split into ${chunks.length} chunks for processing`)

    // Process chunk by chunk
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
      // Check if we've exceeded the maximum operation time
      if (Date.now() - operationStartTime > maxOperationTime) {
        console.log(`Maximum operation time (${maxOperationTime / 60000} minutes) exceeded, stopping processing`)
        break
      }

      const chunk = chunks[chunkIndex]
      console.log(`Processing chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} packages)`)

      // Process this chunk of packages concurrently
      const chunkPromises = chunk.map(packageName => processPackage(packageName))
      const chunkResults = await Promise.all(chunkPromises)

      // Add a small delay between chunks to prevent system overload
      if (chunkIndex < chunks.length - 1) { // Don't delay after the last chunk
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      // Add successfully processed packages to results
      const successfulResults = chunkResults.filter(Boolean) as string[]
      savedPackages.push(...successfulResults)

      // Report progress
      const now = Date.now()
      const elapsedSeconds = Math.round((now - startTime) / 1000)
      const processedCount = savedPackages.length + failedPackages.length
      const remainingCount = allPackageNames.length - processedCount
      const completedPercent = Math.round((processedCount / allPackageNames.length) * 100)
      const progressBar = generateProgressBar(processedCount, allPackageNames.length)

      console.log(`${progressBar} Completed chunk ${chunkIndex + 1}/${chunks.length}, processed ${processedCount}/${allPackageNames.length} (${completedPercent}%), ${failedPackages.length} failed, ${remainingCount} remaining, elapsed time: ${elapsedSeconds}s`)

      // Periodic cleanup of browser resources to prevent memory issues
      // Do cleanup every 3 chunks or if there are more than MAX_BROWSER_POOL_SIZE browsers
      if (browserPool.length >= MAX_BROWSER_POOL_SIZE
        || (chunkIndex + 1) % 3 === 0
        || (now - lastCleanupTime > 90 * 1000)) { // 90 seconds
        console.log('Performing periodic browser resource cleanup...')
        await cleanupBrowserResources()
        lastCleanupTime = now

        // Small delay to let system recover after cleanup
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    console.log(`Successfully fetched ${savedPackages.length} packages, ${failedPackages.length} failed`)

    if (failedPackages.length > 0) {
      console.log(`Failed packages: ${failedPackages.slice(0, 10).join(', ')}${failedPackages.length > 10 ? '...' : ''}`)
    }

    // Generate index
    if (savedPackages.length > 0) {
      console.log('Regenerating package index...')
      // The generateIndex function would be called here if available
    }

    return savedPackages
  }
  catch (error) {
    console.error('Error during package fetching:', error)
    throw error
  }
  finally {
    // Clean up browser resources
    await cleanupBrowserResources()
    // Clean up the interval when finished
    if (cleanupInterval) {
      clearInterval(cleanupInterval)
      cleanupInterval = null
    }
  }
}

/**
 * Generates a TypeScript file name from a domain name
 * Converts domain names to camelCase format suitable for TypeScript files
 */
function getDomainAsTypescriptName(domain: string): string {
  // First handle the case where there are slashes (nested paths)
  if (domain.includes('/')) {
    // Split into parent domain and subpath
    const [parentDomain, ...subPathParts] = domain.split('/')
    const subPath = subPathParts.join('/')

    // Clean parent domain part (remove dots)
    const cleanParent = parentDomain.replace(/\./g, '')

    // For GitHub projects, include the full subpath in the variable name
    if (parentDomain.includes('github.com')) {
      // For GitHub repos, we need to keep all parts of the path
      // and transform them into a valid variable name
      // Replace all special characters and join everything into a single string
      const fullPath = subPath.replace(/[/.-]/g, '')
      return `${cleanParent}${fullPath}`.toLowerCase()
    }

    // For variable names, we need to remove special characters in the subpath
    const cleanSubPath = subPath.replace(/[.-]/g, '')

    // Join without a separator to make a valid variable name
    return `${cleanParent}${cleanSubPath}`.toLowerCase()
  }

  // For regular domains (no slashes), just remove dots
  return domain.replace(/\./g, '').toLowerCase()
}

/**
 * Generates TypeScript content for a package
 * @param packageInfo The package information object
 * @param domainName The domain name (used for the variable name)
 * @returns TypeScript file content as string
 */
function generateTypeScriptContent(packageInfo: PkgxPackage, domainName: string): string {
  // Convert domain to camelCase for variable name
  const varName = `${getDomainAsTypescriptName(domainName)}Package`

  // Ensure the variable name doesn't contain hyphens (which are invalid in JavaScript)
  const safeVarName = varName.replace(/-/g, '')

  // Format the package object with 'as const' assertions
  const formattedObj = formatObjectWithAsConst(packageInfo)

  // Create the TypeScript content with proper imports and exports
  return `export const ${safeVarName} = ${formattedObj}

export type ${safeVarName.charAt(0).toUpperCase() + safeVarName.slice(1)} = typeof ${safeVarName}
`
}

/**
 * Format an object with 'as const' assertions for TypeScript
 * @param obj The object to format
 * @returns A string representation of the object with 'as const' assertions
 */
function formatObjectWithAsConst(obj: Record<string, any>): string {
  const lines: string[] = []

  lines.push('{')

  // Add each property with appropriate formatting
  for (const [key, value] of Object.entries(obj)) {
    // Skip fetchedAt property to keep it out of TypeScript files
    if (key === 'fetchedAt')
      continue

    if (value === undefined) {
      lines.push(`  ${key}: undefined,`)
      continue
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        // Empty array
        lines.push(`  ${key}: [] as const,`)
      }
      else if (typeof value[0] === 'string') {
        // Format string array with line breaks for readability
        lines.push(`  ${key}: [`)
        for (const item of value) {
          lines.push(`    '${String(item).replace(/'/g, '\\\'')}',`)
        }
        lines.push(`  ] as const,`)
      }
      else {
        // Other array types - convert JSON.stringify output to use single quotes
        const jsonStr = JSON.stringify(value).replace(/"/g, '\'')
        lines.push(`  ${key}: ${jsonStr} as const,`)
      }
    }
    else if (typeof value === 'string') {
      // String with 'as const' using single quotes
      lines.push(`  ${key}: '${String(value).replace(/'/g, '\\\'')}' as const,`)
    }
    else if (typeof value === 'number' || typeof value === 'boolean') {
      // Numbers and booleans with 'as const'
      lines.push(`  ${key}: ${value} as const,`)
    }
    else if (value === null) {
      // Null values
      lines.push(`  ${key}: null,`)
    }
    else if (typeof value === 'object') {
      // Nested objects
      lines.push(`  ${key}: ${formatObjectWithAsConst(value)},`)
    }
    else {
      // Fallback for other types - convert JSON.stringify output to use single quotes
      const jsonStr = JSON.stringify(value).replace(/"/g, '\'')
      lines.push(`  ${key}: ${jsonStr},`)
    }
  }

  lines.push('}')

  return lines.join('\n')
}

/**
 * Saves package data as a TypeScript file
 * @param outputDir Directory to save the file
 * @param domainName Domain name of the package
 * @param packageInfo Package information object
 * @returns Path to the saved file
 */
export function savePackageAsTypeScript(outputDir: string, domainName: string, packageInfo: PkgxPackage): string {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Create a safe version of the domain name for the file name
  // For paths like 'apple.com/remote_cmds', replace the slash with hyphen
  // but preserve dots for better readability
  const safeFilename = domainName.replace(/\//g, '-')

  // Create the TypeScript file path using the same name as JSON files
  const filePath = path.join(outputDir, `${safeFilename}.ts`)

  // Remove fetchedAt from the package info before generating TypeScript
  const cleanPackageInfo = { ...packageInfo }
  delete cleanPackageInfo.fetchedAt

  // Generate TypeScript content
  const tsContent = generateTypeScriptContent(cleanPackageInfo, domainName)

  // Write the file
  fs.writeFileSync(filePath, tsContent)

  return filePath
}

/**
 * Creates a minimal package info object when browser launch fails
 */
function createMinimalPackageInfo(
  packageName: string,
  originalName: string,
  fullDomainName: string,
): { packageInfo: PkgxPackage, originalName: string, fullDomainName: string } {
  // If it's a nested path like 'agwa.name/git-crypt', extract parts
  const parts = packageName.split('/')
  const domain = parts[0]
  const subPath = parts.length > 1 ? parts.slice(1).join('/') : null

  // Create a minimal package info object
  const packageInfo: PkgxPackage = {
    name: subPath || packageName,
    domain,
    description: `Package information for ${packageName}`,
    packageYmlUrl: '',
    homepageUrl: '',
    githubUrl: '',
    installCommand: `sh <(curl https://pkgx.sh) ${packageName}`,
    programs: [],
    companions: [],
    dependencies: [],
    versions: [],
  }

  return { packageInfo, originalName, fullDomainName }
}

/**
 * Fetch and save a single package with improved handling for problematic packages
 * @param packageName The name of the package to fetch
 * @param outputDir Directory to save package data
 * @param timeout Timeout in milliseconds
 * @param saveAsJson Whether to save as JSON (true) or TypeScript (false)
 * @param retryNumber Current retry attempt number
 * @param maxRetries Maximum number of retry attempts
 * @param debug Whether to enable debug mode
 * @param options Additional options
 * @returns Promise with result information
 */
export async function fetchAndSavePackage(
  packageName: string,
  outputDir: string,
  timeout: number,
  saveAsJson = false,
  retryNumber = 1,
  maxRetries = 3,
  debug = false,
  options: PackageFetchOptions = {},
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }> {
  try {
    // Special handling for known problematic packages
    if (packageName === 'agwa.name') {
      console.log(`Using specialized handling for agwa.name...`)
      // Handle agwa.name/git-crypt directly rather than the base domain
      return await fetchAndSavePackage('agwa.name/git-crypt', outputDir, timeout, saveAsJson, 1, maxRetries, debug, options)
    }

    // Check cache first if caching is enabled
    const useCache = options.cache !== false
    const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR

    // If caching is disabled, log it and skip cache check completely
    if (!useCache) {
      console.log(`Cache disabled for ${packageName}, will fetch directly`)
    }
    else {
      // Handle aliases - need to check the canonical name
      // const resolvedName = PACKAGE_ALIASES[packageName] || packageName

      const cachedPackage = getValidCachedPackage(packageName, {
        cacheDir,
        cacheExpirationMinutes: options.cacheExpirationMinutes,
        cache: options.cache,
      })

      if (cachedPackage) {
        // We found valid cached data
        const { packageInfo } = cachedPackage

        // Create a safe version of the fullDomainName for filenames
        const safeFilename = packageName.replace(/\//g, '-')
        const fullDomainName = packageInfo.domain || packageName

        // Get aliases from the cached package
        const knownAliases = packageInfo.aliases || []

        // Save the package data to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, packageInfo)

        console.log(`Using cached data for ${packageName} (saved to ${filePath})`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
    }

    // Use flat timeout for all packages - no special handling
    const actualTimeout = timeout

    console.log(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Set an overall operation timeout to prevent hanging the entire process
    // This is different from the browser navigation timeout
    const operationTimeout = actualTimeout // Use the same timeout
    const operationTimeoutPromise = new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        console.error(`Operation timeout for ${packageName} after ${operationTimeout}ms`)
        resolve({ success: false })
      }, operationTimeout)
    })

    // Handle nested package paths
    if (packageName.includes('/')) {
      const pathParts = packageName.split('/')
      const domain = pathParts[0]
      const subPath = pathParts.slice(1).join('/')

      console.log(`Processing nested package: domain=${domain}, subPath=${subPath}`)

      try {
        // Use a try/catch here to handle 404 errors
        // Race the fetch operation against the timeout
        const fetchPromise = fetchPkgxPackage(`${domain}/${subPath}`, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        const fetchResult = await Promise.race([fetchPromise, operationTimeoutPromise])

        // If timeout occurred, throw a specialized error
        if ('success' in fetchResult && !fetchResult.success) {
          throw new Error(`Operation timed out after ${operationTimeout}ms`)
        }

        // Unwrap the proper result
        const { packageInfo, originalName, fullDomainName } = fetchResult as any

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch {
                // Fallback to string comparison if semver fails
                return b.localeCompare(a)
              }
            })
          }
          catch (error) {
            console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
          }
        }

        // Create a safe version of the fullDomainName for filenames
        const safeFilename = fullDomainName.replace(/\//g, '-')

        // Add aliases information to the package info
        const knownAliases: string[] = []

        // Check if this is the target of an alias in PACKAGE_ALIASES
        for (const [alias, target] of Object.entries(PACKAGE_ALIASES)) {
          if (target === fullDomainName) {
            knownAliases.push(alias)
          }
        }

        // Add the original name or path components as aliases
        if (originalName !== fullDomainName && !knownAliases.includes(originalName)) {
          knownAliases.push(originalName)
        }

        // Use the subpath component as an alias (e.g., 'acorn-cli' for 'acorn.io/acorn-cli')
        if (!knownAliases.includes(subPath)) {
          knownAliases.push(subPath)
        }

        // Add the aliases to the package info
        const enhancedPackageInfo = {
          ...packageInfo,
          fullPath: packageName, // Store the full path in the package info
          aliases: knownAliases.length > 0 ? knownAliases : [],
        }

        // Save to cache first
        if (useCache) {
          // Save to cache directory
          const cachePath = path.join(cacheDir, `${safeFilename}.json`)
          const cacheData = {
            ...enhancedPackageInfo,
            fetchedAt: Date.now(),
          }

          // Ensure cache directory exists
          if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true })
          }

          // Write to cache
          fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2))
          console.log(`Saved package data to cache: ${cachePath}`)
        }

        // Always save the TypeScript file to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

        console.log(`Successfully saved nested package ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
      catch (error: any) {
        if (error.toString().includes('404') || error.toString().includes('Not Found')) {
          console.error(`Package ${packageName} returned 404 Not Found. Trying alternative approaches...`)

          // For agwa.name specifically, try a different URL structure
          if (packageName.startsWith('agwa.name')) {
            // Try fetching with a direct URL approach for agwa.name
            let altBrowser = null
            try {
              altBrowser = await chromium.launch({
                headless: true,
                timeout: actualTimeout, // Use the same timeout
              })
              const context = await altBrowser.newContext()
              const page = await context.newPage()

              try {
                // Use the exact URL we know works
                const directUrl = `https://pkgx.dev/pkgs/${packageName}/`
                console.error(`Trying direct URL: ${directUrl}`)

                await page.goto(directUrl, {
                  timeout: actualTimeout, // Use the same timeout
                  waitUntil: 'networkidle',
                })

                // Wait for client-side rendering
                await page.waitForTimeout(2000)

                // Create a minimal package info object based on what we know
                const packageInfo: PkgxPackage = {
                  name: packageName.includes('/') ? packageName.split('/').pop() || packageName : packageName,
                  domain,
                  description: await page.evaluate(() => {
                    const descEl = document.querySelector('h5.MuiTypography-h5')
                    return descEl ? descEl.textContent?.trim() || '' : ''
                  }) || `${packageName} package`,
                  packageYmlUrl: `https://github.com/pkgxdev/pantry/tree/main/projects/${packageName}/package.yml`,
                  homepageUrl: '',
                  githubUrl: '',
                  installCommand: `pkgx ${packageName}`,
                  programs: [],
                  companions: [],
                  dependencies: [],
                  versions: [],
                }

                // Add the aliases
                const safeFilename = packageName.replace(/\//g, '-')
                const knownAliases = [subPath]

                const enhancedPackageInfo = {
                  ...packageInfo,
                  fullPath: packageName,
                  aliases: knownAliases.length > 0 ? knownAliases : [],
                }

                // Save the package data
                let filePath: string
                if (saveAsJson) {
                  filePath = path.join(outputDir, `${safeFilename}.json`)
                  fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
                }
                else {
                  filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)
                }

                console.log(`Successfully saved agwa.name package to ${filePath} using alternative method`)
                return {
                  success: true,
                  fullDomainName: packageName,
                  aliases: knownAliases,
                  filePath,
                }
              }
              finally {
                if (altBrowser) {
                  try {
                    await altBrowser.close()
                  }
                  catch (err) {
                    console.error(`Error closing alternative browser for ${packageName}:`, err)
                  }
                }
              }
            }
            catch (directError) {
              // Make sure to close the browser if an error occurs
              if (altBrowser) {
                try {
                  await altBrowser.close()
                }
                catch (err) {
                  console.error(`Error closing alternative browser for ${packageName}:`, err)
                }
              }
              console.error(`Alternative method for agwa.name also failed:`, directError)
              // Fall through to the retry logic
            }
          }

          // Don't retry on 404 errors, skip to avoid overwriting existing files
          console.error(`Package ${packageName} returned 404 Not Found. Skipping to avoid overwriting existing files.`)
          return { success: false, fullDomainName: packageName }
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
    else {
      // Handle standard (non-nested) packages
      try {
        // Race the fetch operation against the timeout
        const fetchPromise = fetchPkgxPackage(packageName, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        const fetchResult = await Promise.race([fetchPromise, operationTimeoutPromise])

        // If timeout occurred, throw a specialized error
        if ('success' in fetchResult && !fetchResult.success) {
          throw new Error(`Operation timed out after ${operationTimeout}ms`)
        }

        // Unwrap the proper result
        const { packageInfo, originalName, fullDomainName } = fetchResult as any

        // Validate that we have meaningful package data before proceeding
        const hasValidData = packageInfo.description && packageInfo.description.trim() !== ''
          && packageInfo.description !== `Package information for ${packageName}`
          && (packageInfo.versions.length > 0 || packageInfo.programs.length > 0 || packageInfo.packageYmlUrl)

        if (!hasValidData) {
          console.error(`Package ${packageName} appears to have no meaningful data. Skipping to avoid creating empty files.`)
          return { success: false, fullDomainName: packageName }
        }

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch {
                // Fallback to string comparison if semver fails
                return b.localeCompare(a)
              }
            })
          }
          catch (error) {
            console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
          }
        }

        // Create a safe version of the fullDomainName for filenames
        const safeFilename = fullDomainName.replace(/\//g, '-')

        // Add aliases information to the package info
        const knownAliases: string[] = []

        // Check if this is the target of an alias in PACKAGE_ALIASES
        for (const [alias, target] of Object.entries(PACKAGE_ALIASES)) {
          if (target === fullDomainName) {
            knownAliases.push(alias)
          }
        }

        // Add the original name or path components as aliases
        if (originalName !== fullDomainName && !knownAliases.includes(originalName)) {
          knownAliases.push(originalName)
        }

        // Add the aliases to the package info
        const enhancedPackageInfo = {
          ...packageInfo,
          fullPath: packageName, // Store the full path in the package info
          aliases: knownAliases.length > 0 ? knownAliases : [],
        }

        // Save to cache first
        if (useCache) {
          // Save to cache directory
          const cachePath = path.join(cacheDir, `${safeFilename}.json`)
          const cacheData = {
            ...enhancedPackageInfo,
            fetchedAt: Date.now(),
          }

          // Ensure cache directory exists
          if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true })
          }

          // Write to cache
          fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2))
          console.log(`Saved package data to cache: ${cachePath}`)
        }

        // Always save the TypeScript file to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

        console.log(`Successfully saved ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
      catch (error: any) {
        if (error.toString().includes('404') || error.toString().includes('Not Found')) {
          console.error(`Package ${packageName} returned 404 Not Found. Skipping to avoid overwriting existing files.`)
          return { success: false, fullDomainName: packageName }
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
  }
  catch (error: any) {
    // If we've exceeded retry attempts, create a minimal placeholder package
    if (retryNumber >= maxRetries) {
      console.error(`Failed to fetch package ${packageName} after ${retryNumber} attempts:`, error)

      // Save debugging information if debug mode is enabled
      if (debug) {
        const debugPath = path.join(process.cwd(), `${packageName.replace(/\//g, '-')}-error.txt`)
        fs.writeFileSync(debugPath, `Error fetching ${packageName}:\n${error.toString()}\n\nStack:\n${error.stack || 'No stack trace available'}`)
        console.error(`Saved error details to ${debugPath}`)
      }

      // Don't create placeholder packages to avoid overwriting existing good files
      console.error(`Skipping ${packageName} after ${retryNumber} failed attempts to avoid overwriting existing files.`)
      return { success: false, fullDomainName: packageName }
    }

    console.error(`Attempt ${retryNumber} failed for ${packageName}, retrying...`, error)

    // Short pause before retrying
    await new Promise(resolve => setTimeout(resolve, 500 * retryNumber)) // Shorter wait time for each retry

    // Retry with same base timeout (actual timeout will still increase due to retry counter)
    return fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug, options)
  }
}
