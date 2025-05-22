import type { PkgxPackage } from '../types'

import * as abseilio from './abseil.io'
import * as acornio from './acorn.io'
import * as agptco from './agpt.co'
import * as agwaname_git_crypt from './agwa.name-git-crypt'
import * as akuityio from './akuity.io'
import * as alacrittyorg from './alacritty.org'
import * as alembicsqlalchemyorg from './alembic.sqlalchemy.org'
import * as aliases from './aliases'
import * as alsa_projectorg from './alsa-project.org'
import * as amber_langcom from './amber-lang.com'
import * as amprs from './amp.rs'
import * as amrdevelopergithubio from './amrdeveloper.github.io'
import * as anchorecom from './anchore.com'
import * as androidcom from './android.com'
import * as angulardev from './angular.dev'
import * as ansiblecom from './ansible.com'
import * as aomediagooglesourcecom from './aomedia.googlesource.com'
import * as apacheorg from './apache.org'
import * as apktoolorg from './apktool.org'
import * as apollographqlcom from './apollographql.com'
import * as appiumio from './appium.io'
import * as applecom from './apple.com'
import * as applecom_remote_cmds from './applecom-remote_cmds'
import * as apptainerorg from './apptainer.org'
import * as aquasecuritygithubio from './aquasecurity.github.io'
import * as arduinogithubio from './arduino.github.io'
import * as argbashdev from './argbash.dev'
import * as argoprojgithubio from './argoproj.github.io'
import * as aria2githubio from './aria2.github.io'
import * as arkadedev from './arkade.dev'
import * as asciidoctororg from './asciidoctor.org'
import * as asciinemaorg from './asciinema.org'
import * as aspellnet from './aspell.net'
import * as assimporg from './assimp.org'
import * as ast_grepgithubio from './ast-grep.github.io'
import * as astralsh from './astral.sh'
import * as astralsh_ty from './astral.sh-ty'
import * as astralsh_ruff from './astralsh-ruff'
import * as astralsh_uv from './astralsh-uv'
import * as atlasgoio from './atlasgo.io'
import * as attrsorg from './attrs.org'
import * as augeasnet from './augeas.net'
import * as authzedcom from './authzed.com'
import * as aux4io from './aux4.io'
import * as awsamazoncom from './aws.amazon.com'
import * as awsamazoncom_cli from './awsamazoncom-cli'
import * as awsamazoncom_sam from './awsamazoncom-sam'
import * as bashlydannybco from './bashly.dannyb.co'
import * as bcryptsourceforgenet from './bcrypt.sourceforge.net'
import * as beyondgrepcom from './beyondgrep.com'
import * as biomejsdev from './biomejs.dev'
import * as bitcoinorg from './bitcoin.org'
import * as bittensorcom from './bittensor.com'
import * as bitwardencom from './bitwarden.com'
import * as blake2net from './blake2.net'
import * as bloomreachcom from './bloomreach.com'
import * as boostorg from './boost.org'
import * as borepub from './bore.pub'
import * as breakfastquaycom from './breakfastquay.com'
import * as browser_usecom from './browser-use.com'
import * as brxken128githubio from './brxken128.github.io'
import * as budimanjojogithubio from './budimanjojo.github.io'
import * as bufbuild from './buf.build'
import * as buildpacksio from './buildpacks.io'
import * as bunsh from './bun.sh'
import * as bytebasecom from './bytebase.com'
import * as bytereeforg from './bytereef.org'
import * as c_aresorg from './c-ares.org'
import * as caddyservercom from './caddyserver.com'
import * as cairographicsorg from './cairographics.org'
import * as capstone_engineorg from './capstone-engine.org'
import * as carapacesh from './carapace.sh'
import * as caskreadthedocsio from './cask.readthedocs.io'
import * as catborg from './catb.org'
import * as ccachedev from './ccache.dev'
import * as cedarpolicycom from './cedarpolicy.com'
import * as cedarpolicycom_cli from './cedarpolicycom-cli'
import * as cephcom from './ceph.com'
import * as cephcom_cephadm from './ceph.com-cephadm'
import * as ceres_solverorg from './ceres-solver.org'
import * as certbotefforg from './certbot.eff.org'
import * as certifiio from './certifi.io'
import * as cgalorg from './cgal.org'
import * as changiedev from './changie.dev'
import * as charmsh from './charm.sh'
import * as checkovio from './checkov.io'
import * as chezmoiio from './chezmoi.io'
import * as chiarkgreenendorguk from './chiark.greenend.org.uk'
import * as chromedriverchromiumorg from './chromedriver.chromium.org'
import * as ciliumio from './cilium.io'
import * as circlecicom from './circleci.com'
import * as ciscocom from './cisco.com'
import * as classicyarnpkgcom from './classic.yarnpkg.com'
import * as cligithubcom from './cli.github.com'
import * as clisporg from './clisp.org'
import * as clog_toolgithubio from './clog-tool.github.io'
import * as cloudflarecom from './cloudflare.com'
import * as cloudfoundryorg from './cloudfoundry.org'
import * as cloudnative_pgio from './cloudnative-pg.io'
import * as cmakeorg from './cmake.org'
import * as cmockaorg from './cmocka.org'
import * as cnqueryio from './cnquery.io'
import * as cocoapodsorg from './cocoapods.org'
import * as cocoapodsorg_xcodeproj from './cocoapods.org-xcodeproj'
import * as cocogittoio from './cocogitto.io'
import * as codevideolanorg from './code.videolan.org'
import * as codercom from './coder.com'
import * as cointopsh from './cointop.sh'
import * as condaorg from './conda.org'
import * as conftestdev from './conftest.dev'
import * as connectrpcorg from './connectrpc.org'
import * as consulio from './consul.io'
import * as convcogithubio from './convco.github.io'
import * as corednsio from './coredns.io'
import * as cpanminus from './cpanmin.us'
import * as crypto from './cr.yp.to'
import * as cratesio from './crates.io'
import * as cratesio_aichat from './crates.io-aichat'
import * as cratesio_bake_rs from './crates.io-bake-rs'
import * as cratesio_cargo_tarpaulin from './crates.io-cargo-tarpaulin'
import * as cratesio_ducker from './crates.io-ducker'
import * as cratesio_flamegraph from './crates.io-flamegraph'
import * as cratesio_ox from './crates.io-ox'
import * as cratesio_pik from './crates.io-pik'
import * as cratesio_qsv from './crates.io-qsv'
import * as cratesio_ripgrep_all from './crates.io-ripgrep-all'
import * as cratesio_rucola_notes from './crates.io-rucola-notes'
import * as cratesio_samply from './crates.io-samply'
import * as crazymaxdev from './crazymax.dev'
import * as creativeprojectsgithubio from './creativeprojects.github.io'
import * as cruftgithubio from './cruft.github.io'
import * as cryptographyio from './cryptography.io'
import * as crystal_langorg from './crystal-lang.org'
import * as cscopesourceforgeio from './cscope.sourceforge.io'
import * as csientuedutw from './csie.ntu.edu.tw'
import * as ctagsio from './ctags.io'
import * as ctopsh from './ctop.sh'
import * as cuelangorg from './cuelang.org'
import * as curlse from './curl.se'
import * as curlieio from './curlie.io'
import * as cyrusimaporg from './cyrusimap.org'
import * as cythonorg from './cython.org'
import * as d2langcom from './d2lang.com'
import * as daggerio from './dagger.io'
import * as dartdev from './dart.dev'
import * as darwinsyscom from './darwinsys.com'
import * as databrickscom from './databricks.com'
import * as daytonaio from './daytona.io'
import * as dblabdanvergaracom from './dblab.danvergara.com'
import * as debianorg from './debian.org'
import * as deepwisdomai from './deepwisdom.ai'
import * as denilsonsanombr from './denilson.sa.nom.br'
import * as denoland from './deno.land'
import * as depotdev from './depot.dev'
import * as dest_unreachorg from './dest-unreach.org'
import * as devyorhelnl from './dev.yorhel.nl'
import * as developer1passwordcom from './developer.1password.com'
import * as developer1passwordcom_1password_cli from './developer.1password.com-1password-cli'
import * as developersyubicocom from './developers.yubico.com'
import * as devpodsh from './devpod.sh'
import * as dgraphio from './dgraph.io'
import * as dhall_langorg from './dhall-lang.org'
import * as dhruvkbdev from './dhruvkb.dev'
import * as diggerdev from './digger.dev'
import * as digiporg from './digip.org'
import * as digitaloceancom from './digitalocean.com'
import * as direnvnet from './direnv.net'
import * as dkrzde from './dkrz.de'
import * as dnslookupdog from './dns.lookup.dog'
import * as docbookorg from './docbook.org'
import * as dockercom from './docker.com'
import * as doctavecom from './doctave.com'
import * as docutilsorg from './docutils.org'
import * as dotenv_lintergithubio from './dotenv-linter.github.io'
import * as dotenvxcom from './dotenvx.com'
import * as dotnetmicrosoftcom from './dotnet.microsoft.com'
import * as dotnetmicrosoftcom from './dotnetmicrosoftcom'
import * as doxygennl from './doxygen.nl'
import * as dozzledev from './dozzle.dev'
import * as dprintdev from './dprint.dev'
import * as drifreedesktoporg from './dri.freedesktop.org'
import * as duckdborg from './duckdb.org'
import * as duktapeorg from './duktape.org'
import * as dystroyorg from './dystroy.org'
import * as dystroyorg_bacon from './dystroy.org-bacon'
import * as earthlydev from './earthly.dev'
import * as ebassigithubio from './ebassi.github.io'
import * as edgedbcom from './edgedb.com'
import * as eigentuxfamilyorg from './eigen.tuxfamily.org'
import * as eksctlio from './eksctl.io'
import * as elementsprojectorg from './elementsproject.org'
import * as elfutilsorg from './elfutils.org'
import * as elixir_langorg from './elixir-lang.org'
import * as elizaOSgithubio from './elizaOS.github.io'
import * as elvsh from './elv.sh'
import * as encoredev from './encore.dev'
import * as endoflifedate from './endoflife.date'
import * as epsilon_projectsourceforgeio from './epsilon-project.sourceforge.io'
import * as erlangorg from './erlang.org'
import * as etcdio from './etcd.io'
import * as exiftoolorg from './exiftool.org'
import * as expodev from './expo.dev'
import * as eyrieorg from './eyrie.org'
import * as f1bonacc1githubio from './f1bonacc1.github.io'
import * as fabianlindforsse from './fabianlindfors.se'
import * as facebookcom from './facebook.com'
import * as fairwindscom from './fairwinds.com'
import * as fastlanetools from './fastlane.tools'
import * as felixkratzgithubio from './felixkratz.github.io'
import * as fermyoncom from './fermyon.com'
import * as ffmpegorg from './ffmpeg.org'
import * as fftworg from './fftw.org'
import * as filippoio from './filippo.io'
import * as fishshellcom from './fishshell.com'
import * as fliptio from './flipt.io'
import * as flitpypaio from './flit.pypa.io'
import * as fltkorg from './fltk.org'
import * as fluentciio from './fluentci.io'
import * as flutterdev from './flutter.dev'
import * as fluxcdio from './fluxcd.io'
import * as flyio from './fly.io'
import * as flywaydborg from './flywaydb.org'
import * as fmtdev from './fmt.dev'
import * as fna_xnagithubio from './fna-xna.github.io'
import * as freedesktoporg from './freedesktop.org'
import * as freeglutsourceforgeio from './freeglut.sourceforge.io'
import * as freetdsorg from './freetds.org'
import * as freetypeorg from './freetype.org'
import * as frei0rdyneorg from './frei0r.dyne.org'
import * as fuellabsgithubio from './fuellabs.github.io'
import * as fukuchiorg from './fukuchi.org'
import * as fullstorycom from './fullstory.com'
import * as furyco from './fury.co'
import * as fxwtf from './fx.wtf'
import * as gaia_gisit from './gaia-gis.it'
import * as gdalorg from './gdal.org'
import * as geoffgreerfm from './geoff.greer.fm'
import * as getclipboardapp from './getclipboard.app'
import * as getcomposerorg from './getcomposer.org'
import * as getfoundrysh from './getfoundry.sh'
import * as getsopsio from './getsops.io'
import * as getsynthcom from './getsynth.com'
import * as getzolaorg from './getzola.org'
import * as geuzorg from './geuz.org'
import * as gflagsgithubio from './gflags.github.io'
import * as ghostgumcomau from './ghostgum.com.au'
import * as ghostscriptcom from './ghostscript.com'
import * as giflibsourceforgeio from './giflib.sourceforge.io'
import * as git_clifforg from './git-cliff.org'
import * as git_lfscom from './git-lfs.com'
import * as git_quick_statssh from './git-quick-stats.sh'
import * as git_scmorg from './git-scm.org'
import * as git_towncom from './git-town.com'
import * as gitosgeoorg from './git.osgeo.org'
import * as gittoztnet from './git.tozt.net'
import * as githubcom from './github.com'
import * as githubcom_0age_create2crunch from './github.com-0age-create2crunch'
import * as githubcom_blacktop_lporg from './github.com-blacktop-lporg'
import * as githubcom_blynn_nex from './github.com-blynn-nex'
import * as githubcom_Cyfrin_safe_tx_hashes_util from './github.com-Cyfrin-safe-tx-hashes-util'
import * as githubcom_Diniboy1123_usque from './github.com-Diniboy1123-usque'
import * as githubcom_fastfetch_cli_fastfetch from './github.com-fastfetch-cli-fastfetch'
import * as githubcom_fiatjaf_nak from './github.com-fiatjaf-nak'
import * as githubcom_git_ecosystem_git_credential_manager from './github.com-git-ecosystem-git-credential-manager'
import * as githubcom_glauth_glauth from './github.com-glauth-glauth'
import * as githubcom_igorshubovych_markdownlint_cli from './github.com-igorshubovych-markdownlint-cli'
import * as githubcom_jarun_nnn from './github.com-jarun-nnn'
import * as githubcom_koekeishiya_skhd from './github.com-koekeishiya-skhd'
import * as githubcom_lucianosrp_rye_uv from './github.com-lucianosrp-rye-uv'
import * as githubcom_mas_cli_mas from './github.com-mas-cli-mas'
import * as githubcom_MilesCranmer_rip2 from './github.com-MilesCranmer-rip2'
import * as githubcom_MinseokOh_toml_cli from './github.com-MinseokOh-toml-cli'
import * as githubcom_mycreepy_pakku from './github.com-mycreepy-pakku'
import * as githubcom_Parchive_par2cmdline from './github.com-Parchive-par2cmdline'
import * as githubcom_peak_s5cmd from './github.com-peak-s5cmd'
import * as githubcom_peripheryapp_periphery from './github.com-peripheryapp-periphery'
import * as githubcom_shaka_project_shaka_packager from './github.com-shaka-project-shaka-packager'
import * as githubcom_sorah_envchain from './github.com-sorah-envchain'
import * as githubcom_spencerkimball_stargazers from './github.com-spencerkimball-stargazers'
import * as githubcom_withered_magic_starpls from './github.com-withered-magic-starpls'
import * as gitlabcom from './gitlab.com'
import * as gitleaksio from './gitleaks.io'
import * as glarosdtcumnedu from './glaros.dtc.umn.edu'
import * as gleamrun from './gleam.run'
import * as glewsourceforgeio from './glew.sourceforge.io'
import * as glfworg from './glfw.org'
import * as glmg_trucnet from './glm.g-truc.net'
import * as gnomeorg from './gnome.org'
import * as gnuorg from './gnu.org'
import * as gnupgorg from './gnupg.org'
import * as gnuplotinfo from './gnuplot.info'
import * as gnutlsorg from './gnutls.org'
import * as godev from './go.dev'
import * as gouberorg from './go.uber.org'
import * as gohugoio from './gohugo.io'
import * as golangci_lintrun from './golangci-lint.run'
import * as gomplateca from './gomplate.ca'
import * as googlecom from './google.com'
import * as googlegithubio from './google.github.io'
import * as goreleasercom from './goreleaser.com'
import * as gourceio from './gource.io'
import * as gphotoorg from './gphoto.org'
import * as gqlgencom from './gqlgen.com'
import * as gradleorg from './gradle.org'
import * as grafanacom from './grafana.com'
import * as granteddev from './granted.dev'
import * as graphicsmagickorg from './graphicsmagick.org'
import * as graphitesilorg from './graphite.sil.org'
import * as graphqleditorcom from './graphqleditor.com'
import * as graphvizorg from './graphviz.org'
import * as groongaorg from './groonga.org'
import * as groovy_langorg from './groovy-lang.org'
import * as grpcio from './grpc.io'
import * as gstreamerfreedesktoporg from './gstreamer.freedesktop.org'
import * as gtkorg from './gtk.org'
import * as gtssourceforgenet from './gts.sourceforge.net'
import * as hadronsorg from './hadrons.org'
import * as hardingmotdca from './harding.motd.ca'
import * as harfbuzzorg from './harfbuzz.org'
import * as hashicorpcom from './hashicorp.com'
import * as haskellorg from './haskell.org'
import * as hasuraio from './hasura.io'
import * as hatchpypaio from './hatch.pypa.io'
import * as hboehminfo from './hboehm.info'
import * as hdfgrouporg from './hdfgroup.org'
import * as heasarcgsfcnasagov from './heasarc.gsfc.nasa.gov'
import * as helix_editorcom from './helix-editor.com'
import * as helmsh from './helm.sh'
import * as herokucom from './heroku.com'
import * as hetznercom from './hetzner.com'
import * as hjsongithubio from './hjson.github.io'
import * as html_tidyorg from './html-tidy.org'
import * as htopdev from './htop.dev'
import * as htsliborg from './htslib.org'
import * as httpieio from './httpie.io'
import * as huggingfaceco from './huggingface.co'
import * as hugowang from './hugo.wang'
import * as hunspellgithubio from './hunspell.github.io'
import * as hurldev from './hurl.dev'
import * as ibrcstu_bsde from './ibr.cs.tu-bs.de'
import * as idleberggithubio from './idleberg.github.io'
import * as ijgorg from './ijg.org'
import * as imageflowio from './imageflow.io'
import * as imagemagickorg from './imagemagick.org'
import * as indexsupplycom from './indexsupply.com'
import * as info_ziporg from './info-zip.org'
import * as infracostio from './infracost.io'
import * as intelcom from './intel.com'
import * as invisible_islandnet from './invisible-island.net'
import * as invisible_islandnet_lynx from './invisible-island.net-lynx'
import * as ipfstech from './ipfs.tech'
import * as ipythonorg from './ipython.org'
import * as irohcomputer from './iroh.computer'
import * as iscorg from './isc.org'
import * as iscorg_bind9 from './isc.org-bind9'
import * as istioio from './istio.io'
import * as itstoolorg from './itstool.org'
import * as ivarchcom from './ivarch.com'
import * as jbangdev from './jbang.dev'
import * as jbig2deccom from './jbig2dec.com'
import * as jedisct1githubio from './jedisct1.github.io'
import * as jedsoftorg from './jedsoft.org'
import * as jemallocnet from './jemalloc.net'
import * as jenkins_xio from './jenkins-x.io'
import * as jenkinsio from './jenkins.io'
import * as jenvbe from './jenv.be'
import * as jetporchcom from './jetporch.com'
import * as jfrogcom from './jfrog.com'
import * as jlessio from './jless.io'
import * as jonasgithubio from './jonas.github.io'
import * as jpegorg from './jpeg.org'
import * as jsonnetorg from './jsonnet.org'
import * as jugitfz_juelichde from './jugit.fz-juelich.de'
import * as jujuis from './juju.is'
import * as julialangorg from './julialang.org'
import * as jumppaddev from './jumppad.dev'
import * as jupyterorg from './jupyter.org'
import * as justsystems from './just.systems'
import * as k3dio from './k3d.io'
import * as k6io from './k6.io'
import * as k9scliio from './k9scli.io'
import * as kafkaapacheorg from './kafka.apache.org'
import * as kagglecom from './kaggle.com'
import * as keephqdev from './keephq.dev'
import * as kerberosorg from './kerberos.org'
import * as kernelorg from './kernel.org'
import * as kernelorg_libcap from './kernel.org-libcap'
import * as khanacademyorg from './khanacademy.org'
import * as khronosorg from './khronos.org'
import * as kindsigsk8sio from './kind.sigs.k8s.io'
import * as kislyukgithubio from './kislyuk.github.io'
import * as kluctlio from './kluctl.io'
import * as kobuild from './ko.build'
import * as kornelski from './kornel.ski'
import * as kotlinlangorg from './kotlinlang.org'
import * as koyebcom from './koyeb.com'
import * as kptdev from './kpt.dev'
import * as krewsigsk8sio from './krew.sigs.k8s.io'
import * as ktlintgithubio from './ktlint.github.io'
import * as kubebuilderio from './kubebuilder.io'
import * as kubecmcloud from './kubecm.cloud'
import * as kubectxdev from './kubectx.dev'
import * as kubelinterio from './kubelinter.io'
import * as kubernetesio from './kubernetes.io'
import * as kubesharkco from './kubeshark.co'
import * as ladspaorg from './ladspa.org'
import * as lamesourceforgeio from './lame.sourceforge.io'
import * as langchaincom from './langchain.com'
import * as laravelcom from './laravel.com'
import * as lavinmqcom from './lavinmq.com'
import * as lcdforg from './lcdf.org'
import * as leethomasongithubio from './leethomason.github.io'
import * as leo_langorg from './leo-lang.org'
import * as leonerdorguk from './leonerd.org.uk'
import * as leptonicaorg from './leptonica.org'
import * as lftpyarru from './lftp.yar.ru'
import * as libarchiveorg from './libarchive.org'
import * as libcxxllvmorg from './libcxx.llvm.org'
import * as libeventorg from './libevent.org'
import * as libexifgithubio from './libexif.github.io'
import * as libexpatgithubio from './libexpat.github.io'
import * as libgdgithubio from './libgd.github.io'
import * as libgeosorg from './libgeos.org'
import * as libgit2org from './libgit2.org'
import * as libimobiledeviceorg from './libimobiledevice.org'
import * as libislsourceforgeio from './libisl.sourceforge.io'
import * as libjpeg_turboorg from './libjpeg-turbo.org'
import * as liblqrwikidotcom from './liblqr.wikidot.com'
import * as libpipelinegitlabio from './libpipeline.gitlab.io'
import * as libpngorg from './libpng.org'
import * as libproxygithubio from './libproxy.github.io'
import * as libraworg from './libraw.org'
import * as libsdlorg from './libsdl.org'
import * as libsodiumorg from './libsodium.org'
import * as libsouporg from './libsoup.org'
import * as libspngorg from './libspng.org'
import * as libsshorg from './libssh.org'
import * as libssh2org from './libssh2.org'
import * as libtomnet from './libtom.net'
import * as liburcuorg from './liburcu.org'
import * as libusbinfo from './libusb.info'
import * as libuvorg from './libuv.org'
import * as libvipsorg from './libvips.org'
import * as libwebsocketsorg from './libwebsockets.org'
import * as libziporg from './libzip.org'
import * as lima_vmio from './lima-vm.io'
import * as linkerdio from './linkerd.io'
import * as linux_pamorg from './linux-pam.org'
import * as liteclicom from './litecli.com'
import * as littlecmscom from './littlecms.com'
import * as llmdatasetteio from './llm.datasette.io'
import * as lloydgithubio from './lloyd.github.io'
import * as llvmorg from './llvm.org'
import * as localaiio from './localai.io'
import * as localstackcloud from './localstack.cloud'
import * as logdydev from './logdy.dev'
import * as logologicalorg from './logological.org'
import * as luaorg from './lua.org'
import * as luajitorg from './luajit.org'
import * as luarocksorg from './luarocks.org'
import * as lucagrullacom from './lucagrulla.com'
import * as lunarvimorg from './lunarvim.org'
import * as lxmlde from './lxml.de'
import * as lycheeclirs from './lychee.cli.rs'
import * as lz4org from './lz4.org'
import * as maaslalanicom from './maaslalani.com'
import * as macvimorg from './macvim.org'
import * as mailpitaxllentorg from './mailpit.axllent.org'
import * as makotemplatesorg from './makotemplates.org'
import * as man_dbgitlabio from './man-db.gitlab.io'
import * as mandocbsdlv from './mandoc.bsd.lv'
import * as mariadbcom from './mariadb.com'
import * as markupsafepalletsprojectscom from './markupsafe.palletsprojects.com'
import * as materializecom from './materialize.com'
import * as matiosourceforgeio from './matio.sourceforge.io'
import * as maturinrs from './maturin.rs'
import * as mavenapacheorg from './maven.apache.org'
import * as mcmc_jagssourceforgeio from './mcmc-jags.sourceforge.io'
import * as mercurerocks from './mercure.rocks'
import * as mercurial_scmorg from './mercurial-scm.org'
import * as mergestatcom from './mergestat.com'
import * as mesa3dorg from './mesa3d.org'
import * as mesonbuildcom from './mesonbuild.com'
import * as micro_editorgithubio from './micro-editor.github.io'
import * as microbreworg from './microbrew.org'
import * as microcksio from './microcks.io'
import * as microsoftcom from './microsoft.com'
import * as microsoftcom_code_cli from './microsoft.com-code-cli'
import * as microsoftcom_markitdown from './microsoft.com-markitdown'
import * as midnight_commanderorg from './midnight-commander.org'
import * as minio from './min.io'
import * as misejdxdev from './mise.jdx.dev'
import * as mitmproxyorg from './mitmproxy.org'
import * as mkcertdev from './mkcert.dev'
import * as mkdocsorg from './mkdocs.org'
import * as modalcom from './modal.com'
import * as moderncorg from './modernc.org'
import * as moderncorg_goyacc from './modernc.org-goyacc'
import * as mongodbcom from './mongodb.com'
import * as moonrepodev from './moonrepo.dev'
import * as moshorg from './mosh.org'
import * as mozillaorg from './mozilla.org'
import * as mozillaorg_cbindgen from './mozilla.org-cbindgen'
import * as mpg123de from './mpg123.de'
import * as mpmathorg from './mpmath.org'
import * as mpvio from './mpv.io'
import * as msgpackorg from './msgpack.org'
import * as mujscom from './mujs.com'
import * as mun_langorg from './mun-lang.org'
import * as mupdfcom from './mupdf.com'
import * as musepacknet from './musepack.net'
import * as musllibcorg from './musl.libc.org'
import * as mvdancc from './mvdan.cc'
import * as mvdancc_gofumpt from './mvdan.cc-gofumpt'
import * as mypy_langorg from './mypy-lang.org'
import * as mysqlcom from './mysql.com'
import * as nano_editororg from './nano-editor.org'
import * as nasmus from './nasm.us'
import * as neovimio from './neovim.io'
import * as netflixcom from './netflix.com'
import * as netliborg from './netlib.org'
import * as netpbmsourceforgenet from './netpbm.sourceforge.net'
import * as networkxorg from './networkx.org'
import * as nghttp2org from './nghttp2.org'
import * as nginxorg from './nginx.org'
import * as nikecom from './nike.com'
import * as nim_langorg from './nim-lang.org'
import * as ninja_buildorg from './ninja-build.org'
import * as nixosorg from './nixos.org'
import * as nixpackscom from './nixpacks.com'
import * as nlnetlabsnl from './nlnetlabs.nl'
import * as nmaporg from './nmap.org'
import * as nodejsorg from './nodejs.org'
import * as nomadprojectio from './nomadproject.io'
import * as nongnuorg from './nongnu.org'
import * as notrojgithubio from './notroj.github.io'
import * as npmjscom from './npmjs.com'
import * as ntporg from './ntp.org'
import * as numbatdev from './numbat.dev'
import * as numpyorg from './numpy.org'
import * as nushellsh from './nushell.sh'
import * as nxdev from './nx.dev'
import * as oauth2_proxygithubio from './oauth2-proxy.github.io'
import * as oberhumercom from './oberhumer.com'
import * as oberhumercom_ucl from './oberhumer.com-ucl'
import * as odigosio from './odigos.io'
import * as ohmyposhdev from './ohmyposh.dev'
import * as ollamaai from './ollama.ai'
import * as onefetchdev from './onefetch.dev'
import * as onsigithubio from './onsi.github.io'
import * as open_mpiorg from './open-mpi.org'
import * as openaicom from './openai.com'
import * as openapi_generatortech from './openapi-generator.tech'
import * as openbaoorg from './openbao.org'
import * as openblasnet from './openblas.net'
import * as opencore_amrsourceforgeio from './opencore-amr.sourceforge.io'
import * as opendaporg from './opendap.org'
import * as opendevorg from './opendev.org'
import * as openexrcom from './openexr.com'
import * as openinterpretercom from './openinterpreter.com'
import * as openjdkorg from './openjdk.org'
import * as openjpegorg from './openjpeg.org'
import * as openldaporg from './openldap.org'
import * as openldaporg_liblmdb from './openldap.org-liblmdb'
import * as openmpllvmorg from './openmp.llvm.org'
import * as openpmixgithubio from './openpmix.github.io'
import * as openpolicyagentorg from './openpolicyagent.org'
import * as openprintinggithubio from './openprinting.github.io'
import * as openrestyorg from './openresty.org'
import * as opensearchorg from './opensearch.org'
import * as openshiftcom from './openshift.com'
import * as openslideorg from './openslide.org'
import * as opensshcom from './openssh.com'
import * as opensslorg from './openssl.org'
import * as opentofuorg from './opentofu.org'
import * as openvpnnet from './openvpn.net'
import * as operatorframeworkio from './operatorframework.io'
import * as opus_codecorg from './opus-codec.org'
import * as oraclecom from './oracle.com'
import * as orasland from './oras.land'
import * as ordinalscom from './ordinals.com'
import * as orhundev from './orhun.dev'
import * as otssnipttcom from './ots.sniptt.com'
import * as packerio from './packer.io'
import * as pagureio from './pagure.io'
import * as palletsprojectscom from './palletsprojects.com'
import * as pandocorg from './pandoc.org'
import * as pantsbuildorg from './pantsbuild.org'
import * as paulfitzgithubio from './paulfitz.github.io'
import * as pcreorg from './pcre.org'
import * as pcscliteapdufr from './pcsclite.apdu.fr'
import * as pdmfmingdev from './pdm.fming.dev'
import * as peopleengrtamuedu from './people.engr.tamu.edu'
import * as peopleredhatcom from './people.redhat.com'
import * as perlorg from './perl.org'
import * as permitio from './permit.io'
import * as phpnet from './php.net'
import * as phpmyadminnet from './phpmyadmin.net'
import * as pimalayaorg from './pimalaya.org'
import * as pinnipeddev from './pinniped.dev'
import * as pippypaio from './pip.pypa.io'
import * as pipenvpypaio from './pipenv.pypa.io'
import * as pixmanorg from './pixman.org'
import * as pkgxsh from './pkgx.sh'
import * as pkgxsh_dev from './pkgx.sh-dev'
import * as pkgxsh_pkgm from './pkgx.sh-pkgm'
import * as pkl_langorg from './pkl-lang.org'
import * as planetscalecom from './planetscale.com'
import * as plantumlcom from './plantuml.com'
import * as plasmasturmorg from './plasmasturm.org'
import * as plocatesessenet from './plocate.sesse.net'
import * as pluralithcom from './pluralith.com'
import * as pngquantorg from './pngquant.org'
import * as pnpmio from './pnpm.io'
import * as po4aorg from './po4a.org'
import * as pocketbaseio from './pocketbase.io'
import * as podmanio from './podman.io'
import * as poktnetwork from './pokt.network'
import * as popplerfreedesktoporg from './poppler.freedesktop.org'
import * as portaudiocom from './portaudio.com'
import * as postgresqlorg from './postgresql.org'
import * as postgrestorg from './postgrest.org'
import * as practical_schemenet from './practical-scheme.net'
import * as pre_commitcom from './pre-commit.com'
import * as prefixdev from './prefix.dev'
import * as presslygithubio from './pressly.github.io'
import * as prettierio from './prettier.io'
import * as printfngithubio from './printfn.github.io'
import * as priverdev from './priver.dev'
import * as projorg from './proj.org'
import * as project_copaceticgithubio from './project-copacetic.github.io'
import * as projectdiscoveryio from './projectdiscovery.io'
import * as projectdiscoveryio_nuclei from './projectdiscovery.io-nuclei'
import * as projenio from './projen.io'
import * as protobufdev from './protobuf.dev'
import * as prql_langorg from './prql-lang.org'
import * as psycopgorg from './psycopg.org'
import * as publichronopikde from './public.hronopik.de'
import * as pugixmlorg from './pugixml.org'
import * as pulumiio from './pulumi.io'
import * as pwgensourceforgeio from './pwgen.sourceforge.io'
import * as pwmtorg from './pwmt.org'
import * as pygmentsorg from './pygments.org'
import * as pyinvokeorg from './pyinvoke.org'
import * as pypagithubio from './pypa.github.io'
import * as pypaio from './pypa.io'
import * as pytestorg from './pytest.org'
import * as python_pilloworg from './python-pillow.org'
import * as python_poetryorg from './python-poetry.org'
import * as pythonorg from './python.org'
import * as pyyamlorg from './pyyaml.org'
import * as qemuorg from './qemu.org'
import * as qhullorg from './qhull.org'
import * as qpdfsourceforgeio from './qpdf.sourceforge.io'
import * as qtio from './qt.io'
import * as quarydev from './quary.dev'
import * as quickwitio from './quickwit.io'
import * as r_wosorg from './r-wos.org'
import * as rabbitmqcom from './rabbitmq.com'
import * as raccoinorg from './raccoin.org'
import * as radicleorg from './radicle.org'
import * as railwayapp from './railway.app'
import * as rapidjsonorg from './rapidjson.org'
import * as rarlabcom from './rarlab.com'
import * as rbenvorg from './rbenv.org'
import * as rcloneorg from './rclone.org'
import * as re2corg from './re2c.org'
import * as reacheremail from './reacher.email'
import * as rebar3org from './rebar3.org'
import * as redisio from './redis.io'
import * as rendercom from './render.com'
import * as replibytecom from './replibyte.com'
import * as resticnet from './restic.net'
import * as rhashsourceforgenet from './rhash.sourceforge.net'
import * as rigauxorg from './rigaux.org'
import * as riverbankcomputingcom from './riverbankcomputing.com'
import * as robotframeworkorg from './robotframework.org'
import * as rockdabootgithubio from './rockdaboot.github.io'
import * as rometools from './rome.tools'
import * as rpmorg from './rpm.org'
import * as rsyncsambaorg from './rsync.samba.org'
import * as rtmpdumpmplayerhqhu from './rtmpdump.mplayerhq.hu'
import * as rtomaykogithubio from './rtomayko.github.io'
import * as rubocoporg from './rubocop.org'
import * as ruby_langorg from './ruby-lang.org'
import * as rubygemsorg from './rubygems.org'
import * as ruciocernch from './rucio.cern.ch'
import * as runatlantisio from './runatlantis.io'
import * as rust_langgithubio from './rust-lang.github.io'
import * as rust_langorg from './rust-lang.org'
import * as rust_langorg_rust_bindgen from './rust-lang.org-rust-bindgen'
import * as rust_scriptorg from './rust-script.org'
import * as ryeastralsh from './rye.astral.sh'
import * as s3toolsorg from './s3tools.org'
import * as saerasoftcom from './saerasoft.com'
import * as sagiegurarigithubio from './sagiegurari.github.io'
import * as sass_langcom from './sass-lang.com'
import * as savannahnongnuorg from './savannah.nongnu.org'
import * as scala_langorg from './scala-lang.org'
import * as scala_sbtorg from './scala-sbt.org'
import * as scalewaycom from './scaleway.com'
import * as schollzcom from './schollz.com'
import * as sconsorg from './scons.org'
import * as scryerpl from './scryer.pl'
import * as sdkmanio from './sdkman.io'
import * as seaweedfscom from './seaweedfs.com'
import * as sentryio from './sentry.io'
import * as sfnet from './sf.net'
import * as sfcgalorg from './sfcgal.org'
import * as sftpgocom from './sftpgo.com'
import * as shellchecknet from './shellcheck.net'
import * as sigstoredev from './sigstore.dev'
import * as simplesystemsorg from './simplesystems.org'
import * as sing_boxapp from './sing-box.app'
import * as skaffolddev from './skaffold.dev'
import * as smartmontoolsorg from './smartmontools.org'
import * as snapletdev from './snaplet.dev'
import * as sniffnetnet from './sniffnet.net'
import * as snykio from './snyk.io'
import * as solanacom from './solana.com'
import * as soldeerxyz from './soldeer.xyz'
import * as soliditylangorg from './soliditylang.org'
import * as sonarqubeorg from './sonarqube.org'
import * as sourceforgenet from './sourceforge.net'
import * as sourcewareorg from './sourceware.org'
import * as soxrsourceforgenet from './soxr.sourceforge.net'
import * as spacetimedbcom from './spacetimedb.com'
import * as spawnlink from './spawn.link'
import * as speexorg from './speex.org'
import * as sphinx_docorg from './sphinx-doc.org'
import * as sqlcdev from './sqlc.dev'
import * as sqlfluffcom from './sqlfluff.com'
import * as sqliteorg from './sqlite.org'
import * as squawkhqcom from './squawkhq.com'
import * as srtallianceorg from './srtalliance.org'
import * as sshxio from './sshx.io'
import * as starshiprs from './starship.rs'
import * as steampipeio from './steampipe.io'
import * as stedolangithubio from './stedolan.github.io'
import * as straceio from './strace.io'
import * as streamlinkgithubio from './streamlink.github.io'
import * as stripecom from './stripe.com'
import * as supabasecom from './supabase.com'
import * as surrealdbcom from './surrealdb.com'
import * as svenstarogithubio from './svenstaro.github.io'
import * as swaggerio from './swagger.io'
import * as swiftorg from './swift.org'
import * as swigorg from './swig.org'
import * as symfonycom from './symfony.com'
import * as sympyorg from './sympy.org'
import * as syncthingnet from './syncthing.net'
import * as systemdio from './systemd.io'
import * as tagliborg from './taglib.org'
import * as tailcallrun from './tailcall.run'
import * as tailwindcsscom from './tailwindcss.com'
import * as taku910githubio from './taku910.github.io'
import * as talosdev from './talos.dev'
import * as taplotamasfedev from './taplo.tamasfe.dev'
import * as tartrun from './tart.run'
import * as taskfiledev from './taskfile.dev'
import * as tcl_langorg from './tcl-lang.org'
import * as tcltk from './tcl.tk'
import * as tcpdumporg from './tcpdump.org'
import * as tcshorg from './tcsh.org'
import * as teaxyz from './tea.xyz'
import * as tectonic_typesettinggithubio from './tectonic-typesetting.github.io'
import * as templguide from './templ.guide'
import * as temporalio from './temporal.io'
import * as terraform_docsio from './terraform-docs.io'
import * as terraformio from './terraform.io'
import * as terragruntgruntworkio from './terragrunt.gruntwork.io'
import * as terratagio from './terratag.io'
import * as tesseract_ocrgithubio from './tesseract-ocr.github.io'
import * as thekelleysorguk from './thekelleys.org.uk'
import * as theoraorg from './theora.org'
import * as thoughtworksgithubio from './thoughtworks.github.io'
import * as thrysoeedk from './thrysoee.dk'
import * as tidbytcom from './tidbyt.com'
import * as tiltdev from './tilt.dev'
import * as tinybirdco from './tinybird.co'
import * as tinygoorg from './tinygo.org'
import * as tldrsh from './tldr.sh'
import * as tlrdev from './tlr.dev'
import * as tmateio from './tmate.io'
import * as toxwiki from './tox.wiki'
import * as traefikio from './traefik.io'
import * as tree_sittergithubio from './tree-sitter.github.io'
import * as trippyclirs from './trippy.cli.rs'
import * as trufflesecuritycom from './trufflesecurity.com'
import * as tsl0922githubio from './tsl0922.github.io'
import * as tuistio from './tuist.io'
import * as tukaaniorg from './tukaani.org'
import * as tursotech from './turso.tech'
import * as typescriptlangorg from './typescriptlang.org'
import * as typstapp from './typst.app'
import * as unboundnet from './unbound.net'
import * as undefined from './undefined'
import * as unicodeorg from './unicode.org'
import * as unidataucaredu from './unidata.ucar.edu'
import * as unixodbcorg from './unixodbc.org'
import * as upliftcidev from './upliftci.dev'
import * as upxgithubio from './upx.github.io'
import * as uriparsergithubio from './uriparser.github.io'
import * as valesh from './vale.sh'
import * as valkeyio from './valkey.io'
import * as vamp_pluginsorg from './vamp-plugins.org'
import * as vannaai from './vanna.ai'
import * as vapoursynthcom from './vapoursynth.com'
import * as vaultprojectio from './vaultproject.io'
import * as vclustercom from './vcluster.com'
import * as vektragithubio from './vektra.github.io'
import * as veleroio from './velero.io'
import * as veracodecom from './veracode.com'
import * as vercelcom from './vercel.com'
import * as versitycom from './versity.com'
import * as viaductai from './viaduct.ai'
import * as viaductai_ksops from './viaduct.ai-ksops'
import * as videolanorg from './videolan.org'
import * as vimorg from './vim.org'
import * as virtualenvpypaio from './virtualenv.pypa.io'
import * as virtualsquareorg from './virtualsquare.org'
import * as vitejsdev from './vitejs.dev'
import * as vlangio from './vlang.io'
import * as voltash from './volta.sh'
import * as wailsio from './wails.io'
import * as wait4xdev from './wait4x.dev'
import * as wasmerio from './wasmer.io'
import * as watchexecgithubio from './watchexec.github.io'
import * as waterlanhomexs4allnl from './waterlan.home.xs4all.nl'
import * as wavpackcom from './wavpack.com'
import * as waylandfreedesktoporg from './wayland.freedesktop.org'
import * as waylandfreedesktoporg from './waylandfreedesktoporg'
import * as webmprojectorg from './webmproject.org'
import * as werfio from './werf.io'
import * as wezfurlongorg from './wezfurlong.org'
import * as wilfredmeuk from './wilfred.me.uk'
import * as wimlibnet from './wimlib.net'
import * as wiresharkorg from './wireshark.org'
import * as wixcom from './wix.com'
import * as wkentarogithubio from './wkentaro.github.io'
import * as wpewebkitorg from './wpewebkit.org'
import * as wundergraphcom from './wundergraph.com'
import * as wxwidgetsorg from './wxwidgets.org'
import * as xorg from './x.org'
import * as xorg_xscrnsaver from './x.org-xscrnsaver'
import * as xcfiledev from './xcfile.dev'
import * as xercesapacheorg from './xerces.apache.org'
import * as xiphorg from './xiph.org'
import * as xkbcommonorg from './xkbcommon.org'
import * as xplrdev from './xplr.dev'
import * as xpraorg from './xpra.org'
import * as xtlsgithubio from './xtls.github.io'
import * as xvidcom from './xvid.com'
import * as yadmio from './yadm.io'
import * as yarnpkgcom from './yarnpkg.com'
import * as yasmtortallnet from './yasm.tortall.net'
import * as youtube_dlorg from './youtube-dl.org'
import * as yt_dlporg from './yt-dlp.org'
import * as yuigithubio from './yui.github.io'
import * as zarfdev from './zarf.dev'
import * as zeromqorg from './zeromq.org'
import * as ziglangorg from './ziglang.org'
import * as zlibnet from './zlib.net'
import * as zrokio from './zrok.io'
import * as zshsourceforgeio from './zsh.sourceforge.io'

export * from './abseil.io'
export * from './acorn.io'
export * from './agpt.co'
export * from './agwa.name-git-crypt'
export * from './akuity.io'
export * from './alacritty.org'
export * from './alembic.sqlalchemy.org'
export * from './aliases'
export * from './alsa-project.org'
export * from './amber-lang.com'
export * from './amp.rs'
export * from './amrdeveloper.github.io'
export * from './anchore.com'
export * from './android.com'
export * from './angular.dev'
export * from './ansible.com'
export * from './aomedia.googlesource.com'
export * from './apache.org'
export * from './apktool.org'
export * from './apollographql.com'
export * from './appium.io'
export * from './apple.com'
export * from './applecom-remote_cmds'
export * from './apptainer.org'
export * from './aquasecurity.github.io'
export * from './arduino.github.io'
export * from './argbash.dev'
export * from './argoproj.github.io'
export * from './aria2.github.io'
export * from './arkade.dev'
export * from './asciidoctor.org'
export * from './asciinema.org'
export * from './aspell.net'
export * from './assimp.org'
export * from './ast-grep.github.io'
export * from './astral.sh'
export * from './astral.sh-ty'
export * from './astralsh-ruff'
export * from './astralsh-uv'
export * from './atlasgo.io'
export * from './attrs.org'
export * from './augeas.net'
export * from './authzed.com'
export * from './aux4.io'
export * from './aws.amazon.com'
export * from './awsamazoncom-cli'
export * from './awsamazoncom-sam'
export * from './bashly.dannyb.co'
export * from './bcrypt.sourceforge.net'
export * from './beyondgrep.com'
export * from './biomejs.dev'
export * from './bitcoin.org'
export * from './bittensor.com'
export * from './bitwarden.com'
export * from './blake2.net'
export * from './bloomreach.com'
export * from './boost.org'
export * from './bore.pub'
export * from './breakfastquay.com'
export * from './browser-use.com'
export * from './brxken128.github.io'
export * from './budimanjojo.github.io'
export * from './buf.build'
export * from './buildpacks.io'
export * from './bun.sh'
export * from './bytebase.com'
export * from './bytereef.org'
export * from './c-ares.org'
export * from './caddyserver.com'
export * from './cairographics.org'
export * from './capstone-engine.org'
export * from './carapace.sh'
export * from './cask.readthedocs.io'
export * from './catb.org'
export * from './ccache.dev'
export * from './cedarpolicy.com'
export * from './cedarpolicycom-cli'
export * from './ceph.com'
export * from './ceph.com-cephadm'
export * from './ceres-solver.org'
export * from './certbot.eff.org'
export * from './certifi.io'
export * from './cgal.org'
export * from './changie.dev'
export * from './charm.sh'
export * from './checkov.io'
export * from './chezmoi.io'
export * from './chiark.greenend.org.uk'
export * from './chromedriver.chromium.org'
export * from './cilium.io'
export * from './circleci.com'
export * from './cisco.com'
export * from './classic.yarnpkg.com'
export * from './cli.github.com'
export * from './clisp.org'
export * from './clog-tool.github.io'
export * from './cloudflare.com'
export * from './cloudfoundry.org'
export * from './cloudnative-pg.io'
export * from './cmake.org'
export * from './cmocka.org'
export * from './cnquery.io'
export * from './cocoapods.org'
export * from './cocoapods.org-xcodeproj'
export * from './cocogitto.io'
export * from './code.videolan.org'
export * from './coder.com'
export * from './cointop.sh'
export * from './conda.org'
export * from './conftest.dev'
export * from './connectrpc.org'
export * from './consul.io'
export * from './convco.github.io'
export * from './coredns.io'
export * from './cpanmin.us'
export * from './cr.yp.to'
export * from './crates.io'
export * from './crates.io-aichat'
export * from './crates.io-bake-rs'
export * from './crates.io-cargo-tarpaulin'
export * from './crates.io-ducker'
export * from './crates.io-flamegraph'
export * from './crates.io-ox'
export * from './crates.io-pik'
export * from './crates.io-qsv'
export * from './crates.io-ripgrep-all'
export * from './crates.io-rucola-notes'
export * from './crates.io-samply'
export * from './crazymax.dev'
export * from './creativeprojects.github.io'
export * from './cruft.github.io'
export * from './cryptography.io'
export * from './crystal-lang.org'
export * from './cscope.sourceforge.io'
export * from './csie.ntu.edu.tw'
export * from './ctags.io'
export * from './ctop.sh'
export * from './cuelang.org'
export * from './curl.se'
export * from './curlie.io'
export * from './cyrusimap.org'
export * from './cython.org'
export * from './d2lang.com'
export * from './dagger.io'
export * from './dart.dev'
export * from './darwinsys.com'
export * from './databricks.com'
export * from './daytona.io'
export * from './dblab.danvergara.com'
export * from './debian.org'
export * from './deepwisdom.ai'
export * from './denilson.sa.nom.br'
export * from './deno.land'
export * from './depot.dev'
export * from './dest-unreach.org'
export * from './dev.yorhel.nl'
export * from './developer.1password.com'
export * from './developer.1password.com-1password-cli'
export * from './developers.yubico.com'
export * from './devpod.sh'
export * from './dgraph.io'
export * from './dhall-lang.org'
export * from './dhruvkb.dev'
export * from './digger.dev'
export * from './digip.org'
export * from './digitalocean.com'
export * from './direnv.net'
export * from './dkrz.de'
export * from './dns.lookup.dog'
export * from './docbook.org'
export * from './docker.com'
export * from './doctave.com'
export * from './docutils.org'
export * from './dotenv-linter.github.io'
export * from './dotenvx.com'
export * from './dotnet.microsoft.com'
export * from './dotnetmicrosoftcom'
export * from './doxygen.nl'
export * from './dozzle.dev'
export * from './dprint.dev'
export * from './dri.freedesktop.org'
export * from './duckdb.org'
export * from './duktape.org'
export * from './dystroy.org'
export * from './dystroy.org-bacon'
export * from './earthly.dev'
export * from './ebassi.github.io'
export * from './edgedb.com'
export * from './eigen.tuxfamily.org'
export * from './eksctl.io'
export * from './elementsproject.org'
export * from './elfutils.org'
export * from './elixir-lang.org'
export * from './elizaOS.github.io'
export * from './elv.sh'
export * from './encore.dev'
export * from './endoflife.date'
export * from './epsilon-project.sourceforge.io'
export * from './erlang.org'
export * from './etcd.io'
export * from './exiftool.org'
export * from './expo.dev'
export * from './eyrie.org'
export * from './f1bonacc1.github.io'
export * from './fabianlindfors.se'
export * from './facebook.com'
export * from './fairwinds.com'
export * from './fastlane.tools'
export * from './felixkratz.github.io'
export * from './fermyon.com'
export * from './ffmpeg.org'
export * from './fftw.org'
export * from './filippo.io'
export * from './fishshell.com'
export * from './flipt.io'
export * from './flit.pypa.io'
export * from './fltk.org'
export * from './fluentci.io'
export * from './flutter.dev'
export * from './fluxcd.io'
export * from './fly.io'
export * from './flywaydb.org'
export * from './fmt.dev'
export * from './fna-xna.github.io'
export * from './freedesktop.org'
export * from './freeglut.sourceforge.io'
export * from './freetds.org'
export * from './freetype.org'
export * from './frei0r.dyne.org'
export * from './fuellabs.github.io'
export * from './fukuchi.org'
export * from './fullstory.com'
export * from './fury.co'
export * from './fx.wtf'
export * from './gaia-gis.it'
export * from './gdal.org'
export * from './geoff.greer.fm'
export * from './getclipboard.app'
export * from './getcomposer.org'
export * from './getfoundry.sh'
export * from './getsops.io'
export * from './getsynth.com'
export * from './getzola.org'
export * from './geuz.org'
export * from './gflags.github.io'
export * from './ghostgum.com.au'
export * from './ghostscript.com'
export * from './giflib.sourceforge.io'
export * from './git-cliff.org'
export * from './git-lfs.com'
export * from './git-quick-stats.sh'
export * from './git-scm.org'
export * from './git-town.com'
export * from './git.osgeo.org'
export * from './git.tozt.net'
export * from './github.com'
export * from './github.com-0age-create2crunch'
export * from './github.com-blacktop-lporg'
export * from './github.com-blynn-nex'
export * from './github.com-Cyfrin-safe-tx-hashes-util'
export * from './github.com-Diniboy1123-usque'
export * from './github.com-fastfetch-cli-fastfetch'
export * from './github.com-fiatjaf-nak'
export * from './github.com-git-ecosystem-git-credential-manager'
export * from './github.com-glauth-glauth'
export * from './github.com-igorshubovych-markdownlint-cli'
export * from './github.com-jarun-nnn'
export * from './github.com-koekeishiya-skhd'
export * from './github.com-lucianosrp-rye-uv'
export * from './github.com-mas-cli-mas'
export * from './github.com-MilesCranmer-rip2'
export * from './github.com-MinseokOh-toml-cli'
export * from './github.com-mycreepy-pakku'
export * from './github.com-Parchive-par2cmdline'
export * from './github.com-peak-s5cmd'
export * from './github.com-peripheryapp-periphery'
export * from './github.com-shaka-project-shaka-packager'
export * from './github.com-sorah-envchain'
export * from './github.com-spencerkimball-stargazers'
export * from './github.com-withered-magic-starpls'
export * from './gitlab.com'
export * from './gitleaks.io'
export * from './glaros.dtc.umn.edu'
export * from './gleam.run'
export * from './glew.sourceforge.io'
export * from './glfw.org'
export * from './glm.g-truc.net'
export * from './gnome.org'
export * from './gnu.org'
export * from './gnupg.org'
export * from './gnuplot.info'
export * from './gnutls.org'
export * from './go.dev'
export * from './go.uber.org'
export * from './gohugo.io'
export * from './golangci-lint.run'
export * from './gomplate.ca'
export * from './google.com'
export * from './google.github.io'
export * from './goreleaser.com'
export * from './gource.io'
export * from './gphoto.org'
export * from './gqlgen.com'
export * from './gradle.org'
export * from './grafana.com'
export * from './granted.dev'
export * from './graphicsmagick.org'
export * from './graphite.sil.org'
export * from './graphqleditor.com'
export * from './graphviz.org'
export * from './groonga.org'
export * from './groovy-lang.org'
export * from './grpc.io'
export * from './gstreamer.freedesktop.org'
export * from './gtk.org'
export * from './gts.sourceforge.net'
export * from './hadrons.org'
export * from './harding.motd.ca'
export * from './harfbuzz.org'
export * from './hashicorp.com'
export * from './haskell.org'
export * from './hasura.io'
export * from './hatch.pypa.io'
export * from './hboehm.info'
export * from './hdfgroup.org'
export * from './heasarc.gsfc.nasa.gov'
export * from './helix-editor.com'
export * from './helm.sh'
export * from './heroku.com'
export * from './hetzner.com'
export * from './hjson.github.io'
export * from './html-tidy.org'
export * from './htop.dev'
export * from './htslib.org'
export * from './httpie.io'
export * from './huggingface.co'
export * from './hugo.wang'
export * from './hunspell.github.io'
export * from './hurl.dev'
export * from './ibr.cs.tu-bs.de'
export * from './idleberg.github.io'
export * from './ijg.org'
export * from './imageflow.io'
export * from './imagemagick.org'
export * from './indexsupply.com'
export * from './info-zip.org'
export * from './infracost.io'
export * from './intel.com'
export * from './invisible-island.net'
export * from './invisible-island.net-lynx'
export * from './ipfs.tech'
export * from './ipython.org'
export * from './iroh.computer'
export * from './isc.org'
export * from './isc.org-bind9'
export * from './istio.io'
export * from './itstool.org'
export * from './ivarch.com'
export * from './jbang.dev'
export * from './jbig2dec.com'
export * from './jedisct1.github.io'
export * from './jedsoft.org'
export * from './jemalloc.net'
export * from './jenkins-x.io'
export * from './jenkins.io'
export * from './jenv.be'
export * from './jetporch.com'
export * from './jfrog.com'
export * from './jless.io'
export * from './jonas.github.io'
export * from './jpeg.org'
export * from './jsonnet.org'
export * from './jugit.fz-juelich.de'
export * from './juju.is'
export * from './julialang.org'
export * from './jumppad.dev'
export * from './jupyter.org'
export * from './just.systems'
export * from './k3d.io'
export * from './k6.io'
export * from './k9scli.io'
export * from './kafka.apache.org'
export * from './kaggle.com'
export * from './keephq.dev'
export * from './kerberos.org'
export * from './kernel.org'
export * from './kernel.org-libcap'
export * from './khanacademy.org'
export * from './khronos.org'
export * from './kind.sigs.k8s.io'
export * from './kislyuk.github.io'
export * from './kluctl.io'
export * from './ko.build'
export * from './kornel.ski'
export * from './kotlinlang.org'
export * from './koyeb.com'
export * from './kpt.dev'
export * from './krew.sigs.k8s.io'
export * from './ktlint.github.io'
export * from './kubebuilder.io'
export * from './kubecm.cloud'
export * from './kubectx.dev'
export * from './kubelinter.io'
export * from './kubernetes.io'
export * from './kubeshark.co'
export * from './ladspa.org'
export * from './lame.sourceforge.io'
export * from './langchain.com'
export * from './laravel.com'
export * from './lavinmq.com'
export * from './lcdf.org'
export * from './leethomason.github.io'
export * from './leo-lang.org'
export * from './leonerd.org.uk'
export * from './leptonica.org'
export * from './lftp.yar.ru'
export * from './libarchive.org'
export * from './libcxx.llvm.org'
export * from './libevent.org'
export * from './libexif.github.io'
export * from './libexpat.github.io'
export * from './libgd.github.io'
export * from './libgeos.org'
export * from './libgit2.org'
export * from './libimobiledevice.org'
export * from './libisl.sourceforge.io'
export * from './libjpeg-turbo.org'
export * from './liblqr.wikidot.com'
export * from './libpipeline.gitlab.io'
export * from './libpng.org'
export * from './libproxy.github.io'
export * from './libraw.org'
export * from './libsdl.org'
export * from './libsodium.org'
export * from './libsoup.org'
export * from './libspng.org'
export * from './libssh.org'
export * from './libssh2.org'
export * from './libtom.net'
export * from './liburcu.org'
export * from './libusb.info'
export * from './libuv.org'
export * from './libvips.org'
export * from './libwebsockets.org'
export * from './libzip.org'
export * from './lima-vm.io'
export * from './linkerd.io'
export * from './linux-pam.org'
export * from './litecli.com'
export * from './littlecms.com'
export * from './llm.datasette.io'
export * from './lloyd.github.io'
export * from './llvm.org'
export * from './localai.io'
export * from './localstack.cloud'
export * from './logdy.dev'
export * from './logological.org'
export * from './lua.org'
export * from './luajit.org'
export * from './luarocks.org'
export * from './lucagrulla.com'
export * from './lunarvim.org'
export * from './lxml.de'
export * from './lychee.cli.rs'
export * from './lz4.org'
export * from './maaslalani.com'
export * from './macvim.org'
export * from './mailpit.axllent.org'
export * from './makotemplates.org'
export * from './man-db.gitlab.io'
export * from './mandoc.bsd.lv'
export * from './mariadb.com'
export * from './markupsafe.palletsprojects.com'
export * from './materialize.com'
export * from './matio.sourceforge.io'
export * from './maturin.rs'
export * from './maven.apache.org'
export * from './mcmc-jags.sourceforge.io'
export * from './mercure.rocks'
export * from './mercurial-scm.org'
export * from './mergestat.com'
export * from './mesa3d.org'
export * from './mesonbuild.com'
export * from './micro-editor.github.io'
export * from './microbrew.org'
export * from './microcks.io'
export * from './microsoft.com'
export * from './microsoft.com-code-cli'
export * from './microsoft.com-markitdown'
export * from './midnight-commander.org'
export * from './min.io'
export * from './mise.jdx.dev'
export * from './mitmproxy.org'
export * from './mkcert.dev'
export * from './mkdocs.org'
export * from './modal.com'
export * from './modernc.org'
export * from './modernc.org-goyacc'
export * from './mongodb.com'
export * from './moonrepo.dev'
export * from './mosh.org'
export * from './mozilla.org'
export * from './mozilla.org-cbindgen'
export * from './mpg123.de'
export * from './mpmath.org'
export * from './mpv.io'
export * from './msgpack.org'
export * from './mujs.com'
export * from './mun-lang.org'
export * from './mupdf.com'
export * from './musepack.net'
export * from './musl.libc.org'
export * from './mvdan.cc'
export * from './mvdan.cc-gofumpt'
export * from './mypy-lang.org'
export * from './mysql.com'
export * from './nano-editor.org'
export * from './nasm.us'
export * from './neovim.io'
export * from './netflix.com'
export * from './netlib.org'
export * from './netpbm.sourceforge.net'
export * from './networkx.org'
export * from './nghttp2.org'
export * from './nginx.org'
export * from './nike.com'
export * from './nim-lang.org'
export * from './ninja-build.org'
export * from './nixos.org'
export * from './nixpacks.com'
export * from './nlnetlabs.nl'
export * from './nmap.org'
export * from './nodejs.org'
export * from './nomadproject.io'
export * from './nongnu.org'
export * from './notroj.github.io'
export * from './npmjs.com'
export * from './ntp.org'
export * from './numbat.dev'
export * from './numpy.org'
export * from './nushell.sh'
export * from './nx.dev'
export * from './oauth2-proxy.github.io'
export * from './oberhumer.com'
export * from './oberhumer.com-ucl'
export * from './odigos.io'
export * from './ohmyposh.dev'
export * from './ollama.ai'
export * from './onefetch.dev'
export * from './onsi.github.io'
export * from './open-mpi.org'
export * from './openai.com'
export * from './openapi-generator.tech'
export * from './openbao.org'
export * from './openblas.net'
export * from './opencore-amr.sourceforge.io'
export * from './opendap.org'
export * from './opendev.org'
export * from './openexr.com'
export * from './openinterpreter.com'
export * from './openjdk.org'
export * from './openjpeg.org'
export * from './openldap.org'
export * from './openldap.org-liblmdb'
export * from './openmp.llvm.org'
export * from './openpmix.github.io'
export * from './openpolicyagent.org'
export * from './openprinting.github.io'
export * from './openresty.org'
export * from './opensearch.org'
export * from './openshift.com'
export * from './openslide.org'
export * from './openssh.com'
export * from './openssl.org'
export * from './opentofu.org'
export * from './openvpn.net'
export * from './operatorframework.io'
export * from './opus-codec.org'
export * from './oracle.com'
export * from './oras.land'
export * from './ordinals.com'
export * from './orhun.dev'
export * from './ots.sniptt.com'
export * from './packer.io'
export * from './pagure.io'
export * from './palletsprojects.com'
export * from './pandoc.org'
export * from './pantsbuild.org'
export * from './paulfitz.github.io'
export * from './pcre.org'
export * from './pcsclite.apdu.fr'
export * from './pdm.fming.dev'
export * from './people.engr.tamu.edu'
export * from './people.redhat.com'
export * from './perl.org'
export * from './permit.io'
export * from './php.net'
export * from './phpmyadmin.net'
export * from './pimalaya.org'
export * from './pinniped.dev'
export * from './pip.pypa.io'
export * from './pipenv.pypa.io'
export * from './pixman.org'
export * from './pkgx.sh'
export * from './pkgx.sh-dev'
export * from './pkgx.sh-pkgm'
export * from './pkl-lang.org'
export * from './planetscale.com'
export * from './plantuml.com'
export * from './plasmasturm.org'
export * from './plocate.sesse.net'
export * from './pluralith.com'
export * from './pngquant.org'
export * from './pnpm.io'
export * from './po4a.org'
export * from './pocketbase.io'
export * from './podman.io'
export * from './pokt.network'
export * from './poppler.freedesktop.org'
export * from './portaudio.com'
export * from './postgresql.org'
export * from './postgrest.org'
export * from './practical-scheme.net'
export * from './pre-commit.com'
export * from './prefix.dev'
export * from './pressly.github.io'
export * from './prettier.io'
export * from './printfn.github.io'
export * from './priver.dev'
export * from './proj.org'
export * from './project-copacetic.github.io'
export * from './projectdiscovery.io'
export * from './projectdiscovery.io-nuclei'
export * from './projen.io'
export * from './protobuf.dev'
export * from './prql-lang.org'
export * from './psycopg.org'
export * from './public.hronopik.de'
export * from './pugixml.org'
export * from './pulumi.io'
export * from './pwgen.sourceforge.io'
export * from './pwmt.org'
export * from './pygments.org'
export * from './pyinvoke.org'
export * from './pypa.github.io'
export * from './pypa.io'
export * from './pytest.org'
export * from './python-pillow.org'
export * from './python-poetry.org'
export * from './python.org'
export * from './pyyaml.org'
export * from './qemu.org'
export * from './qhull.org'
export * from './qpdf.sourceforge.io'
export * from './qt.io'
export * from './quary.dev'
export * from './quickwit.io'
export * from './r-wos.org'
export * from './rabbitmq.com'
export * from './raccoin.org'
export * from './radicle.org'
export * from './railway.app'
export * from './rapidjson.org'
export * from './rarlab.com'
export * from './rbenv.org'
export * from './rclone.org'
export * from './re2c.org'
export * from './reacher.email'
export * from './rebar3.org'
export * from './redis.io'
export * from './render.com'
export * from './replibyte.com'
export * from './restic.net'
export * from './rhash.sourceforge.net'
export * from './rigaux.org'
export * from './riverbankcomputing.com'
export * from './robotframework.org'
export * from './rockdaboot.github.io'
export * from './rome.tools'
export * from './rpm.org'
export * from './rsync.samba.org'
export * from './rtmpdump.mplayerhq.hu'
export * from './rtomayko.github.io'
export * from './rubocop.org'
export * from './ruby-lang.org'
export * from './rubygems.org'
export * from './rucio.cern.ch'
export * from './runatlantis.io'
export * from './rust-lang.github.io'
export * from './rust-lang.org'
export * from './rust-lang.org-rust-bindgen'
export * from './rust-script.org'
export * from './rye.astral.sh'
export * from './s3tools.org'
export * from './saerasoft.com'
export * from './sagiegurari.github.io'
export * from './sass-lang.com'
export * from './savannah.nongnu.org'
export * from './scala-lang.org'
export * from './scala-sbt.org'
export * from './scaleway.com'
export * from './schollz.com'
export * from './scons.org'
export * from './scryer.pl'
export * from './sdkman.io'
export * from './seaweedfs.com'
export * from './sentry.io'
export * from './sf.net'
export * from './sfcgal.org'
export * from './sftpgo.com'
export * from './shellcheck.net'
export * from './sigstore.dev'
export * from './simplesystems.org'
export * from './sing-box.app'
export * from './skaffold.dev'
export * from './smartmontools.org'
export * from './snaplet.dev'
export * from './sniffnet.net'
export * from './snyk.io'
export * from './solana.com'
export * from './soldeer.xyz'
export * from './soliditylang.org'
export * from './sonarqube.org'
export * from './sourceforge.net'
export * from './sourceware.org'
export * from './soxr.sourceforge.net'
export * from './spacetimedb.com'
export * from './spawn.link'
export * from './speex.org'
export * from './sphinx-doc.org'
export * from './sqlc.dev'
export * from './sqlfluff.com'
export * from './sqlite.org'
export * from './squawkhq.com'
export * from './srtalliance.org'
export * from './sshx.io'
export * from './starship.rs'
export * from './steampipe.io'
export * from './stedolan.github.io'
export * from './strace.io'
export * from './streamlink.github.io'
export * from './stripe.com'
export * from './supabase.com'
export * from './surrealdb.com'
export * from './svenstaro.github.io'
export * from './swagger.io'
export * from './swift.org'
export * from './swig.org'
export * from './symfony.com'
export * from './sympy.org'
export * from './syncthing.net'
export * from './systemd.io'
export * from './taglib.org'
export * from './tailcall.run'
export * from './tailwindcss.com'
export * from './taku910.github.io'
export * from './talos.dev'
export * from './taplo.tamasfe.dev'
export * from './tart.run'
export * from './taskfile.dev'
export * from './tcl-lang.org'
export * from './tcl.tk'
export * from './tcpdump.org'
export * from './tcsh.org'
export * from './tea.xyz'
export * from './tectonic-typesetting.github.io'
export * from './templ.guide'
export * from './temporal.io'
export * from './terraform-docs.io'
export * from './terraform.io'
export * from './terragrunt.gruntwork.io'
export * from './terratag.io'
export * from './tesseract-ocr.github.io'
export * from './thekelleys.org.uk'
export * from './theora.org'
export * from './thoughtworks.github.io'
export * from './thrysoee.dk'
export * from './tidbyt.com'
export * from './tilt.dev'
export * from './tinybird.co'
export * from './tinygo.org'
export * from './tldr.sh'
export * from './tlr.dev'
export * from './tmate.io'
export * from './tox.wiki'
export * from './traefik.io'
export * from './tree-sitter.github.io'
export * from './trippy.cli.rs'
export * from './trufflesecurity.com'
export * from './tsl0922.github.io'
export * from './tuist.io'
export * from './tukaani.org'
export * from './turso.tech'
export * from './typescriptlang.org'
export * from './typst.app'
export * from './unbound.net'
export * from './undefined'
export * from './unicode.org'
export * from './unidata.ucar.edu'
export * from './unixodbc.org'
export * from './upliftci.dev'
export * from './upx.github.io'
export * from './uriparser.github.io'
export * from './vale.sh'
export * from './valkey.io'
export * from './vamp-plugins.org'
export * from './vanna.ai'
export * from './vapoursynth.com'
export * from './vaultproject.io'
export * from './vcluster.com'
export * from './vektra.github.io'
export * from './velero.io'
export * from './veracode.com'
export * from './vercel.com'
export * from './versity.com'
export * from './viaduct.ai'
export * from './viaduct.ai-ksops'
export * from './videolan.org'
export * from './vim.org'
export * from './virtualenv.pypa.io'
export * from './virtualsquare.org'
export * from './vitejs.dev'
export * from './vlang.io'
export * from './volta.sh'
export * from './wails.io'
export * from './wait4x.dev'
export * from './wasmer.io'
export * from './watchexec.github.io'
export * from './waterlan.home.xs4all.nl'
export * from './wavpack.com'
export * from './wayland.freedesktop.org'
export * from './waylandfreedesktoporg'
export * from './webmproject.org'
export * from './werf.io'
export * from './wezfurlong.org'
export * from './wilfred.me.uk'
export * from './wimlib.net'
export * from './wireshark.org'
export * from './wix.com'
export * from './wkentaro.github.io'
export * from './wpewebkit.org'
export * from './wundergraph.com'
export * from './wxwidgets.org'
export * from './x.org'
export * from './x.org-xscrnsaver'
export * from './xcfile.dev'
export * from './xerces.apache.org'
export * from './xiph.org'
export * from './xkbcommon.org'
export * from './xplr.dev'
export * from './xpra.org'
export * from './xtls.github.io'
export * from './xvid.com'
export * from './yadm.io'
export * from './yarnpkg.com'
export * from './yasm.tortall.net'
export * from './youtube-dl.org'
export * from './yt-dlp.org'
export * from './yui.github.io'
export * from './zarf.dev'
export * from './zeromq.org'
export * from './ziglang.org'
export * from './zlib.net'
export * from './zrok.io'
export * from './zsh.sourceforge.io'

// Define Pantry type
export interface Pantry {
  abseilio: abseilio.AbseilioPackage
  acornio: acornio.AcornioPackage
  agptco: agptco.AgptcoPackage
  agwanamegitcrypt: agwaname_git_crypt.AgwanamegitcryptPackage
  akuityio: akuityio.AkuityioPackage
  alacrittyorg: alacrittyorg.AlacrittyorgPackage
  alembicsqlalchemyorg: alembicsqlalchemyorg.AlembicsqlalchemyorgPackage
  aliases: aliases.AliasesPackage
  alsaprojectorg: alsa_projectorg.AlsaprojectorgPackage
  amberlangcom: amber_langcom.AmberlangcomPackage
  amprs: amprs.AmprsPackage
  amrdevelopergithubio: amrdevelopergithubio.AmrdevelopergithubioPackage
  anchorecom: anchorecom.AnchorecomPackage
  androidcom: androidcom.AndroidcomPackage
  angulardev: angulardev.AngulardevPackage
  ansiblecom: ansiblecom.AnsiblecomPackage
  aomediagooglesourcecom: aomediagooglesourcecom.AomediagooglesourcecomPackage
  apacheorg: apacheorg.ApacheorgPackage
  apktoolorg: apktoolorg.ApktoolorgPackage
  apollographqlcom: apollographqlcom.ApollographqlcomPackage
  appiumio: appiumio.AppiumioPackage
  applecom: applecom.ApplecomPackage
  applecomremote_cmds: applecom_remote_cmds.Applecomremote_cmdsPackage
  apptainerorg: apptainerorg.ApptainerorgPackage
  aquasecuritygithubio: aquasecuritygithubio.AquasecuritygithubioPackage
  arduinogithubio: arduinogithubio.ArduinogithubioPackage
  argbashdev: argbashdev.ArgbashdevPackage
  argoprojgithubio: argoprojgithubio.ArgoprojgithubioPackage
  aria2githubio: aria2githubio.Aria2githubioPackage
  arkadedev: arkadedev.ArkadedevPackage
  asciidoctororg: asciidoctororg.AsciidoctororgPackage
  asciinemaorg: asciinemaorg.AsciinemaorgPackage
  aspellnet: aspellnet.AspellnetPackage
  assimporg: assimporg.AssimporgPackage
  astgrepgithubio: ast_grepgithubio.AstgrepgithubioPackage
  astralsh: astralsh.AstralshPackage
  astralshty: astralsh_ty.AstralshtyPackage
  astralshruff: astralsh_ruff.AstralshruffPackage
  astralshuv: astralsh_uv.AstralshuvPackage
  atlasgoio: atlasgoio.AtlasgoioPackage
  attrsorg: attrsorg.AttrsorgPackage
  augeasnet: augeasnet.AugeasnetPackage
  authzedcom: authzedcom.AuthzedcomPackage
  aux4io: aux4io.Aux4ioPackage
  awsamazoncom: awsamazoncom.AwsamazoncomPackage
  awsamazoncomcli: awsamazoncom_cli.AwsamazoncomcliPackage
  awsamazoncomsam: awsamazoncom_sam.AwsamazoncomsamPackage
  bashlydannybco: bashlydannybco.BashlydannybcoPackage
  bcryptsourceforgenet: bcryptsourceforgenet.BcryptsourceforgenetPackage
  beyondgrepcom: beyondgrepcom.BeyondgrepcomPackage
  biomejsdev: biomejsdev.BiomejsdevPackage
  bitcoinorg: bitcoinorg.BitcoinorgPackage
  bittensorcom: bittensorcom.BittensorcomPackage
  bitwardencom: bitwardencom.BitwardencomPackage
  blake2net: blake2net.Blake2netPackage
  bloomreachcom: bloomreachcom.BloomreachcomPackage
  boostorg: boostorg.BoostorgPackage
  borepub: borepub.BorepubPackage
  breakfastquaycom: breakfastquaycom.BreakfastquaycomPackage
  browserusecom: browser_usecom.BrowserusecomPackage
  brxken128githubio: brxken128githubio.Brxken128githubioPackage
  budimanjojogithubio: budimanjojogithubio.BudimanjojogithubioPackage
  bufbuild: bufbuild.BufbuildPackage
  buildpacksio: buildpacksio.BuildpacksioPackage
  bunsh: bunsh.BunshPackage
  bytebasecom: bytebasecom.BytebasecomPackage
  bytereeforg: bytereeforg.BytereeforgPackage
  caresorg: c_aresorg.CaresorgPackage
  caddyservercom: caddyservercom.CaddyservercomPackage
  cairographicsorg: cairographicsorg.CairographicsorgPackage
  capstoneengineorg: capstone_engineorg.CapstoneengineorgPackage
  carapacesh: carapacesh.CarapaceshPackage
  caskreadthedocsio: caskreadthedocsio.CaskreadthedocsioPackage
  catborg: catborg.CatborgPackage
  ccachedev: ccachedev.CcachedevPackage
  cedarpolicycom: cedarpolicycom.CedarpolicycomPackage
  cedarpolicycomcli: cedarpolicycom_cli.CedarpolicycomcliPackage
  cephcom: cephcom.CephcomPackage
  cephcomcephadm: cephcom_cephadm.CephcomcephadmPackage
  ceressolverorg: ceres_solverorg.CeressolverorgPackage
  certbotefforg: certbotefforg.CertbotefforgPackage
  certifiio: certifiio.CertifiioPackage
  cgalorg: cgalorg.CgalorgPackage
  changiedev: changiedev.ChangiedevPackage
  charmsh: charmsh.CharmshPackage
  checkovio: checkovio.CheckovioPackage
  chezmoiio: chezmoiio.ChezmoiioPackage
  chiarkgreenendorguk: chiarkgreenendorguk.ChiarkgreenendorgukPackage
  chromedriverchromiumorg: chromedriverchromiumorg.ChromedriverchromiumorgPackage
  ciliumio: ciliumio.CiliumioPackage
  circlecicom: circlecicom.CirclecicomPackage
  ciscocom: ciscocom.CiscocomPackage
  classicyarnpkgcom: classicyarnpkgcom.ClassicyarnpkgcomPackage
  cligithubcom: cligithubcom.CligithubcomPackage
  clisporg: clisporg.ClisporgPackage
  clogtoolgithubio: clog_toolgithubio.ClogtoolgithubioPackage
  cloudflarecom: cloudflarecom.CloudflarecomPackage
  cloudfoundryorg: cloudfoundryorg.CloudfoundryorgPackage
  cloudnativepgio: cloudnative_pgio.CloudnativepgioPackage
  cmakeorg: cmakeorg.CmakeorgPackage
  cmockaorg: cmockaorg.CmockaorgPackage
  cnqueryio: cnqueryio.CnqueryioPackage
  cocoapodsorg: cocoapodsorg.CocoapodsorgPackage
  cocoapodsorgxcodeproj: cocoapodsorg_xcodeproj.CocoapodsorgxcodeprojPackage
  cocogittoio: cocogittoio.CocogittoioPackage
  codevideolanorg: codevideolanorg.CodevideolanorgPackage
  codercom: codercom.CodercomPackage
  cointopsh: cointopsh.CointopshPackage
  condaorg: condaorg.CondaorgPackage
  conftestdev: conftestdev.ConftestdevPackage
  connectrpcorg: connectrpcorg.ConnectrpcorgPackage
  consulio: consulio.ConsulioPackage
  convcogithubio: convcogithubio.ConvcogithubioPackage
  corednsio: corednsio.CorednsioPackage
  cpanminus: cpanminus.CpanminusPackage
  crypto: crypto.CryptoPackage
  cratesio: cratesio.CratesioPackage
  cratesioaichat: cratesio_aichat.CratesioaichatPackage
  cratesiobakers: cratesio_bake_rs.CratesiobakersPackage
  cratesiocargotarpaulin: cratesio_cargo_tarpaulin.CratesiocargotarpaulinPackage
  cratesioducker: cratesio_ducker.CratesioduckerPackage
  cratesioflamegraph: cratesio_flamegraph.CratesioflamegraphPackage
  cratesioox: cratesio_ox.CratesiooxPackage
  cratesiopik: cratesio_pik.CratesiopikPackage
  cratesioqsv: cratesio_qsv.CratesioqsvPackage
  cratesioripgrepall: cratesio_ripgrep_all.CratesioripgrepallPackage
  cratesiorucolanotes: cratesio_rucola_notes.CratesiorucolanotesPackage
  cratesiosamply: cratesio_samply.CratesiosamplyPackage
  crazymaxdev: crazymaxdev.CrazymaxdevPackage
  creativeprojectsgithubio: creativeprojectsgithubio.CreativeprojectsgithubioPackage
  cruftgithubio: cruftgithubio.CruftgithubioPackage
  cryptographyio: cryptographyio.CryptographyioPackage
  crystallangorg: crystal_langorg.CrystallangorgPackage
  cscopesourceforgeio: cscopesourceforgeio.CscopesourceforgeioPackage
  csientuedutw: csientuedutw.CsientuedutwPackage
  ctagsio: ctagsio.CtagsioPackage
  ctopsh: ctopsh.CtopshPackage
  cuelangorg: cuelangorg.CuelangorgPackage
  curlse: curlse.CurlsePackage
  curlieio: curlieio.CurlieioPackage
  cyrusimaporg: cyrusimaporg.CyrusimaporgPackage
  cythonorg: cythonorg.CythonorgPackage
  d2langcom: d2langcom.D2langcomPackage
  daggerio: daggerio.DaggerioPackage
  dartdev: dartdev.DartdevPackage
  darwinsyscom: darwinsyscom.DarwinsyscomPackage
  databrickscom: databrickscom.DatabrickscomPackage
  daytonaio: daytonaio.DaytonaioPackage
  dblabdanvergaracom: dblabdanvergaracom.DblabdanvergaracomPackage
  debianorg: debianorg.DebianorgPackage
  deepwisdomai: deepwisdomai.DeepwisdomaiPackage
  denilsonsanombr: denilsonsanombr.DenilsonsanombrPackage
  denoland: denoland.DenolandPackage
  depotdev: depotdev.DepotdevPackage
  destunreachorg: dest_unreachorg.DestunreachorgPackage
  devyorhelnl: devyorhelnl.DevyorhelnlPackage
  developer1passwordcom: developer1passwordcom.Developer1passwordcomPackage
  developer1passwordcom1passwordcli: developer1passwordcom_1password_cli.Developer1passwordcom1passwordcliPackage
  developersyubicocom: developersyubicocom.DevelopersyubicocomPackage
  devpodsh: devpodsh.DevpodshPackage
  dgraphio: dgraphio.DgraphioPackage
  dhalllangorg: dhall_langorg.DhalllangorgPackage
  dhruvkbdev: dhruvkbdev.DhruvkbdevPackage
  diggerdev: diggerdev.DiggerdevPackage
  digiporg: digiporg.DigiporgPackage
  digitaloceancom: digitaloceancom.DigitaloceancomPackage
  direnvnet: direnvnet.DirenvnetPackage
  dkrzde: dkrzde.DkrzdePackage
  dnslookupdog: dnslookupdog.DnslookupdogPackage
  docbookorg: docbookorg.DocbookorgPackage
  dockercom: dockercom.DockercomPackage
  doctavecom: doctavecom.DoctavecomPackage
  docutilsorg: docutilsorg.DocutilsorgPackage
  dotenvlintergithubio: dotenv_lintergithubio.DotenvlintergithubioPackage
  dotenvxcom: dotenvxcom.DotenvxcomPackage
  dotnetmicrosoftcom: dotnetmicrosoftcom.DotnetmicrosoftcomPackage
  dotnetmicrosoftcom: dotnetmicrosoftcom.DotnetmicrosoftcomPackage
  doxygennl: doxygennl.DoxygennlPackage
  dozzledev: dozzledev.DozzledevPackage
  dprintdev: dprintdev.DprintdevPackage
  drifreedesktoporg: drifreedesktoporg.DrifreedesktoporgPackage
  duckdborg: duckdborg.DuckdborgPackage
  duktapeorg: duktapeorg.DuktapeorgPackage
  dystroyorg: dystroyorg.DystroyorgPackage
  dystroyorgbacon: dystroyorg_bacon.DystroyorgbaconPackage
  earthlydev: earthlydev.EarthlydevPackage
  ebassigithubio: ebassigithubio.EbassigithubioPackage
  edgedbcom: edgedbcom.EdgedbcomPackage
  eigentuxfamilyorg: eigentuxfamilyorg.EigentuxfamilyorgPackage
  eksctlio: eksctlio.EksctlioPackage
  elementsprojectorg: elementsprojectorg.ElementsprojectorgPackage
  elfutilsorg: elfutilsorg.ElfutilsorgPackage
  elixirlangorg: elixir_langorg.ElixirlangorgPackage
  elizaosgithubio: elizaOSgithubio.ElizaOSgithubioPackage
  elvsh: elvsh.ElvshPackage
  encoredev: encoredev.EncoredevPackage
  endoflifedate: endoflifedate.EndoflifedatePackage
  epsilonprojectsourceforgeio: epsilon_projectsourceforgeio.EpsilonprojectsourceforgeioPackage
  erlangorg: erlangorg.ErlangorgPackage
  etcdio: etcdio.EtcdioPackage
  exiftoolorg: exiftoolorg.ExiftoolorgPackage
  expodev: expodev.ExpodevPackage
  eyrieorg: eyrieorg.EyrieorgPackage
  f1bonacc1githubio: f1bonacc1githubio.F1bonacc1githubioPackage
  fabianlindforsse: fabianlindforsse.FabianlindforssePackage
  facebookcom: facebookcom.FacebookcomPackage
  fairwindscom: fairwindscom.FairwindscomPackage
  fastlanetools: fastlanetools.FastlanetoolsPackage
  felixkratzgithubio: felixkratzgithubio.FelixkratzgithubioPackage
  fermyoncom: fermyoncom.FermyoncomPackage
  ffmpegorg: ffmpegorg.FfmpegorgPackage
  fftworg: fftworg.FftworgPackage
  filippoio: filippoio.FilippoioPackage
  fishshellcom: fishshellcom.FishshellcomPackage
  fliptio: fliptio.FliptioPackage
  flitpypaio: flitpypaio.FlitpypaioPackage
  fltkorg: fltkorg.FltkorgPackage
  fluentciio: fluentciio.FluentciioPackage
  flutterdev: flutterdev.FlutterdevPackage
  fluxcdio: fluxcdio.FluxcdioPackage
  flyio: flyio.FlyioPackage
  flywaydborg: flywaydborg.FlywaydborgPackage
  fmtdev: fmtdev.FmtdevPackage
  fnaxnagithubio: fna_xnagithubio.FnaxnagithubioPackage
  freedesktoporg: freedesktoporg.FreedesktoporgPackage
  freeglutsourceforgeio: freeglutsourceforgeio.FreeglutsourceforgeioPackage
  freetdsorg: freetdsorg.FreetdsorgPackage
  freetypeorg: freetypeorg.FreetypeorgPackage
  frei0rdyneorg: frei0rdyneorg.Frei0rdyneorgPackage
  fuellabsgithubio: fuellabsgithubio.FuellabsgithubioPackage
  fukuchiorg: fukuchiorg.FukuchiorgPackage
  fullstorycom: fullstorycom.FullstorycomPackage
  furyco: furyco.FurycoPackage
  fxwtf: fxwtf.FxwtfPackage
  gaiagisit: gaia_gisit.GaiagisitPackage
  gdalorg: gdalorg.GdalorgPackage
  geoffgreerfm: geoffgreerfm.GeoffgreerfmPackage
  getclipboardapp: getclipboardapp.GetclipboardappPackage
  getcomposerorg: getcomposerorg.GetcomposerorgPackage
  getfoundrysh: getfoundrysh.GetfoundryshPackage
  getsopsio: getsopsio.GetsopsioPackage
  getsynthcom: getsynthcom.GetsynthcomPackage
  getzolaorg: getzolaorg.GetzolaorgPackage
  geuzorg: geuzorg.GeuzorgPackage
  gflagsgithubio: gflagsgithubio.GflagsgithubioPackage
  ghostgumcomau: ghostgumcomau.GhostgumcomauPackage
  ghostscriptcom: ghostscriptcom.GhostscriptcomPackage
  giflibsourceforgeio: giflibsourceforgeio.GiflibsourceforgeioPackage
  gitclifforg: git_clifforg.GitclifforgPackage
  gitlfscom: git_lfscom.GitlfscomPackage
  gitquickstatssh: git_quick_statssh.GitquickstatsshPackage
  gitscmorg: git_scmorg.GitscmorgPackage
  gittowncom: git_towncom.GittowncomPackage
  gitosgeoorg: gitosgeoorg.GitosgeoorgPackage
  gittoztnet: gittoztnet.GittoztnetPackage
  githubcom: githubcom.GithubcomPackage
  githubcom0agecreate2crunch: githubcom_0age_create2crunch.Githubcom0agecreate2crunchPackage
  githubcomblacktoplporg: githubcom_blacktop_lporg.GithubcomblacktoplporgPackage
  githubcomblynnnex: githubcom_blynn_nex.GithubcomblynnnexPackage
  githubcomcyfrinsafetxhashesutil: githubcom_Cyfrin_safe_tx_hashes_util.GithubcomCyfrinsafetxhashesutilPackage
  githubcomdiniboy1123usque: githubcom_Diniboy1123_usque.GithubcomDiniboy1123usquePackage
  githubcomfastfetchclifastfetch: githubcom_fastfetch_cli_fastfetch.GithubcomfastfetchclifastfetchPackage
  githubcomfiatjafnak: githubcom_fiatjaf_nak.GithubcomfiatjafnakPackage
  githubcomgitecosystemgitcredentialmanager: githubcom_git_ecosystem_git_credential_manager.GithubcomgitecosystemgitcredentialmanagerPackage
  githubcomglauthglauth: githubcom_glauth_glauth.GithubcomglauthglauthPackage
  githubcomigorshubovychmarkdownlintcli: githubcom_igorshubovych_markdownlint_cli.GithubcomigorshubovychmarkdownlintcliPackage
  githubcomjarunnnn: githubcom_jarun_nnn.GithubcomjarunnnnPackage
  githubcomkoekeishiyaskhd: githubcom_koekeishiya_skhd.GithubcomkoekeishiyaskhdPackage
  githubcomlucianosrpryeuv: githubcom_lucianosrp_rye_uv.GithubcomlucianosrpryeuvPackage
  githubcommasclimas: githubcom_mas_cli_mas.GithubcommasclimasPackage
  githubcommilescranmerrip2: githubcom_MilesCranmer_rip2.GithubcomMilesCranmerrip2Package
  githubcomminseokohtomlcli: githubcom_MinseokOh_toml_cli.GithubcomMinseokOhtomlcliPackage
  githubcommycreepypakku: githubcom_mycreepy_pakku.GithubcommycreepypakkuPackage
  githubcomparchivepar2cmdline: githubcom_Parchive_par2cmdline.GithubcomParchivepar2cmdlinePackage
  githubcompeaks5cmd: githubcom_peak_s5cmd.Githubcompeaks5cmdPackage
  githubcomperipheryappperiphery: githubcom_peripheryapp_periphery.GithubcomperipheryappperipheryPackage
  githubcomshakaprojectshakapackager: githubcom_shaka_project_shaka_packager.GithubcomshakaprojectshakapackagerPackage
  githubcomsorahenvchain: githubcom_sorah_envchain.GithubcomsorahenvchainPackage
  githubcomspencerkimballstargazers: githubcom_spencerkimball_stargazers.GithubcomspencerkimballstargazersPackage
  githubcomwitheredmagicstarpls: githubcom_withered_magic_starpls.GithubcomwitheredmagicstarplsPackage
  gitlabcom: gitlabcom.GitlabcomPackage
  gitleaksio: gitleaksio.GitleaksioPackage
  glarosdtcumnedu: glarosdtcumnedu.GlarosdtcumneduPackage
  gleamrun: gleamrun.GleamrunPackage
  glewsourceforgeio: glewsourceforgeio.GlewsourceforgeioPackage
  glfworg: glfworg.GlfworgPackage
  glmgtrucnet: glmg_trucnet.GlmgtrucnetPackage
  gnomeorg: gnomeorg.GnomeorgPackage
  gnuorg: gnuorg.GnuorgPackage
  gnupgorg: gnupgorg.GnupgorgPackage
  gnuplotinfo: gnuplotinfo.GnuplotinfoPackage
  gnutlsorg: gnutlsorg.GnutlsorgPackage
  godev: godev.GodevPackage
  gouberorg: gouberorg.GouberorgPackage
  gohugoio: gohugoio.GohugoioPackage
  golangcilintrun: golangci_lintrun.GolangcilintrunPackage
  gomplateca: gomplateca.GomplatecaPackage
  googlecom: googlecom.GooglecomPackage
  googlegithubio: googlegithubio.GooglegithubioPackage
  goreleasercom: goreleasercom.GoreleasercomPackage
  gourceio: gourceio.GourceioPackage
  gphotoorg: gphotoorg.GphotoorgPackage
  gqlgencom: gqlgencom.GqlgencomPackage
  gradleorg: gradleorg.GradleorgPackage
  grafanacom: grafanacom.GrafanacomPackage
  granteddev: granteddev.GranteddevPackage
  graphicsmagickorg: graphicsmagickorg.GraphicsmagickorgPackage
  graphitesilorg: graphitesilorg.GraphitesilorgPackage
  graphqleditorcom: graphqleditorcom.GraphqleditorcomPackage
  graphvizorg: graphvizorg.GraphvizorgPackage
  groongaorg: groongaorg.GroongaorgPackage
  groovylangorg: groovy_langorg.GroovylangorgPackage
  grpcio: grpcio.GrpcioPackage
  gstreamerfreedesktoporg: gstreamerfreedesktoporg.GstreamerfreedesktoporgPackage
  gtkorg: gtkorg.GtkorgPackage
  gtssourceforgenet: gtssourceforgenet.GtssourceforgenetPackage
  hadronsorg: hadronsorg.HadronsorgPackage
  hardingmotdca: hardingmotdca.HardingmotdcaPackage
  harfbuzzorg: harfbuzzorg.HarfbuzzorgPackage
  hashicorpcom: hashicorpcom.HashicorpcomPackage
  haskellorg: haskellorg.HaskellorgPackage
  hasuraio: hasuraio.HasuraioPackage
  hatchpypaio: hatchpypaio.HatchpypaioPackage
  hboehminfo: hboehminfo.HboehminfoPackage
  hdfgrouporg: hdfgrouporg.HdfgrouporgPackage
  heasarcgsfcnasagov: heasarcgsfcnasagov.HeasarcgsfcnasagovPackage
  helixeditorcom: helix_editorcom.HelixeditorcomPackage
  helmsh: helmsh.HelmshPackage
  herokucom: herokucom.HerokucomPackage
  hetznercom: hetznercom.HetznercomPackage
  hjsongithubio: hjsongithubio.HjsongithubioPackage
  htmltidyorg: html_tidyorg.HtmltidyorgPackage
  htopdev: htopdev.HtopdevPackage
  htsliborg: htsliborg.HtsliborgPackage
  httpieio: httpieio.HttpieioPackage
  huggingfaceco: huggingfaceco.HuggingfacecoPackage
  hugowang: hugowang.HugowangPackage
  hunspellgithubio: hunspellgithubio.HunspellgithubioPackage
  hurldev: hurldev.HurldevPackage
  ibrcstubsde: ibrcstu_bsde.IbrcstubsdePackage
  idleberggithubio: idleberggithubio.IdleberggithubioPackage
  ijgorg: ijgorg.IjgorgPackage
  imageflowio: imageflowio.ImageflowioPackage
  imagemagickorg: imagemagickorg.ImagemagickorgPackage
  indexsupplycom: indexsupplycom.IndexsupplycomPackage
  infoziporg: info_ziporg.InfoziporgPackage
  infracostio: infracostio.InfracostioPackage
  intelcom: intelcom.IntelcomPackage
  invisibleislandnet: invisible_islandnet.InvisibleislandnetPackage
  invisibleislandnetlynx: invisible_islandnet_lynx.InvisibleislandnetlynxPackage
  ipfstech: ipfstech.IpfstechPackage
  ipythonorg: ipythonorg.IpythonorgPackage
  irohcomputer: irohcomputer.IrohcomputerPackage
  iscorg: iscorg.IscorgPackage
  iscorgbind9: iscorg_bind9.Iscorgbind9Package
  istioio: istioio.IstioioPackage
  itstoolorg: itstoolorg.ItstoolorgPackage
  ivarchcom: ivarchcom.IvarchcomPackage
  jbangdev: jbangdev.JbangdevPackage
  jbig2deccom: jbig2deccom.Jbig2deccomPackage
  jedisct1githubio: jedisct1githubio.Jedisct1githubioPackage
  jedsoftorg: jedsoftorg.JedsoftorgPackage
  jemallocnet: jemallocnet.JemallocnetPackage
  jenkinsxio: jenkins_xio.JenkinsxioPackage
  jenkinsio: jenkinsio.JenkinsioPackage
  jenvbe: jenvbe.JenvbePackage
  jetporchcom: jetporchcom.JetporchcomPackage
  jfrogcom: jfrogcom.JfrogcomPackage
  jlessio: jlessio.JlessioPackage
  jonasgithubio: jonasgithubio.JonasgithubioPackage
  jpegorg: jpegorg.JpegorgPackage
  jsonnetorg: jsonnetorg.JsonnetorgPackage
  jugitfzjuelichde: jugitfz_juelichde.JugitfzjuelichdePackage
  jujuis: jujuis.JujuisPackage
  julialangorg: julialangorg.JulialangorgPackage
  jumppaddev: jumppaddev.JumppaddevPackage
  jupyterorg: jupyterorg.JupyterorgPackage
  justsystems: justsystems.JustsystemsPackage
  k3dio: k3dio.K3dioPackage
  k6io: k6io.K6ioPackage
  k9scliio: k9scliio.K9scliioPackage
  kafkaapacheorg: kafkaapacheorg.KafkaapacheorgPackage
  kagglecom: kagglecom.KagglecomPackage
  keephqdev: keephqdev.KeephqdevPackage
  kerberosorg: kerberosorg.KerberosorgPackage
  kernelorg: kernelorg.KernelorgPackage
  kernelorglibcap: kernelorg_libcap.KernelorglibcapPackage
  khanacademyorg: khanacademyorg.KhanacademyorgPackage
  khronosorg: khronosorg.KhronosorgPackage
  kindsigsk8sio: kindsigsk8sio.Kindsigsk8sioPackage
  kislyukgithubio: kislyukgithubio.KislyukgithubioPackage
  kluctlio: kluctlio.KluctlioPackage
  kobuild: kobuild.KobuildPackage
  kornelski: kornelski.KornelskiPackage
  kotlinlangorg: kotlinlangorg.KotlinlangorgPackage
  koyebcom: koyebcom.KoyebcomPackage
  kptdev: kptdev.KptdevPackage
  krewsigsk8sio: krewsigsk8sio.Krewsigsk8sioPackage
  ktlintgithubio: ktlintgithubio.KtlintgithubioPackage
  kubebuilderio: kubebuilderio.KubebuilderioPackage
  kubecmcloud: kubecmcloud.KubecmcloudPackage
  kubectxdev: kubectxdev.KubectxdevPackage
  kubelinterio: kubelinterio.KubelinterioPackage
  kubernetesio: kubernetesio.KubernetesioPackage
  kubesharkco: kubesharkco.KubesharkcoPackage
  ladspaorg: ladspaorg.LadspaorgPackage
  lamesourceforgeio: lamesourceforgeio.LamesourceforgeioPackage
  langchaincom: langchaincom.LangchaincomPackage
  laravelcom: laravelcom.LaravelcomPackage
  lavinmqcom: lavinmqcom.LavinmqcomPackage
  lcdforg: lcdforg.LcdforgPackage
  leethomasongithubio: leethomasongithubio.LeethomasongithubioPackage
  leolangorg: leo_langorg.LeolangorgPackage
  leonerdorguk: leonerdorguk.LeonerdorgukPackage
  leptonicaorg: leptonicaorg.LeptonicaorgPackage
  lftpyarru: lftpyarru.LftpyarruPackage
  libarchiveorg: libarchiveorg.LibarchiveorgPackage
  libcxxllvmorg: libcxxllvmorg.LibcxxllvmorgPackage
  libeventorg: libeventorg.LibeventorgPackage
  libexifgithubio: libexifgithubio.LibexifgithubioPackage
  libexpatgithubio: libexpatgithubio.LibexpatgithubioPackage
  libgdgithubio: libgdgithubio.LibgdgithubioPackage
  libgeosorg: libgeosorg.LibgeosorgPackage
  libgit2org: libgit2org.Libgit2orgPackage
  libimobiledeviceorg: libimobiledeviceorg.LibimobiledeviceorgPackage
  libislsourceforgeio: libislsourceforgeio.LibislsourceforgeioPackage
  libjpegturboorg: libjpeg_turboorg.LibjpegturboorgPackage
  liblqrwikidotcom: liblqrwikidotcom.LiblqrwikidotcomPackage
  libpipelinegitlabio: libpipelinegitlabio.LibpipelinegitlabioPackage
  libpngorg: libpngorg.LibpngorgPackage
  libproxygithubio: libproxygithubio.LibproxygithubioPackage
  libraworg: libraworg.LibraworgPackage
  libsdlorg: libsdlorg.LibsdlorgPackage
  libsodiumorg: libsodiumorg.LibsodiumorgPackage
  libsouporg: libsouporg.LibsouporgPackage
  libspngorg: libspngorg.LibspngorgPackage
  libsshorg: libsshorg.LibsshorgPackage
  libssh2org: libssh2org.Libssh2orgPackage
  libtomnet: libtomnet.LibtomnetPackage
  liburcuorg: liburcuorg.LiburcuorgPackage
  libusbinfo: libusbinfo.LibusbinfoPackage
  libuvorg: libuvorg.LibuvorgPackage
  libvipsorg: libvipsorg.LibvipsorgPackage
  libwebsocketsorg: libwebsocketsorg.LibwebsocketsorgPackage
  libziporg: libziporg.LibziporgPackage
  limavmio: lima_vmio.LimavmioPackage
  linkerdio: linkerdio.LinkerdioPackage
  linuxpamorg: linux_pamorg.LinuxpamorgPackage
  liteclicom: liteclicom.LiteclicomPackage
  littlecmscom: littlecmscom.LittlecmscomPackage
  llmdatasetteio: llmdatasetteio.LlmdatasetteioPackage
  lloydgithubio: lloydgithubio.LloydgithubioPackage
  llvmorg: llvmorg.LlvmorgPackage
  localaiio: localaiio.LocalaiioPackage
  localstackcloud: localstackcloud.LocalstackcloudPackage
  logdydev: logdydev.LogdydevPackage
  logologicalorg: logologicalorg.LogologicalorgPackage
  luaorg: luaorg.LuaorgPackage
  luajitorg: luajitorg.LuajitorgPackage
  luarocksorg: luarocksorg.LuarocksorgPackage
  lucagrullacom: lucagrullacom.LucagrullacomPackage
  lunarvimorg: lunarvimorg.LunarvimorgPackage
  lxmlde: lxmlde.LxmldePackage
  lycheeclirs: lycheeclirs.LycheeclirsPackage
  lz4org: lz4org.Lz4orgPackage
  maaslalanicom: maaslalanicom.MaaslalanicomPackage
  macvimorg: macvimorg.MacvimorgPackage
  mailpitaxllentorg: mailpitaxllentorg.MailpitaxllentorgPackage
  makotemplatesorg: makotemplatesorg.MakotemplatesorgPackage
  mandbgitlabio: man_dbgitlabio.MandbgitlabioPackage
  mandocbsdlv: mandocbsdlv.MandocbsdlvPackage
  mariadbcom: mariadbcom.MariadbcomPackage
  markupsafepalletsprojectscom: markupsafepalletsprojectscom.MarkupsafepalletsprojectscomPackage
  materializecom: materializecom.MaterializecomPackage
  matiosourceforgeio: matiosourceforgeio.MatiosourceforgeioPackage
  maturinrs: maturinrs.MaturinrsPackage
  mavenapacheorg: mavenapacheorg.MavenapacheorgPackage
  mcmcjagssourceforgeio: mcmc_jagssourceforgeio.McmcjagssourceforgeioPackage
  mercurerocks: mercurerocks.MercurerocksPackage
  mercurialscmorg: mercurial_scmorg.MercurialscmorgPackage
  mergestatcom: mergestatcom.MergestatcomPackage
  mesa3dorg: mesa3dorg.Mesa3dorgPackage
  mesonbuildcom: mesonbuildcom.MesonbuildcomPackage
  microeditorgithubio: micro_editorgithubio.MicroeditorgithubioPackage
  microbreworg: microbreworg.MicrobreworgPackage
  microcksio: microcksio.MicrocksioPackage
  microsoftcom: microsoftcom.MicrosoftcomPackage
  microsoftcomcodecli: microsoftcom_code_cli.MicrosoftcomcodecliPackage
  microsoftcommarkitdown: microsoftcom_markitdown.MicrosoftcommarkitdownPackage
  midnightcommanderorg: midnight_commanderorg.MidnightcommanderorgPackage
  minio: minio.MinioPackage
  misejdxdev: misejdxdev.MisejdxdevPackage
  mitmproxyorg: mitmproxyorg.MitmproxyorgPackage
  mkcertdev: mkcertdev.MkcertdevPackage
  mkdocsorg: mkdocsorg.MkdocsorgPackage
  modalcom: modalcom.ModalcomPackage
  moderncorg: moderncorg.ModerncorgPackage
  moderncorggoyacc: moderncorg_goyacc.ModerncorggoyaccPackage
  mongodbcom: mongodbcom.MongodbcomPackage
  moonrepodev: moonrepodev.MoonrepodevPackage
  moshorg: moshorg.MoshorgPackage
  mozillaorg: mozillaorg.MozillaorgPackage
  mozillaorgcbindgen: mozillaorg_cbindgen.MozillaorgcbindgenPackage
  mpg123de: mpg123de.Mpg123dePackage
  mpmathorg: mpmathorg.MpmathorgPackage
  mpvio: mpvio.MpvioPackage
  msgpackorg: msgpackorg.MsgpackorgPackage
  mujscom: mujscom.MujscomPackage
  munlangorg: mun_langorg.MunlangorgPackage
  mupdfcom: mupdfcom.MupdfcomPackage
  musepacknet: musepacknet.MusepacknetPackage
  musllibcorg: musllibcorg.MusllibcorgPackage
  mvdancc: mvdancc.MvdanccPackage
  mvdanccgofumpt: mvdancc_gofumpt.MvdanccgofumptPackage
  mypylangorg: mypy_langorg.MypylangorgPackage
  mysqlcom: mysqlcom.MysqlcomPackage
  nanoeditororg: nano_editororg.NanoeditororgPackage
  nasmus: nasmus.NasmusPackage
  neovimio: neovimio.NeovimioPackage
  netflixcom: netflixcom.NetflixcomPackage
  netliborg: netliborg.NetliborgPackage
  netpbmsourceforgenet: netpbmsourceforgenet.NetpbmsourceforgenetPackage
  networkxorg: networkxorg.NetworkxorgPackage
  nghttp2org: nghttp2org.Nghttp2orgPackage
  nginxorg: nginxorg.NginxorgPackage
  nikecom: nikecom.NikecomPackage
  nimlangorg: nim_langorg.NimlangorgPackage
  ninjabuildorg: ninja_buildorg.NinjabuildorgPackage
  nixosorg: nixosorg.NixosorgPackage
  nixpackscom: nixpackscom.NixpackscomPackage
  nlnetlabsnl: nlnetlabsnl.NlnetlabsnlPackage
  nmaporg: nmaporg.NmaporgPackage
  nodejsorg: nodejsorg.NodejsorgPackage
  nomadprojectio: nomadprojectio.NomadprojectioPackage
  nongnuorg: nongnuorg.NongnuorgPackage
  notrojgithubio: notrojgithubio.NotrojgithubioPackage
  npmjscom: npmjscom.NpmjscomPackage
  ntporg: ntporg.NtporgPackage
  numbatdev: numbatdev.NumbatdevPackage
  numpyorg: numpyorg.NumpyorgPackage
  nushellsh: nushellsh.NushellshPackage
  nxdev: nxdev.NxdevPackage
  oauth2proxygithubio: oauth2_proxygithubio.Oauth2proxygithubioPackage
  oberhumercom: oberhumercom.OberhumercomPackage
  oberhumercomucl: oberhumercom_ucl.OberhumercomuclPackage
  odigosio: odigosio.OdigosioPackage
  ohmyposhdev: ohmyposhdev.OhmyposhdevPackage
  ollamaai: ollamaai.OllamaaiPackage
  onefetchdev: onefetchdev.OnefetchdevPackage
  onsigithubio: onsigithubio.OnsigithubioPackage
  openmpiorg: open_mpiorg.OpenmpiorgPackage
  openaicom: openaicom.OpenaicomPackage
  openapigeneratortech: openapi_generatortech.OpenapigeneratortechPackage
  openbaoorg: openbaoorg.OpenbaoorgPackage
  openblasnet: openblasnet.OpenblasnetPackage
  opencoreamrsourceforgeio: opencore_amrsourceforgeio.OpencoreamrsourceforgeioPackage
  opendaporg: opendaporg.OpendaporgPackage
  opendevorg: opendevorg.OpendevorgPackage
  openexrcom: openexrcom.OpenexrcomPackage
  openinterpretercom: openinterpretercom.OpeninterpretercomPackage
  openjdkorg: openjdkorg.OpenjdkorgPackage
  openjpegorg: openjpegorg.OpenjpegorgPackage
  openldaporg: openldaporg.OpenldaporgPackage
  openldaporgliblmdb: openldaporg_liblmdb.OpenldaporgliblmdbPackage
  openmpllvmorg: openmpllvmorg.OpenmpllvmorgPackage
  openpmixgithubio: openpmixgithubio.OpenpmixgithubioPackage
  openpolicyagentorg: openpolicyagentorg.OpenpolicyagentorgPackage
  openprintinggithubio: openprintinggithubio.OpenprintinggithubioPackage
  openrestyorg: openrestyorg.OpenrestyorgPackage
  opensearchorg: opensearchorg.OpensearchorgPackage
  openshiftcom: openshiftcom.OpenshiftcomPackage
  openslideorg: openslideorg.OpenslideorgPackage
  opensshcom: opensshcom.OpensshcomPackage
  opensslorg: opensslorg.OpensslorgPackage
  opentofuorg: opentofuorg.OpentofuorgPackage
  openvpnnet: openvpnnet.OpenvpnnetPackage
  operatorframeworkio: operatorframeworkio.OperatorframeworkioPackage
  opuscodecorg: opus_codecorg.OpuscodecorgPackage
  oraclecom: oraclecom.OraclecomPackage
  orasland: orasland.OraslandPackage
  ordinalscom: ordinalscom.OrdinalscomPackage
  orhundev: orhundev.OrhundevPackage
  otssnipttcom: otssnipttcom.OtssnipttcomPackage
  packerio: packerio.PackerioPackage
  pagureio: pagureio.PagureioPackage
  palletsprojectscom: palletsprojectscom.PalletsprojectscomPackage
  pandocorg: pandocorg.PandocorgPackage
  pantsbuildorg: pantsbuildorg.PantsbuildorgPackage
  paulfitzgithubio: paulfitzgithubio.PaulfitzgithubioPackage
  pcreorg: pcreorg.PcreorgPackage
  pcscliteapdufr: pcscliteapdufr.PcscliteapdufrPackage
  pdmfmingdev: pdmfmingdev.PdmfmingdevPackage
  peopleengrtamuedu: peopleengrtamuedu.PeopleengrtamueduPackage
  peopleredhatcom: peopleredhatcom.PeopleredhatcomPackage
  perlorg: perlorg.PerlorgPackage
  permitio: permitio.PermitioPackage
  phpnet: phpnet.PhpnetPackage
  phpmyadminnet: phpmyadminnet.PhpmyadminnetPackage
  pimalayaorg: pimalayaorg.PimalayaorgPackage
  pinnipeddev: pinnipeddev.PinnipeddevPackage
  pippypaio: pippypaio.PippypaioPackage
  pipenvpypaio: pipenvpypaio.PipenvpypaioPackage
  pixmanorg: pixmanorg.PixmanorgPackage
  pkgxsh: pkgxsh.PkgxshPackage
  pkgxshdev: pkgxsh_dev.PkgxshdevPackage
  pkgxshpkgm: pkgxsh_pkgm.PkgxshpkgmPackage
  pkllangorg: pkl_langorg.PkllangorgPackage
  planetscalecom: planetscalecom.PlanetscalecomPackage
  plantumlcom: plantumlcom.PlantumlcomPackage
  plasmasturmorg: plasmasturmorg.PlasmasturmorgPackage
  plocatesessenet: plocatesessenet.PlocatesessenetPackage
  pluralithcom: pluralithcom.PluralithcomPackage
  pngquantorg: pngquantorg.PngquantorgPackage
  pnpmio: pnpmio.PnpmioPackage
  po4aorg: po4aorg.Po4aorgPackage
  pocketbaseio: pocketbaseio.PocketbaseioPackage
  podmanio: podmanio.PodmanioPackage
  poktnetwork: poktnetwork.PoktnetworkPackage
  popplerfreedesktoporg: popplerfreedesktoporg.PopplerfreedesktoporgPackage
  portaudiocom: portaudiocom.PortaudiocomPackage
  postgresqlorg: postgresqlorg.PostgresqlorgPackage
  postgrestorg: postgrestorg.PostgrestorgPackage
  practicalschemenet: practical_schemenet.PracticalschemenetPackage
  precommitcom: pre_commitcom.PrecommitcomPackage
  prefixdev: prefixdev.PrefixdevPackage
  presslygithubio: presslygithubio.PresslygithubioPackage
  prettierio: prettierio.PrettierioPackage
  printfngithubio: printfngithubio.PrintfngithubioPackage
  priverdev: priverdev.PriverdevPackage
  projorg: projorg.ProjorgPackage
  projectcopaceticgithubio: project_copaceticgithubio.ProjectcopaceticgithubioPackage
  projectdiscoveryio: projectdiscoveryio.ProjectdiscoveryioPackage
  projectdiscoveryionuclei: projectdiscoveryio_nuclei.ProjectdiscoveryionucleiPackage
  projenio: projenio.ProjenioPackage
  protobufdev: protobufdev.ProtobufdevPackage
  prqllangorg: prql_langorg.PrqllangorgPackage
  psycopgorg: psycopgorg.PsycopgorgPackage
  publichronopikde: publichronopikde.PublichronopikdePackage
  pugixmlorg: pugixmlorg.PugixmlorgPackage
  pulumiio: pulumiio.PulumiioPackage
  pwgensourceforgeio: pwgensourceforgeio.PwgensourceforgeioPackage
  pwmtorg: pwmtorg.PwmtorgPackage
  pygmentsorg: pygmentsorg.PygmentsorgPackage
  pyinvokeorg: pyinvokeorg.PyinvokeorgPackage
  pypagithubio: pypagithubio.PypagithubioPackage
  pypaio: pypaio.PypaioPackage
  pytestorg: pytestorg.PytestorgPackage
  pythonpilloworg: python_pilloworg.PythonpilloworgPackage
  pythonpoetryorg: python_poetryorg.PythonpoetryorgPackage
  pythonorg: pythonorg.PythonorgPackage
  pyyamlorg: pyyamlorg.PyyamlorgPackage
  qemuorg: qemuorg.QemuorgPackage
  qhullorg: qhullorg.QhullorgPackage
  qpdfsourceforgeio: qpdfsourceforgeio.QpdfsourceforgeioPackage
  qtio: qtio.QtioPackage
  quarydev: quarydev.QuarydevPackage
  quickwitio: quickwitio.QuickwitioPackage
  rwosorg: r_wosorg.RwosorgPackage
  rabbitmqcom: rabbitmqcom.RabbitmqcomPackage
  raccoinorg: raccoinorg.RaccoinorgPackage
  radicleorg: radicleorg.RadicleorgPackage
  railwayapp: railwayapp.RailwayappPackage
  rapidjsonorg: rapidjsonorg.RapidjsonorgPackage
  rarlabcom: rarlabcom.RarlabcomPackage
  rbenvorg: rbenvorg.RbenvorgPackage
  rcloneorg: rcloneorg.RcloneorgPackage
  re2corg: re2corg.Re2corgPackage
  reacheremail: reacheremail.ReacheremailPackage
  rebar3org: rebar3org.Rebar3orgPackage
  redisio: redisio.RedisioPackage
  rendercom: rendercom.RendercomPackage
  replibytecom: replibytecom.ReplibytecomPackage
  resticnet: resticnet.ResticnetPackage
  rhashsourceforgenet: rhashsourceforgenet.RhashsourceforgenetPackage
  rigauxorg: rigauxorg.RigauxorgPackage
  riverbankcomputingcom: riverbankcomputingcom.RiverbankcomputingcomPackage
  robotframeworkorg: robotframeworkorg.RobotframeworkorgPackage
  rockdabootgithubio: rockdabootgithubio.RockdabootgithubioPackage
  rometools: rometools.RometoolsPackage
  rpmorg: rpmorg.RpmorgPackage
  rsyncsambaorg: rsyncsambaorg.RsyncsambaorgPackage
  rtmpdumpmplayerhqhu: rtmpdumpmplayerhqhu.RtmpdumpmplayerhqhuPackage
  rtomaykogithubio: rtomaykogithubio.RtomaykogithubioPackage
  rubocoporg: rubocoporg.RubocoporgPackage
  rubylangorg: ruby_langorg.RubylangorgPackage
  rubygemsorg: rubygemsorg.RubygemsorgPackage
  ruciocernch: ruciocernch.RuciocernchPackage
  runatlantisio: runatlantisio.RunatlantisioPackage
  rustlanggithubio: rust_langgithubio.RustlanggithubioPackage
  rustlangorg: rust_langorg.RustlangorgPackage
  rustlangorgrustbindgen: rust_langorg_rust_bindgen.RustlangorgrustbindgenPackage
  rustscriptorg: rust_scriptorg.RustscriptorgPackage
  ryeastralsh: ryeastralsh.RyeastralshPackage
  s3toolsorg: s3toolsorg.S3toolsorgPackage
  saerasoftcom: saerasoftcom.SaerasoftcomPackage
  sagiegurarigithubio: sagiegurarigithubio.SagiegurarigithubioPackage
  sasslangcom: sass_langcom.SasslangcomPackage
  savannahnongnuorg: savannahnongnuorg.SavannahnongnuorgPackage
  scalalangorg: scala_langorg.ScalalangorgPackage
  scalasbtorg: scala_sbtorg.ScalasbtorgPackage
  scalewaycom: scalewaycom.ScalewaycomPackage
  schollzcom: schollzcom.SchollzcomPackage
  sconsorg: sconsorg.SconsorgPackage
  scryerpl: scryerpl.ScryerplPackage
  sdkmanio: sdkmanio.SdkmanioPackage
  seaweedfscom: seaweedfscom.SeaweedfscomPackage
  sentryio: sentryio.SentryioPackage
  sfnet: sfnet.SfnetPackage
  sfcgalorg: sfcgalorg.SfcgalorgPackage
  sftpgocom: sftpgocom.SftpgocomPackage
  shellchecknet: shellchecknet.ShellchecknetPackage
  sigstoredev: sigstoredev.SigstoredevPackage
  simplesystemsorg: simplesystemsorg.SimplesystemsorgPackage
  singboxapp: sing_boxapp.SingboxappPackage
  skaffolddev: skaffolddev.SkaffolddevPackage
  smartmontoolsorg: smartmontoolsorg.SmartmontoolsorgPackage
  snapletdev: snapletdev.SnapletdevPackage
  sniffnetnet: sniffnetnet.SniffnetnetPackage
  snykio: snykio.SnykioPackage
  solanacom: solanacom.SolanacomPackage
  soldeerxyz: soldeerxyz.SoldeerxyzPackage
  soliditylangorg: soliditylangorg.SoliditylangorgPackage
  sonarqubeorg: sonarqubeorg.SonarqubeorgPackage
  sourceforgenet: sourceforgenet.SourceforgenetPackage
  sourcewareorg: sourcewareorg.SourcewareorgPackage
  soxrsourceforgenet: soxrsourceforgenet.SoxrsourceforgenetPackage
  spacetimedbcom: spacetimedbcom.SpacetimedbcomPackage
  spawnlink: spawnlink.SpawnlinkPackage
  speexorg: speexorg.SpeexorgPackage
  sphinxdocorg: sphinx_docorg.SphinxdocorgPackage
  sqlcdev: sqlcdev.SqlcdevPackage
  sqlfluffcom: sqlfluffcom.SqlfluffcomPackage
  sqliteorg: sqliteorg.SqliteorgPackage
  squawkhqcom: squawkhqcom.SquawkhqcomPackage
  srtallianceorg: srtallianceorg.SrtallianceorgPackage
  sshxio: sshxio.SshxioPackage
  starshiprs: starshiprs.StarshiprsPackage
  steampipeio: steampipeio.SteampipeioPackage
  stedolangithubio: stedolangithubio.StedolangithubioPackage
  straceio: straceio.StraceioPackage
  streamlinkgithubio: streamlinkgithubio.StreamlinkgithubioPackage
  stripecom: stripecom.StripecomPackage
  supabasecom: supabasecom.SupabasecomPackage
  surrealdbcom: surrealdbcom.SurrealdbcomPackage
  svenstarogithubio: svenstarogithubio.SvenstarogithubioPackage
  swaggerio: swaggerio.SwaggerioPackage
  swiftorg: swiftorg.SwiftorgPackage
  swigorg: swigorg.SwigorgPackage
  symfonycom: symfonycom.SymfonycomPackage
  sympyorg: sympyorg.SympyorgPackage
  syncthingnet: syncthingnet.SyncthingnetPackage
  systemdio: systemdio.SystemdioPackage
  tagliborg: tagliborg.TagliborgPackage
  tailcallrun: tailcallrun.TailcallrunPackage
  tailwindcsscom: tailwindcsscom.TailwindcsscomPackage
  taku910githubio: taku910githubio.Taku910githubioPackage
  talosdev: talosdev.TalosdevPackage
  taplotamasfedev: taplotamasfedev.TaplotamasfedevPackage
  tartrun: tartrun.TartrunPackage
  taskfiledev: taskfiledev.TaskfiledevPackage
  tcllangorg: tcl_langorg.TcllangorgPackage
  tcltk: tcltk.TcltkPackage
  tcpdumporg: tcpdumporg.TcpdumporgPackage
  tcshorg: tcshorg.TcshorgPackage
  teaxyz: teaxyz.TeaxyzPackage
  tectonictypesettinggithubio: tectonic_typesettinggithubio.TectonictypesettinggithubioPackage
  templguide: templguide.TemplguidePackage
  temporalio: temporalio.TemporalioPackage
  terraformdocsio: terraform_docsio.TerraformdocsioPackage
  terraformio: terraformio.TerraformioPackage
  terragruntgruntworkio: terragruntgruntworkio.TerragruntgruntworkioPackage
  terratagio: terratagio.TerratagioPackage
  tesseractocrgithubio: tesseract_ocrgithubio.TesseractocrgithubioPackage
  thekelleysorguk: thekelleysorguk.ThekelleysorgukPackage
  theoraorg: theoraorg.TheoraorgPackage
  thoughtworksgithubio: thoughtworksgithubio.ThoughtworksgithubioPackage
  thrysoeedk: thrysoeedk.ThrysoeedkPackage
  tidbytcom: tidbytcom.TidbytcomPackage
  tiltdev: tiltdev.TiltdevPackage
  tinybirdco: tinybirdco.TinybirdcoPackage
  tinygoorg: tinygoorg.TinygoorgPackage
  tldrsh: tldrsh.TldrshPackage
  tlrdev: tlrdev.TlrdevPackage
  tmateio: tmateio.TmateioPackage
  toxwiki: toxwiki.ToxwikiPackage
  traefikio: traefikio.TraefikioPackage
  treesittergithubio: tree_sittergithubio.TreesittergithubioPackage
  trippyclirs: trippyclirs.TrippyclirsPackage
  trufflesecuritycom: trufflesecuritycom.TrufflesecuritycomPackage
  tsl0922githubio: tsl0922githubio.Tsl0922githubioPackage
  tuistio: tuistio.TuistioPackage
  tukaaniorg: tukaaniorg.TukaaniorgPackage
  tursotech: tursotech.TursotechPackage
  typescriptlangorg: typescriptlangorg.TypescriptlangorgPackage
  typstapp: typstapp.TypstappPackage
  unboundnet: unboundnet.UnboundnetPackage
  undefined: undefined.UndefinedPackage
  unicodeorg: unicodeorg.UnicodeorgPackage
  unidataucaredu: unidataucaredu.UnidataucareduPackage
  unixodbcorg: unixodbcorg.UnixodbcorgPackage
  upliftcidev: upliftcidev.UpliftcidevPackage
  upxgithubio: upxgithubio.UpxgithubioPackage
  uriparsergithubio: uriparsergithubio.UriparsergithubioPackage
  valesh: valesh.ValeshPackage
  valkeyio: valkeyio.ValkeyioPackage
  vamppluginsorg: vamp_pluginsorg.VamppluginsorgPackage
  vannaai: vannaai.VannaaiPackage
  vapoursynthcom: vapoursynthcom.VapoursynthcomPackage
  vaultprojectio: vaultprojectio.VaultprojectioPackage
  vclustercom: vclustercom.VclustercomPackage
  vektragithubio: vektragithubio.VektragithubioPackage
  veleroio: veleroio.VeleroioPackage
  veracodecom: veracodecom.VeracodecomPackage
  vercelcom: vercelcom.VercelcomPackage
  versitycom: versitycom.VersitycomPackage
  viaductai: viaductai.ViaductaiPackage
  viaductaiksops: viaductai_ksops.ViaductaiksopsPackage
  videolanorg: videolanorg.VideolanorgPackage
  vimorg: vimorg.VimorgPackage
  virtualenvpypaio: virtualenvpypaio.VirtualenvpypaioPackage
  virtualsquareorg: virtualsquareorg.VirtualsquareorgPackage
  vitejsdev: vitejsdev.VitejsdevPackage
  vlangio: vlangio.VlangioPackage
  voltash: voltash.VoltashPackage
  wailsio: wailsio.WailsioPackage
  wait4xdev: wait4xdev.Wait4xdevPackage
  wasmerio: wasmerio.WasmerioPackage
  watchexecgithubio: watchexecgithubio.WatchexecgithubioPackage
  waterlanhomexs4allnl: waterlanhomexs4allnl.Waterlanhomexs4allnlPackage
  wavpackcom: wavpackcom.WavpackcomPackage
  waylandfreedesktoporg: waylandfreedesktoporg.WaylandfreedesktoporgPackage
  waylandfreedesktoporg: waylandfreedesktoporg.WaylandfreedesktoporgPackage
  webmprojectorg: webmprojectorg.WebmprojectorgPackage
  werfio: werfio.WerfioPackage
  wezfurlongorg: wezfurlongorg.WezfurlongorgPackage
  wilfredmeuk: wilfredmeuk.WilfredmeukPackage
  wimlibnet: wimlibnet.WimlibnetPackage
  wiresharkorg: wiresharkorg.WiresharkorgPackage
  wixcom: wixcom.WixcomPackage
  wkentarogithubio: wkentarogithubio.WkentarogithubioPackage
  wpewebkitorg: wpewebkitorg.WpewebkitorgPackage
  wundergraphcom: wundergraphcom.WundergraphcomPackage
  wxwidgetsorg: wxwidgetsorg.WxwidgetsorgPackage
  xorg: xorg.XorgPackage
  xorgxscrnsaver: xorg_xscrnsaver.XorgxscrnsaverPackage
  xcfiledev: xcfiledev.XcfiledevPackage
  xercesapacheorg: xercesapacheorg.XercesapacheorgPackage
  xiphorg: xiphorg.XiphorgPackage
  xkbcommonorg: xkbcommonorg.XkbcommonorgPackage
  xplrdev: xplrdev.XplrdevPackage
  xpraorg: xpraorg.XpraorgPackage
  xtlsgithubio: xtlsgithubio.XtlsgithubioPackage
  xvidcom: xvidcom.XvidcomPackage
  yadmio: yadmio.YadmioPackage
  yarnpkgcom: yarnpkgcom.YarnpkgcomPackage
  yasmtortallnet: yasmtortallnet.YasmtortallnetPackage
  youtubedlorg: youtube_dlorg.YoutubedlorgPackage
  ytdlporg: yt_dlporg.YtdlporgPackage
  yuigithubio: yuigithubio.YuigithubioPackage
  zarfdev: zarfdev.ZarfdevPackage
  zeromqorg: zeromqorg.ZeromqorgPackage
  ziglangorg: ziglangorg.ZiglangorgPackage
  zlibnet: zlibnet.ZlibnetPackage
  zrokio: zrokio.ZrokioPackage
  zshsourceforgeio: zshsourceforgeio.ZshsourceforgeioPackage
}

// Export pantry object with package mappings
export const pantry: Pantry = {
  abseilio: abseilio.abseilioPackage,
  acornio: acornio.acornioPackage,
  agptco: agptco.agptcoPackage,
  agwanamegitcrypt: agwaname_git_crypt.agwanamegitcryptPackage,
  akuityio: akuityio.akuityioPackage,
  alacrittyorg: alacrittyorg.alacrittyorgPackage,
  alembicsqlalchemyorg: alembicsqlalchemyorg.alembicsqlalchemyorgPackage,
  aliases: aliases.aliasesPackage,
  alsaprojectorg: alsa_projectorg.alsaprojectorgPackage,
  amberlangcom: amber_langcom.amberlangcomPackage,
  amprs: amprs.amprsPackage,
  amrdevelopergithubio: amrdevelopergithubio.amrdevelopergithubioPackage,
  anchorecom: anchorecom.anchorecomPackage,
  androidcom: androidcom.androidcomPackage,
  angulardev: angulardev.angulardevPackage,
  ansiblecom: ansiblecom.ansiblecomPackage,
  aomediagooglesourcecom: aomediagooglesourcecom.aomediagooglesourcecomPackage,
  apacheorg: apacheorg.apacheorgPackage,
  apktoolorg: apktoolorg.apktoolorgPackage,
  apollographqlcom: apollographqlcom.apollographqlcomPackage,
  appiumio: appiumio.appiumioPackage,
  applecom: applecom.applecomPackage,
  applecomremote_cmds: applecom_remote_cmds.applecomremote_cmdsPackage,
  apptainerorg: apptainerorg.apptainerorgPackage,
  aquasecuritygithubio: aquasecuritygithubio.aquasecuritygithubioPackage,
  arduinogithubio: arduinogithubio.arduinogithubioPackage,
  argbashdev: argbashdev.argbashdevPackage,
  argoprojgithubio: argoprojgithubio.argoprojgithubioPackage,
  aria2githubio: aria2githubio.aria2githubioPackage,
  arkadedev: arkadedev.arkadedevPackage,
  asciidoctororg: asciidoctororg.asciidoctororgPackage,
  asciinemaorg: asciinemaorg.asciinemaorgPackage,
  aspellnet: aspellnet.aspellnetPackage,
  assimporg: assimporg.assimporgPackage,
  astgrepgithubio: ast_grepgithubio.astgrepgithubioPackage,
  astralsh: astralsh.astralshPackage,
  astralshty: astralsh_ty.astralshtyPackage,
  astralshruff: astralsh_ruff.astralshruffPackage,
  astralshuv: astralsh_uv.astralshuvPackage,
  atlasgoio: atlasgoio.atlasgoioPackage,
  attrsorg: attrsorg.attrsorgPackage,
  augeasnet: augeasnet.augeasnetPackage,
  authzedcom: authzedcom.authzedcomPackage,
  aux4io: aux4io.aux4ioPackage,
  awsamazoncom: awsamazoncom.awsamazoncomPackage,
  awsamazoncomcli: awsamazoncom_cli.awsamazoncomcliPackage,
  awsamazoncomsam: awsamazoncom_sam.awsamazoncomsamPackage,
  bashlydannybco: bashlydannybco.bashlydannybcoPackage,
  bcryptsourceforgenet: bcryptsourceforgenet.bcryptsourceforgenetPackage,
  beyondgrepcom: beyondgrepcom.beyondgrepcomPackage,
  biomejsdev: biomejsdev.biomejsdevPackage,
  bitcoinorg: bitcoinorg.bitcoinorgPackage,
  bittensorcom: bittensorcom.bittensorcomPackage,
  bitwardencom: bitwardencom.bitwardencomPackage,
  blake2net: blake2net.blake2netPackage,
  bloomreachcom: bloomreachcom.bloomreachcomPackage,
  boostorg: boostorg.boostorgPackage,
  borepub: borepub.borepubPackage,
  breakfastquaycom: breakfastquaycom.breakfastquaycomPackage,
  browserusecom: browser_usecom.browserusecomPackage,
  brxken128githubio: brxken128githubio.brxken128githubioPackage,
  budimanjojogithubio: budimanjojogithubio.budimanjojogithubioPackage,
  bufbuild: bufbuild.bufbuildPackage,
  buildpacksio: buildpacksio.buildpacksioPackage,
  bunsh: bunsh.bunshPackage,
  bytebasecom: bytebasecom.bytebasecomPackage,
  bytereeforg: bytereeforg.bytereeforgPackage,
  caresorg: c_aresorg.caresorgPackage,
  caddyservercom: caddyservercom.caddyservercomPackage,
  cairographicsorg: cairographicsorg.cairographicsorgPackage,
  capstoneengineorg: capstone_engineorg.capstoneengineorgPackage,
  carapacesh: carapacesh.carapaceshPackage,
  caskreadthedocsio: caskreadthedocsio.caskreadthedocsioPackage,
  catborg: catborg.catborgPackage,
  ccachedev: ccachedev.ccachedevPackage,
  cedarpolicycom: cedarpolicycom.cedarpolicycomPackage,
  cedarpolicycomcli: cedarpolicycom_cli.cedarpolicycomcliPackage,
  cephcom: cephcom.cephcomPackage,
  cephcomcephadm: cephcom_cephadm.cephcomcephadmPackage,
  ceressolverorg: ceres_solverorg.ceressolverorgPackage,
  certbotefforg: certbotefforg.certbotefforgPackage,
  certifiio: certifiio.certifiioPackage,
  cgalorg: cgalorg.cgalorgPackage,
  changiedev: changiedev.changiedevPackage,
  charmsh: charmsh.charmshPackage,
  checkovio: checkovio.checkovioPackage,
  chezmoiio: chezmoiio.chezmoiioPackage,
  chiarkgreenendorguk: chiarkgreenendorguk.chiarkgreenendorgukPackage,
  chromedriverchromiumorg: chromedriverchromiumorg.chromedriverchromiumorgPackage,
  ciliumio: ciliumio.ciliumioPackage,
  circlecicom: circlecicom.circlecicomPackage,
  ciscocom: ciscocom.ciscocomPackage,
  classicyarnpkgcom: classicyarnpkgcom.classicyarnpkgcomPackage,
  cligithubcom: cligithubcom.cligithubcomPackage,
  clisporg: clisporg.clisporgPackage,
  clogtoolgithubio: clog_toolgithubio.clogtoolgithubioPackage,
  cloudflarecom: cloudflarecom.cloudflarecomPackage,
  cloudfoundryorg: cloudfoundryorg.cloudfoundryorgPackage,
  cloudnativepgio: cloudnative_pgio.cloudnativepgioPackage,
  cmakeorg: cmakeorg.cmakeorgPackage,
  cmockaorg: cmockaorg.cmockaorgPackage,
  cnqueryio: cnqueryio.cnqueryioPackage,
  cocoapodsorg: cocoapodsorg.cocoapodsorgPackage,
  cocoapodsorgxcodeproj: cocoapodsorg_xcodeproj.cocoapodsorgxcodeprojPackage,
  cocogittoio: cocogittoio.cocogittoioPackage,
  codevideolanorg: codevideolanorg.codevideolanorgPackage,
  codercom: codercom.codercomPackage,
  cointopsh: cointopsh.cointopshPackage,
  condaorg: condaorg.condaorgPackage,
  conftestdev: conftestdev.conftestdevPackage,
  connectrpcorg: connectrpcorg.connectrpcorgPackage,
  consulio: consulio.consulioPackage,
  convcogithubio: convcogithubio.convcogithubioPackage,
  corednsio: corednsio.corednsioPackage,
  cpanminus: cpanminus.cpanminusPackage,
  crypto: crypto.cryptoPackage,
  cratesio: cratesio.cratesioPackage,
  cratesioaichat: cratesio_aichat.cratesioaichatPackage,
  cratesiobakers: cratesio_bake_rs.cratesiobakersPackage,
  cratesiocargotarpaulin: cratesio_cargo_tarpaulin.cratesiocargotarpaulinPackage,
  cratesioducker: cratesio_ducker.cratesioduckerPackage,
  cratesioflamegraph: cratesio_flamegraph.cratesioflamegraphPackage,
  cratesioox: cratesio_ox.cratesiooxPackage,
  cratesiopik: cratesio_pik.cratesiopikPackage,
  cratesioqsv: cratesio_qsv.cratesioqsvPackage,
  cratesioripgrepall: cratesio_ripgrep_all.cratesioripgrepallPackage,
  cratesiorucolanotes: cratesio_rucola_notes.cratesiorucolanotesPackage,
  cratesiosamply: cratesio_samply.cratesiosamplyPackage,
  crazymaxdev: crazymaxdev.crazymaxdevPackage,
  creativeprojectsgithubio: creativeprojectsgithubio.creativeprojectsgithubioPackage,
  cruftgithubio: cruftgithubio.cruftgithubioPackage,
  cryptographyio: cryptographyio.cryptographyioPackage,
  crystallangorg: crystal_langorg.crystallangorgPackage,
  cscopesourceforgeio: cscopesourceforgeio.cscopesourceforgeioPackage,
  csientuedutw: csientuedutw.csientuedutwPackage,
  ctagsio: ctagsio.ctagsioPackage,
  ctopsh: ctopsh.ctopshPackage,
  cuelangorg: cuelangorg.cuelangorgPackage,
  curlse: curlse.curlsePackage,
  curlieio: curlieio.curlieioPackage,
  cyrusimaporg: cyrusimaporg.cyrusimaporgPackage,
  cythonorg: cythonorg.cythonorgPackage,
  d2langcom: d2langcom.d2langcomPackage,
  daggerio: daggerio.daggerioPackage,
  dartdev: dartdev.dartdevPackage,
  darwinsyscom: darwinsyscom.darwinsyscomPackage,
  databrickscom: databrickscom.databrickscomPackage,
  daytonaio: daytonaio.daytonaioPackage,
  dblabdanvergaracom: dblabdanvergaracom.dblabdanvergaracomPackage,
  debianorg: debianorg.debianorgPackage,
  deepwisdomai: deepwisdomai.deepwisdomaiPackage,
  denilsonsanombr: denilsonsanombr.denilsonsanombrPackage,
  denoland: denoland.denolandPackage,
  depotdev: depotdev.depotdevPackage,
  destunreachorg: dest_unreachorg.destunreachorgPackage,
  devyorhelnl: devyorhelnl.devyorhelnlPackage,
  developer1passwordcom: developer1passwordcom.developer1passwordcomPackage,
  developer1passwordcom1passwordcli: developer1passwordcom_1password_cli.developer1passwordcom1passwordcliPackage,
  developersyubicocom: developersyubicocom.developersyubicocomPackage,
  devpodsh: devpodsh.devpodshPackage,
  dgraphio: dgraphio.dgraphioPackage,
  dhalllangorg: dhall_langorg.dhalllangorgPackage,
  dhruvkbdev: dhruvkbdev.dhruvkbdevPackage,
  diggerdev: diggerdev.diggerdevPackage,
  digiporg: digiporg.digiporgPackage,
  digitaloceancom: digitaloceancom.digitaloceancomPackage,
  direnvnet: direnvnet.direnvnetPackage,
  dkrzde: dkrzde.dkrzdePackage,
  dnslookupdog: dnslookupdog.dnslookupdogPackage,
  docbookorg: docbookorg.docbookorgPackage,
  dockercom: dockercom.dockercomPackage,
  doctavecom: doctavecom.doctavecomPackage,
  docutilsorg: docutilsorg.docutilsorgPackage,
  dotenvlintergithubio: dotenv_lintergithubio.dotenvlintergithubioPackage,
  dotenvxcom: dotenvxcom.dotenvxcomPackage,
  dotnetmicrosoftcom: dotnetmicrosoftcom.dotnetmicrosoftcomPackage,
  dotnetmicrosoftcom: dotnetmicrosoftcom.dotnetmicrosoftcomPackage,
  doxygennl: doxygennl.doxygennlPackage,
  dozzledev: dozzledev.dozzledevPackage,
  dprintdev: dprintdev.dprintdevPackage,
  drifreedesktoporg: drifreedesktoporg.drifreedesktoporgPackage,
  duckdborg: duckdborg.duckdborgPackage,
  duktapeorg: duktapeorg.duktapeorgPackage,
  dystroyorg: dystroyorg.dystroyorgPackage,
  dystroyorgbacon: dystroyorg_bacon.dystroyorgbaconPackage,
  earthlydev: earthlydev.earthlydevPackage,
  ebassigithubio: ebassigithubio.ebassigithubioPackage,
  edgedbcom: edgedbcom.edgedbcomPackage,
  eigentuxfamilyorg: eigentuxfamilyorg.eigentuxfamilyorgPackage,
  eksctlio: eksctlio.eksctlioPackage,
  elementsprojectorg: elementsprojectorg.elementsprojectorgPackage,
  elfutilsorg: elfutilsorg.elfutilsorgPackage,
  elixirlangorg: elixir_langorg.elixirlangorgPackage,
  elizaosgithubio: elizaOSgithubio.elizaOSgithubioPackage,
  elvsh: elvsh.elvshPackage,
  encoredev: encoredev.encoredevPackage,
  endoflifedate: endoflifedate.endoflifedatePackage,
  epsilonprojectsourceforgeio: epsilon_projectsourceforgeio.epsilonprojectsourceforgeioPackage,
  erlangorg: erlangorg.erlangorgPackage,
  etcdio: etcdio.etcdioPackage,
  exiftoolorg: exiftoolorg.exiftoolorgPackage,
  expodev: expodev.expodevPackage,
  eyrieorg: eyrieorg.eyrieorgPackage,
  f1bonacc1githubio: f1bonacc1githubio.f1bonacc1githubioPackage,
  fabianlindforsse: fabianlindforsse.fabianlindforssePackage,
  facebookcom: facebookcom.facebookcomPackage,
  fairwindscom: fairwindscom.fairwindscomPackage,
  fastlanetools: fastlanetools.fastlanetoolsPackage,
  felixkratzgithubio: felixkratzgithubio.felixkratzgithubioPackage,
  fermyoncom: fermyoncom.fermyoncomPackage,
  ffmpegorg: ffmpegorg.ffmpegorgPackage,
  fftworg: fftworg.fftworgPackage,
  filippoio: filippoio.filippoioPackage,
  fishshellcom: fishshellcom.fishshellcomPackage,
  fliptio: fliptio.fliptioPackage,
  flitpypaio: flitpypaio.flitpypaioPackage,
  fltkorg: fltkorg.fltkorgPackage,
  fluentciio: fluentciio.fluentciioPackage,
  flutterdev: flutterdev.flutterdevPackage,
  fluxcdio: fluxcdio.fluxcdioPackage,
  flyio: flyio.flyioPackage,
  flywaydborg: flywaydborg.flywaydborgPackage,
  fmtdev: fmtdev.fmtdevPackage,
  fnaxnagithubio: fna_xnagithubio.fnaxnagithubioPackage,
  freedesktoporg: freedesktoporg.freedesktoporgPackage,
  freeglutsourceforgeio: freeglutsourceforgeio.freeglutsourceforgeioPackage,
  freetdsorg: freetdsorg.freetdsorgPackage,
  freetypeorg: freetypeorg.freetypeorgPackage,
  frei0rdyneorg: frei0rdyneorg.frei0rdyneorgPackage,
  fuellabsgithubio: fuellabsgithubio.fuellabsgithubioPackage,
  fukuchiorg: fukuchiorg.fukuchiorgPackage,
  fullstorycom: fullstorycom.fullstorycomPackage,
  furyco: furyco.furycoPackage,
  fxwtf: fxwtf.fxwtfPackage,
  gaiagisit: gaia_gisit.gaiagisitPackage,
  gdalorg: gdalorg.gdalorgPackage,
  geoffgreerfm: geoffgreerfm.geoffgreerfmPackage,
  getclipboardapp: getclipboardapp.getclipboardappPackage,
  getcomposerorg: getcomposerorg.getcomposerorgPackage,
  getfoundrysh: getfoundrysh.getfoundryshPackage,
  getsopsio: getsopsio.getsopsioPackage,
  getsynthcom: getsynthcom.getsynthcomPackage,
  getzolaorg: getzolaorg.getzolaorgPackage,
  geuzorg: geuzorg.geuzorgPackage,
  gflagsgithubio: gflagsgithubio.gflagsgithubioPackage,
  ghostgumcomau: ghostgumcomau.ghostgumcomauPackage,
  ghostscriptcom: ghostscriptcom.ghostscriptcomPackage,
  giflibsourceforgeio: giflibsourceforgeio.giflibsourceforgeioPackage,
  gitclifforg: git_clifforg.gitclifforgPackage,
  gitlfscom: git_lfscom.gitlfscomPackage,
  gitquickstatssh: git_quick_statssh.gitquickstatsshPackage,
  gitscmorg: git_scmorg.gitscmorgPackage,
  gittowncom: git_towncom.gittowncomPackage,
  gitosgeoorg: gitosgeoorg.gitosgeoorgPackage,
  gittoztnet: gittoztnet.gittoztnetPackage,
  githubcom: githubcom.githubcomPackage,
  githubcom0agecreate2crunch: githubcom_0age_create2crunch.githubcom0agecreate2crunchPackage,
  githubcomblacktoplporg: githubcom_blacktop_lporg.githubcomblacktoplporgPackage,
  githubcomblynnnex: githubcom_blynn_nex.githubcomblynnnexPackage,
  githubcomcyfrinsafetxhashesutil: githubcom_Cyfrin_safe_tx_hashes_util.githubcomCyfrinsafetxhashesutilPackage,
  githubcomdiniboy1123usque: githubcom_Diniboy1123_usque.githubcomDiniboy1123usquePackage,
  githubcomfastfetchclifastfetch: githubcom_fastfetch_cli_fastfetch.githubcomfastfetchclifastfetchPackage,
  githubcomfiatjafnak: githubcom_fiatjaf_nak.githubcomfiatjafnakPackage,
  githubcomgitecosystemgitcredentialmanager: githubcom_git_ecosystem_git_credential_manager.githubcomgitecosystemgitcredentialmanagerPackage,
  githubcomglauthglauth: githubcom_glauth_glauth.githubcomglauthglauthPackage,
  githubcomigorshubovychmarkdownlintcli: githubcom_igorshubovych_markdownlint_cli.githubcomigorshubovychmarkdownlintcliPackage,
  githubcomjarunnnn: githubcom_jarun_nnn.githubcomjarunnnnPackage,
  githubcomkoekeishiyaskhd: githubcom_koekeishiya_skhd.githubcomkoekeishiyaskhdPackage,
  githubcomlucianosrpryeuv: githubcom_lucianosrp_rye_uv.githubcomlucianosrpryeuvPackage,
  githubcommasclimas: githubcom_mas_cli_mas.githubcommasclimasPackage,
  githubcommilescranmerrip2: githubcom_MilesCranmer_rip2.githubcomMilesCranmerrip2Package,
  githubcomminseokohtomlcli: githubcom_MinseokOh_toml_cli.githubcomMinseokOhtomlcliPackage,
  githubcommycreepypakku: githubcom_mycreepy_pakku.githubcommycreepypakkuPackage,
  githubcomparchivepar2cmdline: githubcom_Parchive_par2cmdline.githubcomParchivepar2cmdlinePackage,
  githubcompeaks5cmd: githubcom_peak_s5cmd.githubcompeaks5cmdPackage,
  githubcomperipheryappperiphery: githubcom_peripheryapp_periphery.githubcomperipheryappperipheryPackage,
  githubcomshakaprojectshakapackager: githubcom_shaka_project_shaka_packager.githubcomshakaprojectshakapackagerPackage,
  githubcomsorahenvchain: githubcom_sorah_envchain.githubcomsorahenvchainPackage,
  githubcomspencerkimballstargazers: githubcom_spencerkimball_stargazers.githubcomspencerkimballstargazersPackage,
  githubcomwitheredmagicstarpls: githubcom_withered_magic_starpls.githubcomwitheredmagicstarplsPackage,
  gitlabcom: gitlabcom.gitlabcomPackage,
  gitleaksio: gitleaksio.gitleaksioPackage,
  glarosdtcumnedu: glarosdtcumnedu.glarosdtcumneduPackage,
  gleamrun: gleamrun.gleamrunPackage,
  glewsourceforgeio: glewsourceforgeio.glewsourceforgeioPackage,
  glfworg: glfworg.glfworgPackage,
  glmgtrucnet: glmg_trucnet.glmgtrucnetPackage,
  gnomeorg: gnomeorg.gnomeorgPackage,
  gnuorg: gnuorg.gnuorgPackage,
  gnupgorg: gnupgorg.gnupgorgPackage,
  gnuplotinfo: gnuplotinfo.gnuplotinfoPackage,
  gnutlsorg: gnutlsorg.gnutlsorgPackage,
  godev: godev.godevPackage,
  gouberorg: gouberorg.gouberorgPackage,
  gohugoio: gohugoio.gohugoioPackage,
  golangcilintrun: golangci_lintrun.golangcilintrunPackage,
  gomplateca: gomplateca.gomplatecaPackage,
  googlecom: googlecom.googlecomPackage,
  googlegithubio: googlegithubio.googlegithubioPackage,
  goreleasercom: goreleasercom.goreleasercomPackage,
  gourceio: gourceio.gourceioPackage,
  gphotoorg: gphotoorg.gphotoorgPackage,
  gqlgencom: gqlgencom.gqlgencomPackage,
  gradleorg: gradleorg.gradleorgPackage,
  grafanacom: grafanacom.grafanacomPackage,
  granteddev: granteddev.granteddevPackage,
  graphicsmagickorg: graphicsmagickorg.graphicsmagickorgPackage,
  graphitesilorg: graphitesilorg.graphitesilorgPackage,
  graphqleditorcom: graphqleditorcom.graphqleditorcomPackage,
  graphvizorg: graphvizorg.graphvizorgPackage,
  groongaorg: groongaorg.groongaorgPackage,
  groovylangorg: groovy_langorg.groovylangorgPackage,
  grpcio: grpcio.grpcioPackage,
  gstreamerfreedesktoporg: gstreamerfreedesktoporg.gstreamerfreedesktoporgPackage,
  gtkorg: gtkorg.gtkorgPackage,
  gtssourceforgenet: gtssourceforgenet.gtssourceforgenetPackage,
  hadronsorg: hadronsorg.hadronsorgPackage,
  hardingmotdca: hardingmotdca.hardingmotdcaPackage,
  harfbuzzorg: harfbuzzorg.harfbuzzorgPackage,
  hashicorpcom: hashicorpcom.hashicorpcomPackage,
  haskellorg: haskellorg.haskellorgPackage,
  hasuraio: hasuraio.hasuraioPackage,
  hatchpypaio: hatchpypaio.hatchpypaioPackage,
  hboehminfo: hboehminfo.hboehminfoPackage,
  hdfgrouporg: hdfgrouporg.hdfgrouporgPackage,
  heasarcgsfcnasagov: heasarcgsfcnasagov.heasarcgsfcnasagovPackage,
  helixeditorcom: helix_editorcom.helixeditorcomPackage,
  helmsh: helmsh.helmshPackage,
  herokucom: herokucom.herokucomPackage,
  hetznercom: hetznercom.hetznercomPackage,
  hjsongithubio: hjsongithubio.hjsongithubioPackage,
  htmltidyorg: html_tidyorg.htmltidyorgPackage,
  htopdev: htopdev.htopdevPackage,
  htsliborg: htsliborg.htsliborgPackage,
  httpieio: httpieio.httpieioPackage,
  huggingfaceco: huggingfaceco.huggingfacecoPackage,
  hugowang: hugowang.hugowangPackage,
  hunspellgithubio: hunspellgithubio.hunspellgithubioPackage,
  hurldev: hurldev.hurldevPackage,
  ibrcstubsde: ibrcstu_bsde.ibrcstubsdePackage,
  idleberggithubio: idleberggithubio.idleberggithubioPackage,
  ijgorg: ijgorg.ijgorgPackage,
  imageflowio: imageflowio.imageflowioPackage,
  imagemagickorg: imagemagickorg.imagemagickorgPackage,
  indexsupplycom: indexsupplycom.indexsupplycomPackage,
  infoziporg: info_ziporg.infoziporgPackage,
  infracostio: infracostio.infracostioPackage,
  intelcom: intelcom.intelcomPackage,
  invisibleislandnet: invisible_islandnet.invisibleislandnetPackage,
  invisibleislandnetlynx: invisible_islandnet_lynx.invisibleislandnetlynxPackage,
  ipfstech: ipfstech.ipfstechPackage,
  ipythonorg: ipythonorg.ipythonorgPackage,
  irohcomputer: irohcomputer.irohcomputerPackage,
  iscorg: iscorg.iscorgPackage,
  iscorgbind9: iscorg_bind9.iscorgbind9Package,
  istioio: istioio.istioioPackage,
  itstoolorg: itstoolorg.itstoolorgPackage,
  ivarchcom: ivarchcom.ivarchcomPackage,
  jbangdev: jbangdev.jbangdevPackage,
  jbig2deccom: jbig2deccom.jbig2deccomPackage,
  jedisct1githubio: jedisct1githubio.jedisct1githubioPackage,
  jedsoftorg: jedsoftorg.jedsoftorgPackage,
  jemallocnet: jemallocnet.jemallocnetPackage,
  jenkinsxio: jenkins_xio.jenkinsxioPackage,
  jenkinsio: jenkinsio.jenkinsioPackage,
  jenvbe: jenvbe.jenvbePackage,
  jetporchcom: jetporchcom.jetporchcomPackage,
  jfrogcom: jfrogcom.jfrogcomPackage,
  jlessio: jlessio.jlessioPackage,
  jonasgithubio: jonasgithubio.jonasgithubioPackage,
  jpegorg: jpegorg.jpegorgPackage,
  jsonnetorg: jsonnetorg.jsonnetorgPackage,
  jugitfzjuelichde: jugitfz_juelichde.jugitfzjuelichdePackage,
  jujuis: jujuis.jujuisPackage,
  julialangorg: julialangorg.julialangorgPackage,
  jumppaddev: jumppaddev.jumppaddevPackage,
  jupyterorg: jupyterorg.jupyterorgPackage,
  justsystems: justsystems.justsystemsPackage,
  k3dio: k3dio.k3dioPackage,
  k6io: k6io.k6ioPackage,
  k9scliio: k9scliio.k9scliioPackage,
  kafkaapacheorg: kafkaapacheorg.kafkaapacheorgPackage,
  kagglecom: kagglecom.kagglecomPackage,
  keephqdev: keephqdev.keephqdevPackage,
  kerberosorg: kerberosorg.kerberosorgPackage,
  kernelorg: kernelorg.kernelorgPackage,
  kernelorglibcap: kernelorg_libcap.kernelorglibcapPackage,
  khanacademyorg: khanacademyorg.khanacademyorgPackage,
  khronosorg: khronosorg.khronosorgPackage,
  kindsigsk8sio: kindsigsk8sio.kindsigsk8sioPackage,
  kislyukgithubio: kislyukgithubio.kislyukgithubioPackage,
  kluctlio: kluctlio.kluctlioPackage,
  kobuild: kobuild.kobuildPackage,
  kornelski: kornelski.kornelskiPackage,
  kotlinlangorg: kotlinlangorg.kotlinlangorgPackage,
  koyebcom: koyebcom.koyebcomPackage,
  kptdev: kptdev.kptdevPackage,
  krewsigsk8sio: krewsigsk8sio.krewsigsk8sioPackage,
  ktlintgithubio: ktlintgithubio.ktlintgithubioPackage,
  kubebuilderio: kubebuilderio.kubebuilderioPackage,
  kubecmcloud: kubecmcloud.kubecmcloudPackage,
  kubectxdev: kubectxdev.kubectxdevPackage,
  kubelinterio: kubelinterio.kubelinterioPackage,
  kubernetesio: kubernetesio.kubernetesioPackage,
  kubesharkco: kubesharkco.kubesharkcoPackage,
  ladspaorg: ladspaorg.ladspaorgPackage,
  lamesourceforgeio: lamesourceforgeio.lamesourceforgeioPackage,
  langchaincom: langchaincom.langchaincomPackage,
  laravelcom: laravelcom.laravelcomPackage,
  lavinmqcom: lavinmqcom.lavinmqcomPackage,
  lcdforg: lcdforg.lcdforgPackage,
  leethomasongithubio: leethomasongithubio.leethomasongithubioPackage,
  leolangorg: leo_langorg.leolangorgPackage,
  leonerdorguk: leonerdorguk.leonerdorgukPackage,
  leptonicaorg: leptonicaorg.leptonicaorgPackage,
  lftpyarru: lftpyarru.lftpyarruPackage,
  libarchiveorg: libarchiveorg.libarchiveorgPackage,
  libcxxllvmorg: libcxxllvmorg.libcxxllvmorgPackage,
  libeventorg: libeventorg.libeventorgPackage,
  libexifgithubio: libexifgithubio.libexifgithubioPackage,
  libexpatgithubio: libexpatgithubio.libexpatgithubioPackage,
  libgdgithubio: libgdgithubio.libgdgithubioPackage,
  libgeosorg: libgeosorg.libgeosorgPackage,
  libgit2org: libgit2org.libgit2orgPackage,
  libimobiledeviceorg: libimobiledeviceorg.libimobiledeviceorgPackage,
  libislsourceforgeio: libislsourceforgeio.libislsourceforgeioPackage,
  libjpegturboorg: libjpeg_turboorg.libjpegturboorgPackage,
  liblqrwikidotcom: liblqrwikidotcom.liblqrwikidotcomPackage,
  libpipelinegitlabio: libpipelinegitlabio.libpipelinegitlabioPackage,
  libpngorg: libpngorg.libpngorgPackage,
  libproxygithubio: libproxygithubio.libproxygithubioPackage,
  libraworg: libraworg.libraworgPackage,
  libsdlorg: libsdlorg.libsdlorgPackage,
  libsodiumorg: libsodiumorg.libsodiumorgPackage,
  libsouporg: libsouporg.libsouporgPackage,
  libspngorg: libspngorg.libspngorgPackage,
  libsshorg: libsshorg.libsshorgPackage,
  libssh2org: libssh2org.libssh2orgPackage,
  libtomnet: libtomnet.libtomnetPackage,
  liburcuorg: liburcuorg.liburcuorgPackage,
  libusbinfo: libusbinfo.libusbinfoPackage,
  libuvorg: libuvorg.libuvorgPackage,
  libvipsorg: libvipsorg.libvipsorgPackage,
  libwebsocketsorg: libwebsocketsorg.libwebsocketsorgPackage,
  libziporg: libziporg.libziporgPackage,
  limavmio: lima_vmio.limavmioPackage,
  linkerdio: linkerdio.linkerdioPackage,
  linuxpamorg: linux_pamorg.linuxpamorgPackage,
  liteclicom: liteclicom.liteclicomPackage,
  littlecmscom: littlecmscom.littlecmscomPackage,
  llmdatasetteio: llmdatasetteio.llmdatasetteioPackage,
  lloydgithubio: lloydgithubio.lloydgithubioPackage,
  llvmorg: llvmorg.llvmorgPackage,
  localaiio: localaiio.localaiioPackage,
  localstackcloud: localstackcloud.localstackcloudPackage,
  logdydev: logdydev.logdydevPackage,
  logologicalorg: logologicalorg.logologicalorgPackage,
  luaorg: luaorg.luaorgPackage,
  luajitorg: luajitorg.luajitorgPackage,
  luarocksorg: luarocksorg.luarocksorgPackage,
  lucagrullacom: lucagrullacom.lucagrullacomPackage,
  lunarvimorg: lunarvimorg.lunarvimorgPackage,
  lxmlde: lxmlde.lxmldePackage,
  lycheeclirs: lycheeclirs.lycheeclirsPackage,
  lz4org: lz4org.lz4orgPackage,
  maaslalanicom: maaslalanicom.maaslalanicomPackage,
  macvimorg: macvimorg.macvimorgPackage,
  mailpitaxllentorg: mailpitaxllentorg.mailpitaxllentorgPackage,
  makotemplatesorg: makotemplatesorg.makotemplatesorgPackage,
  mandbgitlabio: man_dbgitlabio.mandbgitlabioPackage,
  mandocbsdlv: mandocbsdlv.mandocbsdlvPackage,
  mariadbcom: mariadbcom.mariadbcomPackage,
  markupsafepalletsprojectscom: markupsafepalletsprojectscom.markupsafepalletsprojectscomPackage,
  materializecom: materializecom.materializecomPackage,
  matiosourceforgeio: matiosourceforgeio.matiosourceforgeioPackage,
  maturinrs: maturinrs.maturinrsPackage,
  mavenapacheorg: mavenapacheorg.mavenapacheorgPackage,
  mcmcjagssourceforgeio: mcmc_jagssourceforgeio.mcmcjagssourceforgeioPackage,
  mercurerocks: mercurerocks.mercurerocksPackage,
  mercurialscmorg: mercurial_scmorg.mercurialscmorgPackage,
  mergestatcom: mergestatcom.mergestatcomPackage,
  mesa3dorg: mesa3dorg.mesa3dorgPackage,
  mesonbuildcom: mesonbuildcom.mesonbuildcomPackage,
  microeditorgithubio: micro_editorgithubio.microeditorgithubioPackage,
  microbreworg: microbreworg.microbreworgPackage,
  microcksio: microcksio.microcksioPackage,
  microsoftcom: microsoftcom.microsoftcomPackage,
  microsoftcomcodecli: microsoftcom_code_cli.microsoftcomcodecliPackage,
  microsoftcommarkitdown: microsoftcom_markitdown.microsoftcommarkitdownPackage,
  midnightcommanderorg: midnight_commanderorg.midnightcommanderorgPackage,
  minio: minio.minioPackage,
  misejdxdev: misejdxdev.misejdxdevPackage,
  mitmproxyorg: mitmproxyorg.mitmproxyorgPackage,
  mkcertdev: mkcertdev.mkcertdevPackage,
  mkdocsorg: mkdocsorg.mkdocsorgPackage,
  modalcom: modalcom.modalcomPackage,
  moderncorg: moderncorg.moderncorgPackage,
  moderncorggoyacc: moderncorg_goyacc.moderncorggoyaccPackage,
  mongodbcom: mongodbcom.mongodbcomPackage,
  moonrepodev: moonrepodev.moonrepodevPackage,
  moshorg: moshorg.moshorgPackage,
  mozillaorg: mozillaorg.mozillaorgPackage,
  mozillaorgcbindgen: mozillaorg_cbindgen.mozillaorgcbindgenPackage,
  mpg123de: mpg123de.mpg123dePackage,
  mpmathorg: mpmathorg.mpmathorgPackage,
  mpvio: mpvio.mpvioPackage,
  msgpackorg: msgpackorg.msgpackorgPackage,
  mujscom: mujscom.mujscomPackage,
  munlangorg: mun_langorg.munlangorgPackage,
  mupdfcom: mupdfcom.mupdfcomPackage,
  musepacknet: musepacknet.musepacknetPackage,
  musllibcorg: musllibcorg.musllibcorgPackage,
  mvdancc: mvdancc.mvdanccPackage,
  mvdanccgofumpt: mvdancc_gofumpt.mvdanccgofumptPackage,
  mypylangorg: mypy_langorg.mypylangorgPackage,
  mysqlcom: mysqlcom.mysqlcomPackage,
  nanoeditororg: nano_editororg.nanoeditororgPackage,
  nasmus: nasmus.nasmusPackage,
  neovimio: neovimio.neovimioPackage,
  netflixcom: netflixcom.netflixcomPackage,
  netliborg: netliborg.netliborgPackage,
  netpbmsourceforgenet: netpbmsourceforgenet.netpbmsourceforgenetPackage,
  networkxorg: networkxorg.networkxorgPackage,
  nghttp2org: nghttp2org.nghttp2orgPackage,
  nginxorg: nginxorg.nginxorgPackage,
  nikecom: nikecom.nikecomPackage,
  nimlangorg: nim_langorg.nimlangorgPackage,
  ninjabuildorg: ninja_buildorg.ninjabuildorgPackage,
  nixosorg: nixosorg.nixosorgPackage,
  nixpackscom: nixpackscom.nixpackscomPackage,
  nlnetlabsnl: nlnetlabsnl.nlnetlabsnlPackage,
  nmaporg: nmaporg.nmaporgPackage,
  nodejsorg: nodejsorg.nodejsorgPackage,
  nomadprojectio: nomadprojectio.nomadprojectioPackage,
  nongnuorg: nongnuorg.nongnuorgPackage,
  notrojgithubio: notrojgithubio.notrojgithubioPackage,
  npmjscom: npmjscom.npmjscomPackage,
  ntporg: ntporg.ntporgPackage,
  numbatdev: numbatdev.numbatdevPackage,
  numpyorg: numpyorg.numpyorgPackage,
  nushellsh: nushellsh.nushellshPackage,
  nxdev: nxdev.nxdevPackage,
  oauth2proxygithubio: oauth2_proxygithubio.oauth2proxygithubioPackage,
  oberhumercom: oberhumercom.oberhumercomPackage,
  oberhumercomucl: oberhumercom_ucl.oberhumercomuclPackage,
  odigosio: odigosio.odigosioPackage,
  ohmyposhdev: ohmyposhdev.ohmyposhdevPackage,
  ollamaai: ollamaai.ollamaaiPackage,
  onefetchdev: onefetchdev.onefetchdevPackage,
  onsigithubio: onsigithubio.onsigithubioPackage,
  openmpiorg: open_mpiorg.openmpiorgPackage,
  openaicom: openaicom.openaicomPackage,
  openapigeneratortech: openapi_generatortech.openapigeneratortechPackage,
  openbaoorg: openbaoorg.openbaoorgPackage,
  openblasnet: openblasnet.openblasnetPackage,
  opencoreamrsourceforgeio: opencore_amrsourceforgeio.opencoreamrsourceforgeioPackage,
  opendaporg: opendaporg.opendaporgPackage,
  opendevorg: opendevorg.opendevorgPackage,
  openexrcom: openexrcom.openexrcomPackage,
  openinterpretercom: openinterpretercom.openinterpretercomPackage,
  openjdkorg: openjdkorg.openjdkorgPackage,
  openjpegorg: openjpegorg.openjpegorgPackage,
  openldaporg: openldaporg.openldaporgPackage,
  openldaporgliblmdb: openldaporg_liblmdb.openldaporgliblmdbPackage,
  openmpllvmorg: openmpllvmorg.openmpllvmorgPackage,
  openpmixgithubio: openpmixgithubio.openpmixgithubioPackage,
  openpolicyagentorg: openpolicyagentorg.openpolicyagentorgPackage,
  openprintinggithubio: openprintinggithubio.openprintinggithubioPackage,
  openrestyorg: openrestyorg.openrestyorgPackage,
  opensearchorg: opensearchorg.opensearchorgPackage,
  openshiftcom: openshiftcom.openshiftcomPackage,
  openslideorg: openslideorg.openslideorgPackage,
  opensshcom: opensshcom.opensshcomPackage,
  opensslorg: opensslorg.opensslorgPackage,
  opentofuorg: opentofuorg.opentofuorgPackage,
  openvpnnet: openvpnnet.openvpnnetPackage,
  operatorframeworkio: operatorframeworkio.operatorframeworkioPackage,
  opuscodecorg: opus_codecorg.opuscodecorgPackage,
  oraclecom: oraclecom.oraclecomPackage,
  orasland: orasland.oraslandPackage,
  ordinalscom: ordinalscom.ordinalscomPackage,
  orhundev: orhundev.orhundevPackage,
  otssnipttcom: otssnipttcom.otssnipttcomPackage,
  packerio: packerio.packerioPackage,
  pagureio: pagureio.pagureioPackage,
  palletsprojectscom: palletsprojectscom.palletsprojectscomPackage,
  pandocorg: pandocorg.pandocorgPackage,
  pantsbuildorg: pantsbuildorg.pantsbuildorgPackage,
  paulfitzgithubio: paulfitzgithubio.paulfitzgithubioPackage,
  pcreorg: pcreorg.pcreorgPackage,
  pcscliteapdufr: pcscliteapdufr.pcscliteapdufrPackage,
  pdmfmingdev: pdmfmingdev.pdmfmingdevPackage,
  peopleengrtamuedu: peopleengrtamuedu.peopleengrtamueduPackage,
  peopleredhatcom: peopleredhatcom.peopleredhatcomPackage,
  perlorg: perlorg.perlorgPackage,
  permitio: permitio.permitioPackage,
  phpnet: phpnet.phpnetPackage,
  phpmyadminnet: phpmyadminnet.phpmyadminnetPackage,
  pimalayaorg: pimalayaorg.pimalayaorgPackage,
  pinnipeddev: pinnipeddev.pinnipeddevPackage,
  pippypaio: pippypaio.pippypaioPackage,
  pipenvpypaio: pipenvpypaio.pipenvpypaioPackage,
  pixmanorg: pixmanorg.pixmanorgPackage,
  pkgxsh: pkgxsh.pkgxshPackage,
  pkgxshdev: pkgxsh_dev.pkgxshdevPackage,
  pkgxshpkgm: pkgxsh_pkgm.pkgxshpkgmPackage,
  pkllangorg: pkl_langorg.pkllangorgPackage,
  planetscalecom: planetscalecom.planetscalecomPackage,
  plantumlcom: plantumlcom.plantumlcomPackage,
  plasmasturmorg: plasmasturmorg.plasmasturmorgPackage,
  plocatesessenet: plocatesessenet.plocatesessenetPackage,
  pluralithcom: pluralithcom.pluralithcomPackage,
  pngquantorg: pngquantorg.pngquantorgPackage,
  pnpmio: pnpmio.pnpmioPackage,
  po4aorg: po4aorg.po4aorgPackage,
  pocketbaseio: pocketbaseio.pocketbaseioPackage,
  podmanio: podmanio.podmanioPackage,
  poktnetwork: poktnetwork.poktnetworkPackage,
  popplerfreedesktoporg: popplerfreedesktoporg.popplerfreedesktoporgPackage,
  portaudiocom: portaudiocom.portaudiocomPackage,
  postgresqlorg: postgresqlorg.postgresqlorgPackage,
  postgrestorg: postgrestorg.postgrestorgPackage,
  practicalschemenet: practical_schemenet.practicalschemenetPackage,
  precommitcom: pre_commitcom.precommitcomPackage,
  prefixdev: prefixdev.prefixdevPackage,
  presslygithubio: presslygithubio.presslygithubioPackage,
  prettierio: prettierio.prettierioPackage,
  printfngithubio: printfngithubio.printfngithubioPackage,
  priverdev: priverdev.priverdevPackage,
  projorg: projorg.projorgPackage,
  projectcopaceticgithubio: project_copaceticgithubio.projectcopaceticgithubioPackage,
  projectdiscoveryio: projectdiscoveryio.projectdiscoveryioPackage,
  projectdiscoveryionuclei: projectdiscoveryio_nuclei.projectdiscoveryionucleiPackage,
  projenio: projenio.projenioPackage,
  protobufdev: protobufdev.protobufdevPackage,
  prqllangorg: prql_langorg.prqllangorgPackage,
  psycopgorg: psycopgorg.psycopgorgPackage,
  publichronopikde: publichronopikde.publichronopikdePackage,
  pugixmlorg: pugixmlorg.pugixmlorgPackage,
  pulumiio: pulumiio.pulumiioPackage,
  pwgensourceforgeio: pwgensourceforgeio.pwgensourceforgeioPackage,
  pwmtorg: pwmtorg.pwmtorgPackage,
  pygmentsorg: pygmentsorg.pygmentsorgPackage,
  pyinvokeorg: pyinvokeorg.pyinvokeorgPackage,
  pypagithubio: pypagithubio.pypagithubioPackage,
  pypaio: pypaio.pypaioPackage,
  pytestorg: pytestorg.pytestorgPackage,
  pythonpilloworg: python_pilloworg.pythonpilloworgPackage,
  pythonpoetryorg: python_poetryorg.pythonpoetryorgPackage,
  pythonorg: pythonorg.pythonorgPackage,
  pyyamlorg: pyyamlorg.pyyamlorgPackage,
  qemuorg: qemuorg.qemuorgPackage,
  qhullorg: qhullorg.qhullorgPackage,
  qpdfsourceforgeio: qpdfsourceforgeio.qpdfsourceforgeioPackage,
  qtio: qtio.qtioPackage,
  quarydev: quarydev.quarydevPackage,
  quickwitio: quickwitio.quickwitioPackage,
  rwosorg: r_wosorg.rwosorgPackage,
  rabbitmqcom: rabbitmqcom.rabbitmqcomPackage,
  raccoinorg: raccoinorg.raccoinorgPackage,
  radicleorg: radicleorg.radicleorgPackage,
  railwayapp: railwayapp.railwayappPackage,
  rapidjsonorg: rapidjsonorg.rapidjsonorgPackage,
  rarlabcom: rarlabcom.rarlabcomPackage,
  rbenvorg: rbenvorg.rbenvorgPackage,
  rcloneorg: rcloneorg.rcloneorgPackage,
  re2corg: re2corg.re2corgPackage,
  reacheremail: reacheremail.reacheremailPackage,
  rebar3org: rebar3org.rebar3orgPackage,
  redisio: redisio.redisioPackage,
  rendercom: rendercom.rendercomPackage,
  replibytecom: replibytecom.replibytecomPackage,
  resticnet: resticnet.resticnetPackage,
  rhashsourceforgenet: rhashsourceforgenet.rhashsourceforgenetPackage,
  rigauxorg: rigauxorg.rigauxorgPackage,
  riverbankcomputingcom: riverbankcomputingcom.riverbankcomputingcomPackage,
  robotframeworkorg: robotframeworkorg.robotframeworkorgPackage,
  rockdabootgithubio: rockdabootgithubio.rockdabootgithubioPackage,
  rometools: rometools.rometoolsPackage,
  rpmorg: rpmorg.rpmorgPackage,
  rsyncsambaorg: rsyncsambaorg.rsyncsambaorgPackage,
  rtmpdumpmplayerhqhu: rtmpdumpmplayerhqhu.rtmpdumpmplayerhqhuPackage,
  rtomaykogithubio: rtomaykogithubio.rtomaykogithubioPackage,
  rubocoporg: rubocoporg.rubocoporgPackage,
  rubylangorg: ruby_langorg.rubylangorgPackage,
  rubygemsorg: rubygemsorg.rubygemsorgPackage,
  ruciocernch: ruciocernch.ruciocernchPackage,
  runatlantisio: runatlantisio.runatlantisioPackage,
  rustlanggithubio: rust_langgithubio.rustlanggithubioPackage,
  rustlangorg: rust_langorg.rustlangorgPackage,
  rustlangorgrustbindgen: rust_langorg_rust_bindgen.rustlangorgrustbindgenPackage,
  rustscriptorg: rust_scriptorg.rustscriptorgPackage,
  ryeastralsh: ryeastralsh.ryeastralshPackage,
  s3toolsorg: s3toolsorg.s3toolsorgPackage,
  saerasoftcom: saerasoftcom.saerasoftcomPackage,
  sagiegurarigithubio: sagiegurarigithubio.sagiegurarigithubioPackage,
  sasslangcom: sass_langcom.sasslangcomPackage,
  savannahnongnuorg: savannahnongnuorg.savannahnongnuorgPackage,
  scalalangorg: scala_langorg.scalalangorgPackage,
  scalasbtorg: scala_sbtorg.scalasbtorgPackage,
  scalewaycom: scalewaycom.scalewaycomPackage,
  schollzcom: schollzcom.schollzcomPackage,
  sconsorg: sconsorg.sconsorgPackage,
  scryerpl: scryerpl.scryerplPackage,
  sdkmanio: sdkmanio.sdkmanioPackage,
  seaweedfscom: seaweedfscom.seaweedfscomPackage,
  sentryio: sentryio.sentryioPackage,
  sfnet: sfnet.sfnetPackage,
  sfcgalorg: sfcgalorg.sfcgalorgPackage,
  sftpgocom: sftpgocom.sftpgocomPackage,
  shellchecknet: shellchecknet.shellchecknetPackage,
  sigstoredev: sigstoredev.sigstoredevPackage,
  simplesystemsorg: simplesystemsorg.simplesystemsorgPackage,
  singboxapp: sing_boxapp.singboxappPackage,
  skaffolddev: skaffolddev.skaffolddevPackage,
  smartmontoolsorg: smartmontoolsorg.smartmontoolsorgPackage,
  snapletdev: snapletdev.snapletdevPackage,
  sniffnetnet: sniffnetnet.sniffnetnetPackage,
  snykio: snykio.snykioPackage,
  solanacom: solanacom.solanacomPackage,
  soldeerxyz: soldeerxyz.soldeerxyzPackage,
  soliditylangorg: soliditylangorg.soliditylangorgPackage,
  sonarqubeorg: sonarqubeorg.sonarqubeorgPackage,
  sourceforgenet: sourceforgenet.sourceforgenetPackage,
  sourcewareorg: sourcewareorg.sourcewareorgPackage,
  soxrsourceforgenet: soxrsourceforgenet.soxrsourceforgenetPackage,
  spacetimedbcom: spacetimedbcom.spacetimedbcomPackage,
  spawnlink: spawnlink.spawnlinkPackage,
  speexorg: speexorg.speexorgPackage,
  sphinxdocorg: sphinx_docorg.sphinxdocorgPackage,
  sqlcdev: sqlcdev.sqlcdevPackage,
  sqlfluffcom: sqlfluffcom.sqlfluffcomPackage,
  sqliteorg: sqliteorg.sqliteorgPackage,
  squawkhqcom: squawkhqcom.squawkhqcomPackage,
  srtallianceorg: srtallianceorg.srtallianceorgPackage,
  sshxio: sshxio.sshxioPackage,
  starshiprs: starshiprs.starshiprsPackage,
  steampipeio: steampipeio.steampipeioPackage,
  stedolangithubio: stedolangithubio.stedolangithubioPackage,
  straceio: straceio.straceioPackage,
  streamlinkgithubio: streamlinkgithubio.streamlinkgithubioPackage,
  stripecom: stripecom.stripecomPackage,
  supabasecom: supabasecom.supabasecomPackage,
  surrealdbcom: surrealdbcom.surrealdbcomPackage,
  svenstarogithubio: svenstarogithubio.svenstarogithubioPackage,
  swaggerio: swaggerio.swaggerioPackage,
  swiftorg: swiftorg.swiftorgPackage,
  swigorg: swigorg.swigorgPackage,
  symfonycom: symfonycom.symfonycomPackage,
  sympyorg: sympyorg.sympyorgPackage,
  syncthingnet: syncthingnet.syncthingnetPackage,
  systemdio: systemdio.systemdioPackage,
  tagliborg: tagliborg.tagliborgPackage,
  tailcallrun: tailcallrun.tailcallrunPackage,
  tailwindcsscom: tailwindcsscom.tailwindcsscomPackage,
  taku910githubio: taku910githubio.taku910githubioPackage,
  talosdev: talosdev.talosdevPackage,
  taplotamasfedev: taplotamasfedev.taplotamasfedevPackage,
  tartrun: tartrun.tartrunPackage,
  taskfiledev: taskfiledev.taskfiledevPackage,
  tcllangorg: tcl_langorg.tcllangorgPackage,
  tcltk: tcltk.tcltkPackage,
  tcpdumporg: tcpdumporg.tcpdumporgPackage,
  tcshorg: tcshorg.tcshorgPackage,
  teaxyz: teaxyz.teaxyzPackage,
  tectonictypesettinggithubio: tectonic_typesettinggithubio.tectonictypesettinggithubioPackage,
  templguide: templguide.templguidePackage,
  temporalio: temporalio.temporalioPackage,
  terraformdocsio: terraform_docsio.terraformdocsioPackage,
  terraformio: terraformio.terraformioPackage,
  terragruntgruntworkio: terragruntgruntworkio.terragruntgruntworkioPackage,
  terratagio: terratagio.terratagioPackage,
  tesseractocrgithubio: tesseract_ocrgithubio.tesseractocrgithubioPackage,
  thekelleysorguk: thekelleysorguk.thekelleysorgukPackage,
  theoraorg: theoraorg.theoraorgPackage,
  thoughtworksgithubio: thoughtworksgithubio.thoughtworksgithubioPackage,
  thrysoeedk: thrysoeedk.thrysoeedkPackage,
  tidbytcom: tidbytcom.tidbytcomPackage,
  tiltdev: tiltdev.tiltdevPackage,
  tinybirdco: tinybirdco.tinybirdcoPackage,
  tinygoorg: tinygoorg.tinygoorgPackage,
  tldrsh: tldrsh.tldrshPackage,
  tlrdev: tlrdev.tlrdevPackage,
  tmateio: tmateio.tmateioPackage,
  toxwiki: toxwiki.toxwikiPackage,
  traefikio: traefikio.traefikioPackage,
  treesittergithubio: tree_sittergithubio.treesittergithubioPackage,
  trippyclirs: trippyclirs.trippyclirsPackage,
  trufflesecuritycom: trufflesecuritycom.trufflesecuritycomPackage,
  tsl0922githubio: tsl0922githubio.tsl0922githubioPackage,
  tuistio: tuistio.tuistioPackage,
  tukaaniorg: tukaaniorg.tukaaniorgPackage,
  tursotech: tursotech.tursotechPackage,
  typescriptlangorg: typescriptlangorg.typescriptlangorgPackage,
  typstapp: typstapp.typstappPackage,
  unboundnet: unboundnet.unboundnetPackage,
  undefined: undefined.undefinedPackage,
  unicodeorg: unicodeorg.unicodeorgPackage,
  unidataucaredu: unidataucaredu.unidataucareduPackage,
  unixodbcorg: unixodbcorg.unixodbcorgPackage,
  upliftcidev: upliftcidev.upliftcidevPackage,
  upxgithubio: upxgithubio.upxgithubioPackage,
  uriparsergithubio: uriparsergithubio.uriparsergithubioPackage,
  valesh: valesh.valeshPackage,
  valkeyio: valkeyio.valkeyioPackage,
  vamppluginsorg: vamp_pluginsorg.vamppluginsorgPackage,
  vannaai: vannaai.vannaaiPackage,
  vapoursynthcom: vapoursynthcom.vapoursynthcomPackage,
  vaultprojectio: vaultprojectio.vaultprojectioPackage,
  vclustercom: vclustercom.vclustercomPackage,
  vektragithubio: vektragithubio.vektragithubioPackage,
  veleroio: veleroio.veleroioPackage,
  veracodecom: veracodecom.veracodecomPackage,
  vercelcom: vercelcom.vercelcomPackage,
  versitycom: versitycom.versitycomPackage,
  viaductai: viaductai.viaductaiPackage,
  viaductaiksops: viaductai_ksops.viaductaiksopsPackage,
  videolanorg: videolanorg.videolanorgPackage,
  vimorg: vimorg.vimorgPackage,
  virtualenvpypaio: virtualenvpypaio.virtualenvpypaioPackage,
  virtualsquareorg: virtualsquareorg.virtualsquareorgPackage,
  vitejsdev: vitejsdev.vitejsdevPackage,
  vlangio: vlangio.vlangioPackage,
  voltash: voltash.voltashPackage,
  wailsio: wailsio.wailsioPackage,
  wait4xdev: wait4xdev.wait4xdevPackage,
  wasmerio: wasmerio.wasmerioPackage,
  watchexecgithubio: watchexecgithubio.watchexecgithubioPackage,
  waterlanhomexs4allnl: waterlanhomexs4allnl.waterlanhomexs4allnlPackage,
  wavpackcom: wavpackcom.wavpackcomPackage,
  waylandfreedesktoporg: waylandfreedesktoporg.waylandfreedesktoporgPackage,
  waylandfreedesktoporg: waylandfreedesktoporg.waylandfreedesktoporgPackage,
  webmprojectorg: webmprojectorg.webmprojectorgPackage,
  werfio: werfio.werfioPackage,
  wezfurlongorg: wezfurlongorg.wezfurlongorgPackage,
  wilfredmeuk: wilfredmeuk.wilfredmeukPackage,
  wimlibnet: wimlibnet.wimlibnetPackage,
  wiresharkorg: wiresharkorg.wiresharkorgPackage,
  wixcom: wixcom.wixcomPackage,
  wkentarogithubio: wkentarogithubio.wkentarogithubioPackage,
  wpewebkitorg: wpewebkitorg.wpewebkitorgPackage,
  wundergraphcom: wundergraphcom.wundergraphcomPackage,
  wxwidgetsorg: wxwidgetsorg.wxwidgetsorgPackage,
  xorg: xorg.xorgPackage,
  xorgxscrnsaver: xorg_xscrnsaver.xorgxscrnsaverPackage,
  xcfiledev: xcfiledev.xcfiledevPackage,
  xercesapacheorg: xercesapacheorg.xercesapacheorgPackage,
  xiphorg: xiphorg.xiphorgPackage,
  xkbcommonorg: xkbcommonorg.xkbcommonorgPackage,
  xplrdev: xplrdev.xplrdevPackage,
  xpraorg: xpraorg.xpraorgPackage,
  xtlsgithubio: xtlsgithubio.xtlsgithubioPackage,
  xvidcom: xvidcom.xvidcomPackage,
  yadmio: yadmio.yadmioPackage,
  yarnpkgcom: yarnpkgcom.yarnpkgcomPackage,
  yasmtortallnet: yasmtortallnet.yasmtortallnetPackage,
  youtubedlorg: youtube_dlorg.youtubedlorgPackage,
  ytdlporg: yt_dlporg.ytdlporgPackage,
  yuigithubio: yuigithubio.yuigithubioPackage,
  zarfdev: zarfdev.zarfdevPackage,
  zeromqorg: zeromqorg.zeromqorgPackage,
  ziglangorg: ziglangorg.ziglangorgPackage,
  zlibnet: zlibnet.zlibnetPackage,
  zrokio: zrokio.zrokioPackage,
  zshsourceforgeio: zshsourceforgeio.zshsourceforgeioPackage,
}
