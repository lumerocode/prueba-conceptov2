function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-B_IFo5Cl.js","assets/AboutView-BkpE43Yq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
let _export_sfc, importShared;
let __tla = (async ()=>{
    true && (function polyfill() {
        const relList = document.createElement("link").relList;
        if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
        }
        for (const link of document.querySelectorAll('link[rel="modulepreload"]')){
            processPreload(link);
        }
        new MutationObserver((mutations)=>{
            for (const mutation of mutations){
                if (mutation.type !== "childList") {
                    continue;
                }
                for (const node of mutation.addedNodes){
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                }
            }
        }).observe(document, {
            childList: true,
            subtree: true
        });
        function getFetchOpts(link) {
            const fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
            else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
            else fetchOpts.credentials = "same-origin";
            return fetchOpts;
        }
        function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            const fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
        }
    }());
    const scriptRel = "modulepreload";
    const assetsURL = function(dep) {
        return "/" + dep;
    };
    const seen = {};
    const __vitePreload = function preload(baseModule, deps, importerUrl) {
        let promise = Promise.resolve();
        if (true && deps && deps.length > 0) {
            const links = document.getElementsByTagName("link");
            const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
            const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
            promise = Promise.all(deps.map((dep)=>{
                dep = assetsURL(dep);
                if (dep in seen) return;
                seen[dep] = true;
                const isCss = dep.endsWith(".css");
                const cssSelector = isCss ? '[rel="stylesheet"]' : "";
                const isBaseRelative = !!importerUrl;
                if (isBaseRelative) {
                    for(let i = links.length - 1; i >= 0; i--){
                        const link = links[i];
                        if (link.href === dep && (!isCss || link.rel === "stylesheet")) {
                            return;
                        }
                    }
                } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                    return;
                }
                const link = document.createElement("link");
                link.rel = isCss ? "stylesheet" : scriptRel;
                if (!isCss) {
                    link.as = "script";
                    link.crossOrigin = "";
                }
                link.href = dep;
                if (cspNonce) {
                    link.setAttribute("nonce", cspNonce);
                }
                document.head.appendChild(link);
                if (isCss) {
                    return new Promise((res, rej)=>{
                        link.addEventListener("load", res);
                        link.addEventListener("error", ()=>rej(new Error(`Unable to preload CSS for ${dep}`)));
                    });
                }
            }));
        }
        return promise.then(()=>baseModule()).catch((err)=>{
            const e = new Event("vite:preloadError", {
                cancelable: true
            });
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
                throw err;
            }
        });
    };
    const buildIdentifier = "[0-9A-Za-z-]+";
    const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
    const numericIdentifier = "0|[1-9]\\d*";
    const numericIdentifierLoose = "[0-9]+";
    const nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
    const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
    const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
    const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
    const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
    const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
    const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
    const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
    const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
    const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
    const gtlt = "((?:<|>)?=?)";
    const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
    const loneTilde = "(?:~>?)";
    const tildeTrim = `(\\s*)${loneTilde}\\s+`;
    const loneCaret = "(?:\\^)";
    const caretTrim = `(\\s*)${loneCaret}\\s+`;
    const star = "(<|>)?=?\\s*\\*";
    const caret = `^${loneCaret}${xRangePlain}$`;
    const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
    const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
    const tilde = `^${loneTilde}${xRangePlain}$`;
    const xRange = `^${gtlt}\\s*${xRangePlain}$`;
    const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
    const gte0 = "^\\s*>=\\s*0.0.0\\s*$";
    function parseRegex(source) {
        return new RegExp(source);
    }
    function isXVersion(version) {
        return !version || version.toLowerCase() === "x" || version === "*";
    }
    function pipe(...fns) {
        return (x)=>{
            return fns.reduce((v, f)=>f(v), x);
        };
    }
    function extractComparator(comparatorString) {
        return comparatorString.match(parseRegex(comparator));
    }
    function combineVersion(major, minor, patch, preRelease2) {
        const mainVersion2 = `${major}.${minor}.${patch}`;
        if (preRelease2) {
            return `${mainVersion2}-${preRelease2}`;
        }
        return mainVersion2;
    }
    function parseHyphen(range) {
        return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{
            if (isXVersion(fromMajor)) {
                from = "";
            } else if (isXVersion(fromMinor)) {
                from = `>=${fromMajor}.0.0`;
            } else if (isXVersion(fromPatch)) {
                from = `>=${fromMajor}.${fromMinor}.0`;
            } else {
                from = `>=${from}`;
            }
            if (isXVersion(toMajor)) {
                to = "";
            } else if (isXVersion(toMinor)) {
                to = `<${+toMajor + 1}.0.0-0`;
            } else if (isXVersion(toPatch)) {
                to = `<${toMajor}.${+toMinor + 1}.0-0`;
            } else if (toPreRelease) {
                to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
            } else {
                to = `<=${to}`;
            }
            return `${from} ${to}`.trim();
        });
    }
    function parseComparatorTrim(range) {
        return range.replace(parseRegex(comparatorTrim), "$1$2$3");
    }
    function parseTildeTrim(range) {
        return range.replace(parseRegex(tildeTrim), "$1~");
    }
    function parseCaretTrim(range) {
        return range.replace(parseRegex(caretTrim), "$1^");
    }
    function parseCarets(range) {
        return range.trim().split(/\s+/).map((rangeVersion)=>{
            return rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease2)=>{
                if (isXVersion(major)) {
                    return "";
                } else if (isXVersion(minor)) {
                    return `>=${major}.0.0 <${+major + 1}.0.0-0`;
                } else if (isXVersion(patch)) {
                    if (major === "0") {
                        return `>=${major}.${minor}.0 <${major}.${+minor + 1}.0-0`;
                    } else {
                        return `>=${major}.${minor}.0 <${+major + 1}.0.0-0`;
                    }
                } else if (preRelease2) {
                    if (major === "0") {
                        if (minor === "0") {
                            return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${minor}.${+patch + 1}-0`;
                        } else {
                            return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${+minor + 1}.0-0`;
                        }
                    } else {
                        return `>=${major}.${minor}.${patch}-${preRelease2} <${+major + 1}.0.0-0`;
                    }
                } else {
                    if (major === "0") {
                        if (minor === "0") {
                            return `>=${major}.${minor}.${patch} <${major}.${minor}.${+patch + 1}-0`;
                        } else {
                            return `>=${major}.${minor}.${patch} <${major}.${+minor + 1}.0-0`;
                        }
                    }
                    return `>=${major}.${minor}.${patch} <${+major + 1}.0.0-0`;
                }
            });
        }).join(" ");
    }
    function parseTildes(range) {
        return range.trim().split(/\s+/).map((rangeVersion)=>{
            return rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease2)=>{
                if (isXVersion(major)) {
                    return "";
                } else if (isXVersion(minor)) {
                    return `>=${major}.0.0 <${+major + 1}.0.0-0`;
                } else if (isXVersion(patch)) {
                    return `>=${major}.${minor}.0 <${major}.${+minor + 1}.0-0`;
                } else if (preRelease2) {
                    return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${+minor + 1}.0-0`;
                }
                return `>=${major}.${minor}.${patch} <${major}.${+minor + 1}.0-0`;
            });
        }).join(" ");
    }
    function parseXRanges(range) {
        return range.split(/\s+/).map((rangeVersion)=>{
            return rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt2, major, minor, patch, preRelease2)=>{
                const isXMajor = isXVersion(major);
                const isXMinor = isXMajor || isXVersion(minor);
                const isXPatch = isXMinor || isXVersion(patch);
                if (gtlt2 === "=" && isXPatch) {
                    gtlt2 = "";
                }
                preRelease2 = "";
                if (isXMajor) {
                    if (gtlt2 === ">" || gtlt2 === "<") {
                        return "<0.0.0-0";
                    } else {
                        return "*";
                    }
                } else if (gtlt2 && isXPatch) {
                    if (isXMinor) {
                        minor = 0;
                    }
                    patch = 0;
                    if (gtlt2 === ">") {
                        gtlt2 = ">=";
                        if (isXMinor) {
                            major = +major + 1;
                            minor = 0;
                            patch = 0;
                        } else {
                            minor = +minor + 1;
                            patch = 0;
                        }
                    } else if (gtlt2 === "<=") {
                        gtlt2 = "<";
                        if (isXMinor) {
                            major = +major + 1;
                        } else {
                            minor = +minor + 1;
                        }
                    }
                    if (gtlt2 === "<") {
                        preRelease2 = "-0";
                    }
                    return `${gtlt2 + major}.${minor}.${patch}${preRelease2}`;
                } else if (isXMinor) {
                    return `>=${major}.0.0${preRelease2} <${+major + 1}.0.0-0`;
                } else if (isXPatch) {
                    return `>=${major}.${minor}.0${preRelease2} <${major}.${+minor + 1}.0-0`;
                }
                return ret;
            });
        }).join(" ");
    }
    function parseStar(range) {
        return range.trim().replace(parseRegex(star), "");
    }
    function parseGTE0(comparatorString) {
        return comparatorString.trim().replace(parseRegex(gte0), "");
    }
    function compareAtom(rangeAtom, versionAtom) {
        rangeAtom = +rangeAtom || rangeAtom;
        versionAtom = +versionAtom || versionAtom;
        if (rangeAtom > versionAtom) {
            return 1;
        }
        if (rangeAtom === versionAtom) {
            return 0;
        }
        return -1;
    }
    function comparePreRelease(rangeAtom, versionAtom) {
        const { preRelease: rangePreRelease } = rangeAtom;
        const { preRelease: versionPreRelease } = versionAtom;
        if (rangePreRelease === void 0 && !!versionPreRelease) {
            return 1;
        }
        if (!!rangePreRelease && versionPreRelease === void 0) {
            return -1;
        }
        if (rangePreRelease === void 0 && versionPreRelease === void 0) {
            return 0;
        }
        for(let i = 0, n = rangePreRelease.length; i <= n; i++){
            const rangeElement = rangePreRelease[i];
            const versionElement = versionPreRelease[i];
            if (rangeElement === versionElement) {
                continue;
            }
            if (rangeElement === void 0 && versionElement === void 0) {
                return 0;
            }
            if (!rangeElement) {
                return 1;
            }
            if (!versionElement) {
                return -1;
            }
            return compareAtom(rangeElement, versionElement);
        }
        return 0;
    }
    function compareVersion(rangeAtom, versionAtom) {
        return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
    }
    function eq(rangeAtom, versionAtom) {
        return rangeAtom.version === versionAtom.version;
    }
    function compare(rangeAtom, versionAtom) {
        switch(rangeAtom.operator){
            case "":
            case "=":
                return eq(rangeAtom, versionAtom);
            case ">":
                return compareVersion(rangeAtom, versionAtom) < 0;
            case ">=":
                return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
            case "<":
                return compareVersion(rangeAtom, versionAtom) > 0;
            case "<=":
                return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
            case void 0:
                {
                    return true;
                }
            default:
                return false;
        }
    }
    function parseComparatorString(range) {
        return pipe(parseCarets, parseTildes, parseXRanges, parseStar)(range);
    }
    function parseRange(range) {
        return pipe(parseHyphen, parseComparatorTrim, parseTildeTrim, parseCaretTrim)(range.trim()).split(/\s+/).join(" ");
    }
    function satisfy(version, range) {
        if (!version) {
            return false;
        }
        const parsedRange = parseRange(range);
        const parsedComparator = parsedRange.split(" ").map((rangeVersion)=>parseComparatorString(rangeVersion)).join(" ");
        const comparators = parsedComparator.split(/\s+/).map((comparator2)=>parseGTE0(comparator2));
        const extractedVersion = extractComparator(version);
        if (!extractedVersion) {
            return false;
        }
        const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
        const versionAtom = {
            operator: versionOperator,
            version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
            major: versionMajor,
            minor: versionMinor,
            patch: versionPatch,
            preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split(".")
        };
        for (const comparator2 of comparators){
            const extractedComparator = extractComparator(comparator2);
            if (!extractedComparator) {
                return false;
            }
            const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
            const rangeAtom = {
                operator: rangeOperator,
                version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
                major: rangeMajor,
                minor: rangeMinor,
                patch: rangePatch,
                preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split(".")
            };
            if (!compare(rangeAtom, versionAtom)) {
                return false;
            }
        }
        return true;
    }
    const moduleMap = {
        "vue": {
            get: ()=>()=>__federation_import(new URL("__federation_shared_vue-BGBWOH3O.js", import.meta.url).href),
            import: true
        }
    };
    const moduleCache = Object.create(null);
    importShared = async function(name, shareScope = "default") {
        return moduleCache[name] ? new Promise((r)=>r(moduleCache[name])) : (await getSharedFromRuntime(name, shareScope)) || getSharedFromLocal(name);
    };
    async function __federation_import(name) {
        return __vitePreload(()=>import(name).then(async (m)=>{
                await m.__tla;
                return m;
            }), true ? [] : void 0);
    }
    async function getSharedFromRuntime(name, shareScope) {
        let module = null;
        if (globalThis?.__federation_shared__?.[shareScope]?.[name]) {
            const versionObj = globalThis.__federation_shared__[shareScope][name];
            const versionKey = Object.keys(versionObj)[0];
            const versionValue = Object.values(versionObj)[0];
            if (moduleMap[name]?.requiredVersion) {
                if (satisfy(versionKey, moduleMap[name].requiredVersion)) {
                    module = await (await versionValue.get())();
                } else {
                    console.log(`provider support ${name}(${versionKey}) is not satisfied requiredVersion(\${moduleMap[name].requiredVersion})`);
                }
            } else {
                module = await (await versionValue.get())();
            }
        }
        if (module) {
            return flattenModule(module, name);
        }
    }
    async function getSharedFromLocal(name) {
        if (moduleMap[name]?.import) {
            let module = await (await moduleMap[name].get())();
            return flattenModule(module, name);
        } else {
            console.error(`consumer config import=false,so cant use callback shared module`);
        }
    }
    function flattenModule(module, name) {
        if (typeof module.default === "function") {
            Object.keys(module).forEach((key)=>{
                if (key !== "default") {
                    module.default[key] = module[key];
                }
            });
            moduleCache[name] = module.default;
            return module.default;
        }
        if (module.default) module = Object.assign({}, module.default, module);
        moduleCache[name] = module;
        return module;
    }
    const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
    const { getCurrentInstance, inject, onUnmounted, onDeactivated, onActivated, computed, unref, watchEffect, defineComponent, reactive, h, provide, ref, watch, shallowRef, shallowReactive, nextTick } = await importShared("vue");
    const isBrowser = typeof document !== "undefined";
    function isESModule(obj) {
        return obj.__esModule || obj[Symbol.toStringTag] === "Module";
    }
    const assign = Object.assign;
    function applyToParams(fn, params) {
        const newParams = {};
        for(const key in params){
            const value = params[key];
            newParams[key] = isArray(value) ? value.map(fn) : fn(value);
        }
        return newParams;
    }
    const noop = ()=>{};
    const isArray = Array.isArray;
    const HASH_RE = /#/g;
    const AMPERSAND_RE = /&/g;
    const SLASH_RE = /\//g;
    const EQUAL_RE = /=/g;
    const IM_RE = /\?/g;
    const PLUS_RE = /\+/g;
    const ENC_BRACKET_OPEN_RE = /%5B/g;
    const ENC_BRACKET_CLOSE_RE = /%5D/g;
    const ENC_CARET_RE = /%5E/g;
    const ENC_BACKTICK_RE = /%60/g;
    const ENC_CURLY_OPEN_RE = /%7B/g;
    const ENC_PIPE_RE = /%7C/g;
    const ENC_CURLY_CLOSE_RE = /%7D/g;
    const ENC_SPACE_RE = /%20/g;
    function commonEncode(text) {
        return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
    }
    function encodeHash(text) {
        return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
    }
    function encodeQueryValue(text) {
        return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
    }
    function encodeQueryKey(text) {
        return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
    }
    function encodePath(text) {
        return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
    }
    function encodeParam(text) {
        return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
    }
    function decode(text) {
        try {
            return decodeURIComponent("" + text);
        } catch (err) {}
        return "" + text;
    }
    const TRAILING_SLASH_RE = /\/$/;
    const removeTrailingSlash = (path)=>path.replace(TRAILING_SLASH_RE, "");
    function parseURL(parseQuery2, location2, currentLocation = "/") {
        let path, query = {}, searchString = "", hash = "";
        const hashPos = location2.indexOf("#");
        let searchPos = location2.indexOf("?");
        if (hashPos < searchPos && hashPos >= 0) {
            searchPos = -1;
        }
        if (searchPos > -1) {
            path = location2.slice(0, searchPos);
            searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
            query = parseQuery2(searchString);
        }
        if (hashPos > -1) {
            path = path || location2.slice(0, hashPos);
            hash = location2.slice(hashPos, location2.length);
        }
        path = resolveRelativePath(path != null ? path : location2, currentLocation);
        return {
            fullPath: path + (searchString && "?") + searchString + hash,
            path,
            query,
            hash: decode(hash)
        };
    }
    function stringifyURL(stringifyQuery2, location2) {
        const query = location2.query ? stringifyQuery2(location2.query) : "";
        return location2.path + (query && "?") + query + (location2.hash || "");
    }
    function stripBase(pathname, base) {
        if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
        return pathname.slice(base.length) || "/";
    }
    function isSameRouteLocation(stringifyQuery2, a, b) {
        const aLastIndex = a.matched.length - 1;
        const bLastIndex = b.matched.length - 1;
        return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
    }
    function isSameRouteRecord(a, b) {
        return (a.aliasOf || a) === (b.aliasOf || b);
    }
    function isSameRouteLocationParams(a, b) {
        if (Object.keys(a).length !== Object.keys(b).length) return false;
        for(const key in a){
            if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
        }
        return true;
    }
    function isSameRouteLocationParamsValue(a, b) {
        return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
    }
    function isEquivalentArray(a, b) {
        return isArray(b) ? a.length === b.length && a.every((value, i)=>value === b[i]) : a.length === 1 && a[0] === b;
    }
    function resolveRelativePath(to, from) {
        if (to.startsWith("/")) return to;
        if (!to) return from;
        const fromSegments = from.split("/");
        const toSegments = to.split("/");
        const lastToSegment = toSegments[toSegments.length - 1];
        if (lastToSegment === ".." || lastToSegment === ".") {
            toSegments.push("");
        }
        let position = fromSegments.length - 1;
        let toPosition;
        let segment;
        for(toPosition = 0; toPosition < toSegments.length; toPosition++){
            segment = toSegments[toPosition];
            if (segment === ".") continue;
            if (segment === "..") {
                if (position > 1) position--;
            } else break;
        }
        return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
    }
    var NavigationType;
    (function(NavigationType2) {
        NavigationType2["pop"] = "pop";
        NavigationType2["push"] = "push";
    })(NavigationType || (NavigationType = {}));
    var NavigationDirection;
    (function(NavigationDirection2) {
        NavigationDirection2["back"] = "back";
        NavigationDirection2["forward"] = "forward";
        NavigationDirection2["unknown"] = "";
    })(NavigationDirection || (NavigationDirection = {}));
    function normalizeBase(base) {
        if (!base) {
            if (isBrowser) {
                const baseEl = document.querySelector("base");
                base = baseEl && baseEl.getAttribute("href") || "/";
                base = base.replace(/^\w+:\/\/[^\/]+/, "");
            } else {
                base = "/";
            }
        }
        if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
        return removeTrailingSlash(base);
    }
    const BEFORE_HASH_RE = /^[^#]+#/;
    function createHref(base, location2) {
        return base.replace(BEFORE_HASH_RE, "#") + location2;
    }
    function getElementPosition(el, offset) {
        const docRect = document.documentElement.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        return {
            behavior: offset.behavior,
            left: elRect.left - docRect.left - (offset.left || 0),
            top: elRect.top - docRect.top - (offset.top || 0)
        };
    }
    const computeScrollPosition = ()=>({
            left: window.scrollX,
            top: window.scrollY
        });
    function scrollToPosition(position) {
        let scrollToOptions;
        if ("el" in position) {
            const positionEl = position.el;
            const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
            const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
            if (!el) {
                return;
            }
            scrollToOptions = getElementPosition(el, position);
        } else {
            scrollToOptions = position;
        }
        if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
        else {
            window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
        }
    }
    function getScrollKey(path, delta) {
        const position = history.state ? history.state.position - delta : -1;
        return position + path;
    }
    const scrollPositions = new Map();
    function saveScrollPosition(key, scrollPosition) {
        scrollPositions.set(key, scrollPosition);
    }
    function getSavedScrollPosition(key) {
        const scroll = scrollPositions.get(key);
        scrollPositions.delete(key);
        return scroll;
    }
    let createBaseLocation = ()=>location.protocol + "//" + location.host;
    function createCurrentLocation(base, location2) {
        const { pathname, search, hash } = location2;
        const hashPos = base.indexOf("#");
        if (hashPos > -1) {
            let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
            let pathFromHash = hash.slice(slicePos);
            if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
            return stripBase(pathFromHash, "");
        }
        const path = stripBase(pathname, base);
        return path + search + hash;
    }
    function useHistoryListeners(base, historyState, currentLocation, replace) {
        let listeners = [];
        let teardowns = [];
        let pauseState = null;
        const popStateHandler = ({ state })=>{
            const to = createCurrentLocation(base, location);
            const from = currentLocation.value;
            const fromState = historyState.value;
            let delta = 0;
            if (state) {
                currentLocation.value = to;
                historyState.value = state;
                if (pauseState && pauseState === from) {
                    pauseState = null;
                    return;
                }
                delta = fromState ? state.position - fromState.position : 0;
            } else {
                replace(to);
            }
            listeners.forEach((listener)=>{
                listener(currentLocation.value, from, {
                    delta,
                    type: NavigationType.pop,
                    direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
                });
            });
        };
        function pauseListeners() {
            pauseState = currentLocation.value;
        }
        function listen(callback) {
            listeners.push(callback);
            const teardown = ()=>{
                const index = listeners.indexOf(callback);
                if (index > -1) listeners.splice(index, 1);
            };
            teardowns.push(teardown);
            return teardown;
        }
        function beforeUnloadListener() {
            const { history: history2 } = window;
            if (!history2.state) return;
            history2.replaceState(assign({}, history2.state, {
                scroll: computeScrollPosition()
            }), "");
        }
        function destroy() {
            for (const teardown of teardowns)teardown();
            teardowns = [];
            window.removeEventListener("popstate", popStateHandler);
            window.removeEventListener("beforeunload", beforeUnloadListener);
        }
        window.addEventListener("popstate", popStateHandler);
        window.addEventListener("beforeunload", beforeUnloadListener, {
            passive: true
        });
        return {
            pauseListeners,
            listen,
            destroy
        };
    }
    function buildState(back, current, forward, replaced = false, computeScroll = false) {
        return {
            back,
            current,
            forward,
            replaced,
            position: window.history.length,
            scroll: computeScroll ? computeScrollPosition() : null
        };
    }
    function useHistoryStateNavigation(base) {
        const { history: history2, location: location2 } = window;
        const currentLocation = {
            value: createCurrentLocation(base, location2)
        };
        const historyState = {
            value: history2.state
        };
        if (!historyState.value) {
            changeLocation(currentLocation.value, {
                back: null,
                current: currentLocation.value,
                forward: null,
                position: history2.length - 1,
                replaced: true,
                scroll: null
            }, true);
        }
        function changeLocation(to, state, replace2) {
            const hashIndex = base.indexOf("#");
            const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
            try {
                history2[replace2 ? "replaceState" : "pushState"](state, "", url);
                historyState.value = state;
            } catch (err) {
                {
                    console.error(err);
                }
                location2[replace2 ? "replace" : "assign"](url);
            }
        }
        function replace(to, data) {
            const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, {
                position: historyState.value.position
            });
            changeLocation(to, state, true);
            currentLocation.value = to;
        }
        function push(to, data) {
            const currentState = assign({}, historyState.value, history2.state, {
                forward: to,
                scroll: computeScrollPosition()
            });
            changeLocation(currentState.current, currentState, true);
            const state = assign({}, buildState(currentLocation.value, to, null), {
                position: currentState.position + 1
            }, data);
            changeLocation(to, state, false);
            currentLocation.value = to;
        }
        return {
            location: currentLocation,
            state: historyState,
            push,
            replace
        };
    }
    function createWebHistory(base) {
        base = normalizeBase(base);
        const historyNavigation = useHistoryStateNavigation(base);
        const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
        function go(delta, triggerListeners = true) {
            if (!triggerListeners) historyListeners.pauseListeners();
            history.go(delta);
        }
        const routerHistory = assign({
            location: "",
            base,
            go,
            createHref: createHref.bind(null, base)
        }, historyNavigation, historyListeners);
        Object.defineProperty(routerHistory, "location", {
            enumerable: true,
            get: ()=>historyNavigation.location.value
        });
        Object.defineProperty(routerHistory, "state", {
            enumerable: true,
            get: ()=>historyNavigation.state.value
        });
        return routerHistory;
    }
    function isRouteLocation(route) {
        return typeof route === "string" || route && typeof route === "object";
    }
    function isRouteName(name) {
        return typeof name === "string" || typeof name === "symbol";
    }
    const START_LOCATION_NORMALIZED = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    };
    const NavigationFailureSymbol = Symbol("");
    var NavigationFailureType;
    (function(NavigationFailureType2) {
        NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
        NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
        NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
    })(NavigationFailureType || (NavigationFailureType = {}));
    function createRouterError(type, params) {
        {
            return assign(new Error(), {
                type,
                [NavigationFailureSymbol]: true
            }, params);
        }
    }
    function isNavigationFailure(error, type) {
        return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
    }
    const BASE_PARAM_PATTERN = "[^/]+?";
    const BASE_PATH_PARSER_OPTIONS = {
        sensitive: false,
        strict: false,
        start: true,
        end: true
    };
    const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
    function tokensToParser(segments, extraOptions) {
        const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
        const score = [];
        let pattern = options.start ? "^" : "";
        const keys = [];
        for (const segment of segments){
            const segmentScores = segment.length ? [] : [
                90
            ];
            if (options.strict && !segment.length) pattern += "/";
            for(let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++){
                const token = segment[tokenIndex];
                let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
                if (token.type === 0) {
                    if (!tokenIndex) pattern += "/";
                    pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
                    subSegmentScore += 40;
                } else if (token.type === 1) {
                    const { value, repeatable, optional, regexp } = token;
                    keys.push({
                        name: value,
                        repeatable,
                        optional
                    });
                    const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
                    if (re2 !== BASE_PARAM_PATTERN) {
                        subSegmentScore += 10;
                        try {
                            new RegExp(`(${re2})`);
                        } catch (err) {
                            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
                        }
                    }
                    let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
                    if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
                    if (optional) subPattern += "?";
                    pattern += subPattern;
                    subSegmentScore += 20;
                    if (optional) subSegmentScore += -8;
                    if (repeatable) subSegmentScore += -20;
                    if (re2 === ".*") subSegmentScore += -50;
                }
                segmentScores.push(subSegmentScore);
            }
            score.push(segmentScores);
        }
        if (options.strict && options.end) {
            const i = score.length - 1;
            score[i][score[i].length - 1] += 0.7000000000000001;
        }
        if (!options.strict) pattern += "/?";
        if (options.end) pattern += "$";
        else if (options.strict) pattern += "(?:/|$)";
        const re = new RegExp(pattern, options.sensitive ? "" : "i");
        function parse(path) {
            const match = path.match(re);
            const params = {};
            if (!match) return null;
            for(let i = 1; i < match.length; i++){
                const value = match[i] || "";
                const key = keys[i - 1];
                params[key.name] = value && key.repeatable ? value.split("/") : value;
            }
            return params;
        }
        function stringify(params) {
            let path = "";
            let avoidDuplicatedSlash = false;
            for (const segment of segments){
                if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
                avoidDuplicatedSlash = false;
                for (const token of segment){
                    if (token.type === 0) {
                        path += token.value;
                    } else if (token.type === 1) {
                        const { value, repeatable, optional } = token;
                        const param = value in params ? params[value] : "";
                        if (isArray(param) && !repeatable) {
                            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                        }
                        const text = isArray(param) ? param.join("/") : param;
                        if (!text) {
                            if (optional) {
                                if (segment.length < 2) {
                                    if (path.endsWith("/")) path = path.slice(0, -1);
                                    else avoidDuplicatedSlash = true;
                                }
                            } else throw new Error(`Missing required param "${value}"`);
                        }
                        path += text;
                    }
                }
            }
            return path || "/";
        }
        return {
            re,
            score,
            keys,
            parse,
            stringify
        };
    }
    function compareScoreArray(a, b) {
        let i = 0;
        while(i < a.length && i < b.length){
            const diff = b[i] - a[i];
            if (diff) return diff;
            i++;
        }
        if (a.length < b.length) {
            return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
        } else if (a.length > b.length) {
            return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
        }
        return 0;
    }
    function comparePathParserScore(a, b) {
        let i = 0;
        const aScore = a.score;
        const bScore = b.score;
        while(i < aScore.length && i < bScore.length){
            const comp = compareScoreArray(aScore[i], bScore[i]);
            if (comp) return comp;
            i++;
        }
        if (Math.abs(bScore.length - aScore.length) === 1) {
            if (isLastScoreNegative(aScore)) return 1;
            if (isLastScoreNegative(bScore)) return -1;
        }
        return bScore.length - aScore.length;
    }
    function isLastScoreNegative(score) {
        const last = score[score.length - 1];
        return score.length > 0 && last[last.length - 1] < 0;
    }
    const ROOT_TOKEN = {
        type: 0,
        value: ""
    };
    const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
    function tokenizePath(path) {
        if (!path) return [
            []
        ];
        if (path === "/") return [
            [
                ROOT_TOKEN
            ]
        ];
        if (!path.startsWith("/")) {
            throw new Error(`Invalid path "${path}"`);
        }
        function crash(message) {
            throw new Error(`ERR (${state})/"${buffer}": ${message}`);
        }
        let state = 0;
        let previousState = state;
        const tokens = [];
        let segment;
        function finalizeSegment() {
            if (segment) tokens.push(segment);
            segment = [];
        }
        let i = 0;
        let char;
        let buffer = "";
        let customRe = "";
        function consumeBuffer() {
            if (!buffer) return;
            if (state === 0) {
                segment.push({
                    type: 0,
                    value: buffer
                });
            } else if (state === 1 || state === 2 || state === 3) {
                if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
                segment.push({
                    type: 1,
                    value: buffer,
                    regexp: customRe,
                    repeatable: char === "*" || char === "+",
                    optional: char === "*" || char === "?"
                });
            } else {
                crash("Invalid state to consume buffer");
            }
            buffer = "";
        }
        function addCharToBuffer() {
            buffer += char;
        }
        while(i < path.length){
            char = path[i++];
            if (char === "\\" && state !== 2) {
                previousState = state;
                state = 4;
                continue;
            }
            switch(state){
                case 0:
                    if (char === "/") {
                        if (buffer) {
                            consumeBuffer();
                        }
                        finalizeSegment();
                    } else if (char === ":") {
                        consumeBuffer();
                        state = 1;
                    } else {
                        addCharToBuffer();
                    }
                    break;
                case 4:
                    addCharToBuffer();
                    state = previousState;
                    break;
                case 1:
                    if (char === "(") {
                        state = 2;
                    } else if (VALID_PARAM_RE.test(char)) {
                        addCharToBuffer();
                    } else {
                        consumeBuffer();
                        state = 0;
                        if (char !== "*" && char !== "?" && char !== "+") i--;
                    }
                    break;
                case 2:
                    if (char === ")") {
                        if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
                        else state = 3;
                    } else {
                        customRe += char;
                    }
                    break;
                case 3:
                    consumeBuffer();
                    state = 0;
                    if (char !== "*" && char !== "?" && char !== "+") i--;
                    customRe = "";
                    break;
                default:
                    crash("Unknown state");
                    break;
            }
        }
        if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
        consumeBuffer();
        finalizeSegment();
        return tokens;
    }
    function createRouteRecordMatcher(record, parent, options) {
        const parser = tokensToParser(tokenizePath(record.path), options);
        const matcher = assign(parser, {
            record,
            parent,
            children: [],
            alias: []
        });
        if (parent) {
            if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
        }
        return matcher;
    }
    function createRouterMatcher(routes, globalOptions) {
        const matchers = [];
        const matcherMap = new Map();
        globalOptions = mergeOptions({
            strict: false,
            end: true,
            sensitive: false
        }, globalOptions);
        function getRecordMatcher(name) {
            return matcherMap.get(name);
        }
        function addRoute(record, parent, originalRecord) {
            const isRootAdd = !originalRecord;
            const mainNormalizedRecord = normalizeRouteRecord(record);
            mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
            const options = mergeOptions(globalOptions, record);
            const normalizedRecords = [
                mainNormalizedRecord
            ];
            if ("alias" in record) {
                const aliases = typeof record.alias === "string" ? [
                    record.alias
                ] : record.alias;
                for (const alias of aliases){
                    normalizedRecords.push(assign({}, mainNormalizedRecord, {
                        components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
                        path: alias,
                        aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
                    }));
                }
            }
            let matcher;
            let originalMatcher;
            for (const normalizedRecord of normalizedRecords){
                const { path } = normalizedRecord;
                if (parent && path[0] !== "/") {
                    const parentPath = parent.record.path;
                    const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
                    normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
                }
                matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
                if (originalRecord) {
                    originalRecord.alias.push(matcher);
                } else {
                    originalMatcher = originalMatcher || matcher;
                    if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
                    if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
                }
                if (mainNormalizedRecord.children) {
                    const children = mainNormalizedRecord.children;
                    for(let i = 0; i < children.length; i++){
                        addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                    }
                }
                originalRecord = originalRecord || matcher;
                if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
                    insertMatcher(matcher);
                }
            }
            return originalMatcher ? ()=>{
                removeRoute(originalMatcher);
            } : noop;
        }
        function removeRoute(matcherRef) {
            if (isRouteName(matcherRef)) {
                const matcher = matcherMap.get(matcherRef);
                if (matcher) {
                    matcherMap.delete(matcherRef);
                    matchers.splice(matchers.indexOf(matcher), 1);
                    matcher.children.forEach(removeRoute);
                    matcher.alias.forEach(removeRoute);
                }
            } else {
                const index = matchers.indexOf(matcherRef);
                if (index > -1) {
                    matchers.splice(index, 1);
                    if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
                    matcherRef.children.forEach(removeRoute);
                    matcherRef.alias.forEach(removeRoute);
                }
            }
        }
        function getRoutes() {
            return matchers;
        }
        function insertMatcher(matcher) {
            let i = 0;
            while(i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))i++;
            matchers.splice(i, 0, matcher);
            if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
        }
        function resolve(location2, currentLocation) {
            let matcher;
            let params = {};
            let path;
            let name;
            if ("name" in location2 && location2.name) {
                matcher = matcherMap.get(location2.name);
                if (!matcher) throw createRouterError(1, {
                    location: location2
                });
                name = matcher.record.name;
                params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k)=>!k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k)=>k.optional) : []).map((k)=>k.name)), location2.params && paramsFromLocation(location2.params, matcher.keys.map((k)=>k.name)));
                path = matcher.stringify(params);
            } else if (location2.path != null) {
                path = location2.path;
                matcher = matchers.find((m)=>m.re.test(path));
                if (matcher) {
                    params = matcher.parse(path);
                    name = matcher.record.name;
                }
            } else {
                matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m)=>m.re.test(currentLocation.path));
                if (!matcher) throw createRouterError(1, {
                    location: location2,
                    currentLocation
                });
                name = matcher.record.name;
                params = assign({}, currentLocation.params, location2.params);
                path = matcher.stringify(params);
            }
            const matched = [];
            let parentMatcher = matcher;
            while(parentMatcher){
                matched.unshift(parentMatcher.record);
                parentMatcher = parentMatcher.parent;
            }
            return {
                name,
                path,
                params,
                matched,
                meta: mergeMetaFields(matched)
            };
        }
        routes.forEach((route)=>addRoute(route));
        return {
            addRoute,
            resolve,
            removeRoute,
            getRoutes,
            getRecordMatcher
        };
    }
    function paramsFromLocation(params, keys) {
        const newParams = {};
        for (const key of keys){
            if (key in params) newParams[key] = params[key];
        }
        return newParams;
    }
    function normalizeRouteRecord(record) {
        return {
            path: record.path,
            redirect: record.redirect,
            name: record.name,
            meta: record.meta || {},
            aliasOf: void 0,
            beforeEnter: record.beforeEnter,
            props: normalizeRecordProps(record),
            children: record.children || [],
            instances: {},
            leaveGuards: new Set(),
            updateGuards: new Set(),
            enterCallbacks: {},
            components: "components" in record ? record.components || null : record.component && {
                default: record.component
            }
        };
    }
    function normalizeRecordProps(record) {
        const propsObject = {};
        const props = record.props || false;
        if ("component" in record) {
            propsObject.default = props;
        } else {
            for(const name in record.components)propsObject[name] = typeof props === "object" ? props[name] : props;
        }
        return propsObject;
    }
    function isAliasRecord(record) {
        while(record){
            if (record.record.aliasOf) return true;
            record = record.parent;
        }
        return false;
    }
    function mergeMetaFields(matched) {
        return matched.reduce((meta, record)=>assign(meta, record.meta), {});
    }
    function mergeOptions(defaults, partialOptions) {
        const options = {};
        for(const key in defaults){
            options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
        }
        return options;
    }
    function isRecordChildOf(record, parent) {
        return parent.children.some((child)=>child === record || isRecordChildOf(record, child));
    }
    function parseQuery(search) {
        const query = {};
        if (search === "" || search === "?") return query;
        const hasLeadingIM = search[0] === "?";
        const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
        for(let i = 0; i < searchParams.length; ++i){
            const searchParam = searchParams[i].replace(PLUS_RE, " ");
            const eqPos = searchParam.indexOf("=");
            const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
            const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
            if (key in query) {
                let currentValue = query[key];
                if (!isArray(currentValue)) {
                    currentValue = query[key] = [
                        currentValue
                    ];
                }
                currentValue.push(value);
            } else {
                query[key] = value;
            }
        }
        return query;
    }
    function stringifyQuery(query) {
        let search = "";
        for(let key in query){
            const value = query[key];
            key = encodeQueryKey(key);
            if (value == null) {
                if (value !== void 0) {
                    search += (search.length ? "&" : "") + key;
                }
                continue;
            }
            const values = isArray(value) ? value.map((v)=>v && encodeQueryValue(v)) : [
                value && encodeQueryValue(value)
            ];
            values.forEach((value2)=>{
                if (value2 !== void 0) {
                    search += (search.length ? "&" : "") + key;
                    if (value2 != null) search += "=" + value2;
                }
            });
        }
        return search;
    }
    function normalizeQuery(query) {
        const normalizedQuery = {};
        for(const key in query){
            const value = query[key];
            if (value !== void 0) {
                normalizedQuery[key] = isArray(value) ? value.map((v)=>v == null ? null : "" + v) : value == null ? value : "" + value;
            }
        }
        return normalizedQuery;
    }
    const matchedRouteKey = Symbol("");
    const viewDepthKey = Symbol("");
    const routerKey = Symbol("");
    const routeLocationKey = Symbol("");
    const routerViewLocationKey = Symbol("");
    function useCallbacks() {
        let handlers = [];
        function add(handler) {
            handlers.push(handler);
            return ()=>{
                const i = handlers.indexOf(handler);
                if (i > -1) handlers.splice(i, 1);
            };
        }
        function reset() {
            handlers = [];
        }
        return {
            add,
            list: ()=>handlers.slice(),
            reset
        };
    }
    function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn)=>fn()) {
        const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
        return ()=>new Promise((resolve, reject)=>{
                const next = (valid)=>{
                    if (valid === false) {
                        reject(createRouterError(4, {
                            from,
                            to
                        }));
                    } else if (valid instanceof Error) {
                        reject(valid);
                    } else if (isRouteLocation(valid)) {
                        reject(createRouterError(2, {
                            from: to,
                            to: valid
                        }));
                    } else {
                        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
                            enterCallbackArray.push(valid);
                        }
                        resolve();
                    }
                };
                const guardReturn = runWithContext(()=>guard.call(record && record.instances[name], to, from, next));
                let guardCall = Promise.resolve(guardReturn);
                if (guard.length < 3) guardCall = guardCall.then(next);
                guardCall.catch((err)=>reject(err));
            });
    }
    function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn)=>fn()) {
        const guards = [];
        for (const record of matched){
            for(const name in record.components){
                let rawComponent = record.components[name];
                if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
                if (isRouteComponent(rawComponent)) {
                    const options = rawComponent.__vccOpts || rawComponent;
                    const guard = options[guardType];
                    guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
                } else {
                    let componentPromise = rawComponent();
                    guards.push(()=>componentPromise.then((resolved)=>{
                            if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                            record.components[name] = resolvedComponent;
                            const options = resolvedComponent.__vccOpts || resolvedComponent;
                            const guard = options[guardType];
                            return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
                        }));
                }
            }
        }
        return guards;
    }
    function isRouteComponent(component) {
        return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
    }
    function useLink(props) {
        const router = inject(routerKey);
        const currentRoute = inject(routeLocationKey);
        const route = computed(()=>router.resolve(unref(props.to)));
        const activeRecordIndex = computed(()=>{
            const { matched } = route.value;
            const { length } = matched;
            const routeMatched = matched[length - 1];
            const currentMatched = currentRoute.matched;
            if (!routeMatched || !currentMatched.length) return -1;
            const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
            if (index > -1) return index;
            const parentRecordPath = getOriginalPath(matched[length - 2]);
            return (length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index);
        });
        const isActive = computed(()=>activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
        const isExactActive = computed(()=>activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
        function navigate(e = {}) {
            if (guardEvent(e)) {
                return router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
            }
            return Promise.resolve();
        }
        return {
            route,
            href: computed(()=>route.value.href),
            isActive,
            isExactActive,
            navigate
        };
    }
    const RouterLinkImpl = defineComponent({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [
                    String,
                    Object
                ],
                required: true
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink,
        setup (props, { slots }) {
            const link = reactive(useLink(props));
            const { options } = inject(routerKey);
            const elClass = computed(()=>({
                    [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
                    [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
                }));
            return ()=>{
                const children = slots.default && slots.default(link);
                return props.custom ? children : h("a", {
                    "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
                    href: link.href,
                    onClick: link.navigate,
                    class: elClass.value
                }, children);
            };
        }
    });
    const RouterLink = RouterLinkImpl;
    function guardEvent(e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        if (e.defaultPrevented) return;
        if (e.button !== void 0 && e.button !== 0) return;
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const target = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(target)) return;
        }
        if (e.preventDefault) e.preventDefault();
        return true;
    }
    function includesParams(outer, inner) {
        for(const key in inner){
            const innerValue = inner[key];
            const outerValue = outer[key];
            if (typeof innerValue === "string") {
                if (innerValue !== outerValue) return false;
            } else {
                if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i)=>value !== outerValue[i])) return false;
            }
        }
        return true;
    }
    function getOriginalPath(record) {
        return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
    }
    const getLinkClass = (propClass, globalClass, defaultClass)=>propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
    const RouterViewImpl = defineComponent({
        name: "RouterView",
        inheritAttrs: false,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup (props, { attrs, slots }) {
            const injectedRoute = inject(routerViewLocationKey);
            const routeToDisplay = computed(()=>props.route || injectedRoute.value);
            const injectedDepth = inject(viewDepthKey, 0);
            const depth = computed(()=>{
                let initialDepth = unref(injectedDepth);
                const { matched } = routeToDisplay.value;
                let matchedRoute;
                while((matchedRoute = matched[initialDepth]) && !matchedRoute.components){
                    initialDepth++;
                }
                return initialDepth;
            });
            const matchedRouteRef = computed(()=>routeToDisplay.value.matched[depth.value]);
            provide(viewDepthKey, computed(()=>depth.value + 1));
            provide(matchedRouteKey, matchedRouteRef);
            provide(routerViewLocationKey, routeToDisplay);
            const viewRef = ref();
            watch(()=>[
                    viewRef.value,
                    matchedRouteRef.value,
                    props.name
                ], ([instance, to, name], [oldInstance, from, oldName])=>{
                if (to) {
                    to.instances[name] = instance;
                    if (from && from !== to && instance && instance === oldInstance) {
                        if (!to.leaveGuards.size) {
                            to.leaveGuards = from.leaveGuards;
                        }
                        if (!to.updateGuards.size) {
                            to.updateGuards = from.updateGuards;
                        }
                    }
                }
                if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                    (to.enterCallbacks[name] || []).forEach((callback)=>callback(instance));
                }
            }, {
                flush: "post"
            });
            return ()=>{
                const route = routeToDisplay.value;
                const currentName = props.name;
                const matchedRoute = matchedRouteRef.value;
                const ViewComponent = matchedRoute && matchedRoute.components[currentName];
                if (!ViewComponent) {
                    return normalizeSlot(slots.default, {
                        Component: ViewComponent,
                        route
                    });
                }
                const routePropsOption = matchedRoute.props[currentName];
                const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
                const onVnodeUnmounted = (vnode)=>{
                    if (vnode.component.isUnmounted) {
                        matchedRoute.instances[currentName] = null;
                    }
                };
                const component = h(ViewComponent, assign({}, routeProps, attrs, {
                    onVnodeUnmounted,
                    ref: viewRef
                }));
                return (normalizeSlot(slots.default, {
                    Component: component,
                    route
                }) || component);
            };
        }
    });
    function normalizeSlot(slot, data) {
        if (!slot) return null;
        const slotContent = slot(data);
        return slotContent.length === 1 ? slotContent[0] : slotContent;
    }
    const RouterView = RouterViewImpl;
    function createRouter(options) {
        const matcher = createRouterMatcher(options.routes, options);
        const parseQuery$1 = options.parseQuery || parseQuery;
        const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
        const routerHistory = options.history;
        const beforeGuards = useCallbacks();
        const beforeResolveGuards = useCallbacks();
        const afterGuards = useCallbacks();
        const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
        let pendingLocation = START_LOCATION_NORMALIZED;
        if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        const normalizeParams = applyToParams.bind(null, (paramValue)=>"" + paramValue);
        const encodeParams = applyToParams.bind(null, encodeParam);
        const decodeParams = (applyToParams.bind(null, decode));
        function addRoute(parentOrRoute, route) {
            let parent;
            let record;
            if (isRouteName(parentOrRoute)) {
                parent = matcher.getRecordMatcher(parentOrRoute);
                record = route;
            } else {
                record = parentOrRoute;
            }
            return matcher.addRoute(record, parent);
        }
        function removeRoute(name) {
            const recordMatcher = matcher.getRecordMatcher(name);
            if (recordMatcher) {
                matcher.removeRoute(recordMatcher);
            }
        }
        function getRoutes() {
            return matcher.getRoutes().map((routeMatcher)=>routeMatcher.record);
        }
        function hasRoute(name) {
            return !!matcher.getRecordMatcher(name);
        }
        function resolve(rawLocation, currentLocation) {
            currentLocation = assign({}, currentLocation || currentRoute.value);
            if (typeof rawLocation === "string") {
                const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
                const matchedRoute2 = matcher.resolve({
                    path: locationNormalized.path
                }, currentLocation);
                const href2 = routerHistory.createHref(locationNormalized.fullPath);
                return assign(locationNormalized, matchedRoute2, {
                    params: decodeParams(matchedRoute2.params),
                    hash: decode(locationNormalized.hash),
                    redirectedFrom: void 0,
                    href: href2
                });
            }
            let matcherLocation;
            if (rawLocation.path != null) {
                matcherLocation = assign({}, rawLocation, {
                    path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
                });
            } else {
                const targetParams = assign({}, rawLocation.params);
                for(const key in targetParams){
                    if (targetParams[key] == null) {
                        delete targetParams[key];
                    }
                }
                matcherLocation = assign({}, rawLocation, {
                    params: encodeParams(targetParams)
                });
                currentLocation.params = encodeParams(currentLocation.params);
            }
            const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
            const hash = rawLocation.hash || "";
            matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
            const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
                hash: encodeHash(hash),
                path: matchedRoute.path
            }));
            const href = routerHistory.createHref(fullPath);
            return assign({
                fullPath,
                hash,
                query: (stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {})
            }, matchedRoute, {
                redirectedFrom: void 0,
                href
            });
        }
        function locationAsObject(to) {
            return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
        }
        function checkCanceledNavigation(to, from) {
            if (pendingLocation !== to) {
                return createRouterError(8, {
                    from,
                    to
                });
            }
        }
        function push(to) {
            return pushWithRedirect(to);
        }
        function replace(to) {
            return push(assign(locationAsObject(to), {
                replace: true
            }));
        }
        function handleRedirectRecord(to) {
            const lastMatched = to.matched[to.matched.length - 1];
            if (lastMatched && lastMatched.redirect) {
                const { redirect } = lastMatched;
                let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
                if (typeof newTargetLocation === "string") {
                    newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : ({
                        path: newTargetLocation
                    });
                    newTargetLocation.params = {};
                }
                return assign({
                    query: to.query,
                    hash: to.hash,
                    params: newTargetLocation.path != null ? {} : to.params
                }, newTargetLocation);
            }
        }
        function pushWithRedirect(to, redirectedFrom) {
            const targetLocation = pendingLocation = resolve(to);
            const from = currentRoute.value;
            const data = to.state;
            const force = to.force;
            const replace2 = to.replace === true;
            const shouldRedirect = handleRedirectRecord(targetLocation);
            if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
                state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
                force,
                replace: replace2
            }), redirectedFrom || targetLocation);
            const toLocation = targetLocation;
            toLocation.redirectedFrom = redirectedFrom;
            let failure;
            if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
                failure = createRouterError(16, {
                    to: toLocation,
                    from
                });
                handleScroll(from, from, true, false);
            }
            return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error)=>isNavigationFailure(error) ? (isNavigationFailure(error, 2) ? error : markAsReady(error)) : (triggerError(error, toLocation, from))).then((failure2)=>{
                if (failure2) {
                    if (isNavigationFailure(failure2, 2)) {
                        return pushWithRedirect(assign({
                            replace: replace2
                        }, locationAsObject(failure2.to), {
                            state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
                            force
                        }), redirectedFrom || toLocation);
                    }
                } else {
                    failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
                }
                triggerAfterEach(toLocation, from, failure2);
                return failure2;
            });
        }
        function checkCanceledNavigationAndReject(to, from) {
            const error = checkCanceledNavigation(to, from);
            return error ? Promise.reject(error) : Promise.resolve();
        }
        function runWithContext(fn) {
            const app = installedApps.values().next().value;
            return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
        }
        function navigate(to, from) {
            let guards;
            const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
            guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
            for (const record of leavingRecords){
                record.leaveGuards.forEach((guard)=>{
                    guards.push(guardToPromiseFn(guard, to, from));
                });
            }
            const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards).then(()=>{
                guards = [];
                for (const guard of beforeGuards.list()){
                    guards.push(guardToPromiseFn(guard, to, from));
                }
                guards.push(canceledNavigationCheck);
                return runGuardQueue(guards);
            }).then(()=>{
                guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
                for (const record of updatingRecords){
                    record.updateGuards.forEach((guard)=>{
                        guards.push(guardToPromiseFn(guard, to, from));
                    });
                }
                guards.push(canceledNavigationCheck);
                return runGuardQueue(guards);
            }).then(()=>{
                guards = [];
                for (const record of enteringRecords){
                    if (record.beforeEnter) {
                        if (isArray(record.beforeEnter)) {
                            for (const beforeEnter of record.beforeEnter)guards.push(guardToPromiseFn(beforeEnter, to, from));
                        } else {
                            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                        }
                    }
                }
                guards.push(canceledNavigationCheck);
                return runGuardQueue(guards);
            }).then(()=>{
                to.matched.forEach((record)=>record.enterCallbacks = {});
                guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
                guards.push(canceledNavigationCheck);
                return runGuardQueue(guards);
            }).then(()=>{
                guards = [];
                for (const guard of beforeResolveGuards.list()){
                    guards.push(guardToPromiseFn(guard, to, from));
                }
                guards.push(canceledNavigationCheck);
                return runGuardQueue(guards);
            }).catch((err)=>isNavigationFailure(err, 8) ? err : Promise.reject(err));
        }
        function triggerAfterEach(to, from, failure) {
            afterGuards.list().forEach((guard)=>runWithContext(()=>guard(to, from, failure)));
        }
        function finalizeNavigation(toLocation, from, isPush, replace2, data) {
            const error = checkCanceledNavigation(toLocation, from);
            if (error) return error;
            const isFirstNavigation = from === START_LOCATION_NORMALIZED;
            const state = !isBrowser ? {} : history.state;
            if (isPush) {
                if (replace2 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
                    scroll: isFirstNavigation && state && state.scroll
                }, data));
                else routerHistory.push(toLocation.fullPath, data);
            }
            currentRoute.value = toLocation;
            handleScroll(toLocation, from, isPush, isFirstNavigation);
            markAsReady();
        }
        let removeHistoryListener;
        function setupListeners() {
            if (removeHistoryListener) return;
            removeHistoryListener = routerHistory.listen((to, _from, info)=>{
                if (!router.listening) return;
                const toLocation = resolve(to);
                const shouldRedirect = handleRedirectRecord(toLocation);
                if (shouldRedirect) {
                    pushWithRedirect(assign(shouldRedirect, {
                        replace: true
                    }), toLocation).catch(noop);
                    return;
                }
                pendingLocation = toLocation;
                const from = currentRoute.value;
                if (isBrowser) {
                    saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
                }
                navigate(toLocation, from).catch((error)=>{
                    if (isNavigationFailure(error, 4 | 8)) {
                        return error;
                    }
                    if (isNavigationFailure(error, 2)) {
                        pushWithRedirect(error.to, toLocation).then((failure)=>{
                            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                                routerHistory.go(-1, false);
                            }
                        }).catch(noop);
                        return Promise.reject();
                    }
                    if (info.delta) {
                        routerHistory.go(-info.delta, false);
                    }
                    return triggerError(error, toLocation, from);
                }).then((failure)=>{
                    failure = failure || finalizeNavigation(toLocation, from, false);
                    if (failure) {
                        if (info.delta && !isNavigationFailure(failure, 8)) {
                            routerHistory.go(-info.delta, false);
                        } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
                            routerHistory.go(-1, false);
                        }
                    }
                    triggerAfterEach(toLocation, from, failure);
                }).catch(noop);
            });
        }
        let readyHandlers = useCallbacks();
        let errorListeners = useCallbacks();
        let ready;
        function triggerError(error, to, from) {
            markAsReady(error);
            const list = errorListeners.list();
            if (list.length) {
                list.forEach((handler)=>handler(error, to, from));
            } else {
                console.error(error);
            }
            return Promise.reject(error);
        }
        function isReady() {
            if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
            return new Promise((resolve2, reject)=>{
                readyHandlers.add([
                    resolve2,
                    reject
                ]);
            });
        }
        function markAsReady(err) {
            if (!ready) {
                ready = !err;
                setupListeners();
                readyHandlers.list().forEach(([resolve2, reject])=>err ? reject(err) : resolve2());
                readyHandlers.reset();
            }
            return err;
        }
        function handleScroll(to, from, isPush, isFirstNavigation) {
            const { scrollBehavior } = options;
            if (!isBrowser || !scrollBehavior) return Promise.resolve();
            const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
            return nextTick().then(()=>scrollBehavior(to, from, scrollPosition)).then((position)=>position && scrollToPosition(position)).catch((err)=>triggerError(err, to, from));
        }
        const go = (delta)=>routerHistory.go(delta);
        let started;
        const installedApps = new Set();
        const router = {
            currentRoute,
            listening: true,
            addRoute,
            removeRoute,
            hasRoute,
            getRoutes,
            resolve,
            options,
            push,
            replace,
            go,
            back: ()=>go(-1),
            forward: ()=>go(1),
            beforeEach: beforeGuards.add,
            beforeResolve: beforeResolveGuards.add,
            afterEach: afterGuards.add,
            onError: errorListeners.add,
            isReady,
            install (app) {
                const router2 = this;
                app.component("RouterLink", RouterLink);
                app.component("RouterView", RouterView);
                app.config.globalProperties.$router = router2;
                Object.defineProperty(app.config.globalProperties, "$route", {
                    enumerable: true,
                    get: ()=>unref(currentRoute)
                });
                if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
                    started = true;
                    push(routerHistory.location).catch((err)=>{});
                }
                const reactiveRoute = {};
                for(const key in START_LOCATION_NORMALIZED){
                    Object.defineProperty(reactiveRoute, key, {
                        get: ()=>currentRoute.value[key],
                        enumerable: true
                    });
                }
                app.provide(routerKey, router2);
                app.provide(routeLocationKey, shallowReactive(reactiveRoute));
                app.provide(routerViewLocationKey, currentRoute);
                const unmountApp = app.unmount;
                installedApps.add(app);
                app.unmount = function() {
                    installedApps.delete(app);
                    if (installedApps.size < 1) {
                        pendingLocation = START_LOCATION_NORMALIZED;
                        removeHistoryListener && removeHistoryListener();
                        removeHistoryListener = null;
                        currentRoute.value = START_LOCATION_NORMALIZED;
                        started = false;
                        ready = false;
                    }
                    unmountApp();
                };
            }
        };
        function runGuardQueue(guards) {
            return guards.reduce((promise, guard)=>promise.then(()=>runWithContext(guard)), Promise.resolve());
        }
        return router;
    }
    function extractChangingRecords(to, from) {
        const leavingRecords = [];
        const updatingRecords = [];
        const enteringRecords = [];
        const len = Math.max(from.matched.length, to.matched.length);
        for(let i = 0; i < len; i++){
            const recordFrom = from.matched[i];
            if (recordFrom) {
                if (to.matched.find((record)=>isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
                else leavingRecords.push(recordFrom);
            }
            const recordTo = to.matched[i];
            if (recordTo) {
                if (!from.matched.find((record)=>isSameRouteRecord(record, recordTo))) {
                    enteringRecords.push(recordTo);
                }
            }
        }
        return [
            leavingRecords,
            updatingRecords,
            enteringRecords
        ];
    }
    const { defineComponent: _defineComponent$3 } = await importShared("vue");
    const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode$8, createTextVNode: _createTextVNode$2, openBlock: _openBlock$9, createElementBlock: _createElementBlock$9, pushScopeId: _pushScopeId$2, popScopeId: _popScopeId$2 } = await importShared("vue");
    const _withScopeId$1 = (n)=>(_pushScopeId$2("data-v-a47c673d"), n = n(), _popScopeId$2(), n);
    const _hoisted_1$8 = {
        class: "greetings"
    };
    const _hoisted_2$8 = {
        class: "green"
    };
    const _hoisted_3$6 = _withScopeId$1(()=>_createElementVNode$8("h3", null, [
            _createTextVNode$2(" You’ve successfully created a project with "),
            _createElementVNode$8("a", {
                href: "https://vitejs.dev/",
                target: "_blank",
                rel: "noopener"
            }, "Vite"),
            _createTextVNode$2(" + "),
            _createElementVNode$8("a", {
                href: "https://vuejs.org/",
                target: "_blank",
                rel: "noopener"
            }, "Vue 3"),
            _createTextVNode$2(". What's next? ")
        ], -1));
    const _sfc_main$9 = _defineComponent$3({
        __name: "HelloWorld",
        props: {
            msg: {}
        },
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock$9(), _createElementBlock$9("div", _hoisted_1$8, [
                    _createElementVNode$8("h1", _hoisted_2$8, _toDisplayString(_ctx.msg), 1),
                    _hoisted_3$6
                ]);
            };
        }
    });
    _export_sfc = (sfc, props)=>{
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props){
            target[key] = val;
        }
        return target;
    };
    const HelloWorld = _export_sfc(_sfc_main$9, [
        [
            "__scopeId",
            "data-v-a47c673d"
        ]
    ]);
    const { defineComponent: _defineComponent$2 } = await importShared("vue");
    const { createElementVNode: _createElementVNode$7, createVNode: _createVNode$2, createTextVNode: _createTextVNode$1, unref: _unref, withCtx: _withCtx$1, Fragment: _Fragment$1, openBlock: _openBlock$8, createElementBlock: _createElementBlock$8, pushScopeId: _pushScopeId$1, popScopeId: _popScopeId$1 } = await importShared("vue");
    const _withScopeId = (n)=>(_pushScopeId$1("data-v-85852c48"), n = n(), _popScopeId$1(), n);
    const _hoisted_1$7 = _withScopeId(()=>_createElementVNode$7("img", {
            alt: "Vue logo",
            class: "logo",
            src: _imports_0,
            width: "125",
            height: "125"
        }, null, -1));
    const _hoisted_2$7 = {
        class: "wrapper"
    };
    const _sfc_main$8 = _defineComponent$2({
        __name: "App",
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock$8(), _createElementBlock$8(_Fragment$1, null, [
                    _createElementVNode$7("header", null, [
                        _hoisted_1$7,
                        _createElementVNode$7("div", _hoisted_2$7, [
                            _createVNode$2(HelloWorld, {
                                msg: "You did it!"
                            }),
                            _createElementVNode$7("nav", null, [
                                _createVNode$2(_unref(RouterLink), {
                                    to: "/"
                                }, {
                                    default: _withCtx$1(()=>[
                                            _createTextVNode$1("Home")
                                        ]),
                                    _: 1
                                }),
                                _createVNode$2(_unref(RouterLink), {
                                    to: "/about"
                                }, {
                                    default: _withCtx$1(()=>[
                                            _createTextVNode$1("About")
                                        ]),
                                    _: 1
                                })
                            ])
                        ])
                    ]),
                    _createVNode$2(_unref(RouterView))
                ], 64);
            };
        }
    });
    const App = _export_sfc(_sfc_main$8, [
        [
            "__scopeId",
            "data-v-85852c48"
        ]
    ]);
    const _sfc_main$7 = {};
    const { renderSlot: _renderSlot, createElementVNode: _createElementVNode$6, openBlock: _openBlock$7, createElementBlock: _createElementBlock$7, pushScopeId: _pushScopeId, popScopeId: _popScopeId } = await importShared("vue");
    const _hoisted_1$6 = {
        class: "item"
    };
    const _hoisted_2$6 = {
        class: "details"
    };
    function _sfc_render$5(_ctx, _cache) {
        return (_openBlock$7(), _createElementBlock$7("div", _hoisted_1$6, [
            _createElementVNode$6("i", null, [
                _renderSlot(_ctx.$slots, "icon", {}, undefined, true)
            ]),
            _createElementVNode$6("div", _hoisted_2$6, [
                _createElementVNode$6("h3", null, [
                    _renderSlot(_ctx.$slots, "heading", {}, undefined, true)
                ]),
                _renderSlot(_ctx.$slots, "default", {}, undefined, true)
            ])
        ]));
    }
    const WelcomeItem = _export_sfc(_sfc_main$7, [
        [
            "render",
            _sfc_render$5
        ],
        [
            "__scopeId",
            "data-v-fd0742eb"
        ]
    ]);
    const _sfc_main$6 = {};
    const { createElementVNode: _createElementVNode$5, openBlock: _openBlock$6, createElementBlock: _createElementBlock$6 } = await importShared("vue");
    const _hoisted_1$5 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "17",
        fill: "currentColor"
    };
    const _hoisted_2$5 = _createElementVNode$5("path", {
        d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"
    }, null, -1);
    const _hoisted_3$5 = [
        _hoisted_2$5
    ];
    function _sfc_render$4(_ctx, _cache) {
        return (_openBlock$6(), _createElementBlock$6("svg", _hoisted_1$5, _hoisted_3$5));
    }
    const DocumentationIcon = _export_sfc(_sfc_main$6, [
        [
            "render",
            _sfc_render$4
        ]
    ]);
    const _sfc_main$5 = {};
    const { createElementVNode: _createElementVNode$4, openBlock: _openBlock$5, createElementBlock: _createElementBlock$5 } = await importShared("vue");
    const _hoisted_1$4 = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "aria-hidden": "true",
        role: "img",
        class: "iconify iconify--mdi",
        width: "24",
        height: "24",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24"
    };
    const _hoisted_2$4 = _createElementVNode$4("path", {
        d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
        fill: "currentColor"
    }, null, -1);
    const _hoisted_3$4 = [
        _hoisted_2$4
    ];
    function _sfc_render$3(_ctx, _cache) {
        return (_openBlock$5(), _createElementBlock$5("svg", _hoisted_1$4, _hoisted_3$4));
    }
    const ToolingIcon = _export_sfc(_sfc_main$5, [
        [
            "render",
            _sfc_render$3
        ]
    ]);
    const _sfc_main$4 = {};
    const { createElementVNode: _createElementVNode$3, openBlock: _openBlock$4, createElementBlock: _createElementBlock$4 } = await importShared("vue");
    const _hoisted_1$3 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "20",
        fill: "currentColor"
    };
    const _hoisted_2$3 = _createElementVNode$3("path", {
        d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"
    }, null, -1);
    const _hoisted_3$3 = [
        _hoisted_2$3
    ];
    function _sfc_render$2(_ctx, _cache) {
        return (_openBlock$4(), _createElementBlock$4("svg", _hoisted_1$3, _hoisted_3$3));
    }
    const EcosystemIcon = _export_sfc(_sfc_main$4, [
        [
            "render",
            _sfc_render$2
        ]
    ]);
    const _sfc_main$3 = {};
    const { createElementVNode: _createElementVNode$2, openBlock: _openBlock$3, createElementBlock: _createElementBlock$3 } = await importShared("vue");
    const _hoisted_1$2 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor"
    };
    const _hoisted_2$2 = _createElementVNode$2("path", {
        d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"
    }, null, -1);
    const _hoisted_3$2 = [
        _hoisted_2$2
    ];
    function _sfc_render$1(_ctx, _cache) {
        return (_openBlock$3(), _createElementBlock$3("svg", _hoisted_1$2, _hoisted_3$2));
    }
    const CommunityIcon = _export_sfc(_sfc_main$3, [
        [
            "render",
            _sfc_render$1
        ]
    ]);
    const _sfc_main$2 = {};
    const { createElementVNode: _createElementVNode$1, openBlock: _openBlock$2, createElementBlock: _createElementBlock$2 } = await importShared("vue");
    const _hoisted_1$1 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor"
    };
    const _hoisted_2$1 = _createElementVNode$1("path", {
        d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"
    }, null, -1);
    const _hoisted_3$1 = [
        _hoisted_2$1
    ];
    function _sfc_render(_ctx, _cache) {
        return (_openBlock$2(), _createElementBlock$2("svg", _hoisted_1$1, _hoisted_3$1));
    }
    const SupportIcon = _export_sfc(_sfc_main$2, [
        [
            "render",
            _sfc_render
        ]
    ]);
    const { defineComponent: _defineComponent$1 } = await importShared("vue");
    const { createVNode: _createVNode$1, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock$1, createElementBlock: _createElementBlock$1 } = await importShared("vue");
    const _hoisted_1 = _createElementVNode("a", {
        href: "https://vuejs.org/",
        target: "_blank",
        rel: "noopener"
    }, "official documentation", -1);
    const _hoisted_2 = _createElementVNode("a", {
        href: "https://vitejs.dev/guide/features.html",
        target: "_blank",
        rel: "noopener"
    }, "Vite", -1);
    const _hoisted_3 = _createElementVNode("a", {
        href: "https://code.visualstudio.com/",
        target: "_blank",
        rel: "noopener"
    }, "VSCode", -1);
    const _hoisted_4 = _createElementVNode("a", {
        href: "https://github.com/johnsoncodehk/volar",
        target: "_blank",
        rel: "noopener"
    }, "Volar", -1);
    const _hoisted_5 = _createElementVNode("a", {
        href: "https://www.cypress.io/",
        target: "_blank",
        rel: "noopener"
    }, "Cypress", -1);
    const _hoisted_6 = _createElementVNode("a", {
        href: "https://on.cypress.io/component",
        target: "_blank",
        rel: "noopener"
    }, "Cypress Component Testing", -1);
    const _hoisted_7 = _createElementVNode("br", null, null, -1);
    const _hoisted_8 = _createElementVNode("code", null, "README.md", -1);
    const _hoisted_9 = _createElementVNode("a", {
        href: "https://pinia.vuejs.org/",
        target: "_blank",
        rel: "noopener"
    }, "Pinia", -1);
    const _hoisted_10 = _createElementVNode("a", {
        href: "https://router.vuejs.org/",
        target: "_blank",
        rel: "noopener"
    }, "Vue Router", -1);
    const _hoisted_11 = _createElementVNode("a", {
        href: "https://test-utils.vuejs.org/",
        target: "_blank",
        rel: "noopener"
    }, "Vue Test Utils", -1);
    const _hoisted_12 = _createElementVNode("a", {
        href: "https://github.com/vuejs/devtools",
        target: "_blank",
        rel: "noopener"
    }, "Vue Dev Tools", -1);
    const _hoisted_13 = _createElementVNode("a", {
        href: "https://github.com/vuejs/awesome-vue",
        target: "_blank",
        rel: "noopener"
    }, "Awesome Vue", -1);
    const _hoisted_14 = _createElementVNode("a", {
        href: "https://chat.vuejs.org",
        target: "_blank",
        rel: "noopener"
    }, "Vue Land", -1);
    const _hoisted_15 = _createElementVNode("a", {
        href: "https://stackoverflow.com/questions/tagged/vue.js",
        target: "_blank",
        rel: "noopener"
    }, "StackOverflow", -1);
    const _hoisted_16 = _createElementVNode("a", {
        href: "https://news.vuejs.org",
        target: "_blank",
        rel: "noopener"
    }, "our mailing list", -1);
    const _hoisted_17 = _createElementVNode("a", {
        href: "https://twitter.com/vuejs",
        target: "_blank",
        rel: "noopener"
    }, "@vuejs", -1);
    const _hoisted_18 = _createElementVNode("a", {
        href: "https://vuejs.org/sponsor/",
        target: "_blank",
        rel: "noopener"
    }, "becoming a sponsor", -1);
    const _sfc_main$1 = _defineComponent$1({
        __name: "TheWelcome",
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock$1(), _createElementBlock$1(_Fragment, null, [
                    _createVNode$1(WelcomeItem, null, {
                        icon: _withCtx(()=>[
                                _createVNode$1(DocumentationIcon)
                            ]),
                        heading: _withCtx(()=>[
                                _createTextVNode("Documentation")
                            ]),
                        default: _withCtx(()=>[
                                _createTextVNode(" Vue’s "),
                                _hoisted_1,
                                _createTextVNode(" provides you with all information you need to get started. ")
                            ]),
                        _: 1
                    }),
                    _createVNode$1(WelcomeItem, null, {
                        icon: _withCtx(()=>[
                                _createVNode$1(ToolingIcon)
                            ]),
                        heading: _withCtx(()=>[
                                _createTextVNode("Tooling")
                            ]),
                        default: _withCtx(()=>[
                                _createTextVNode(" This project is served and bundled with "),
                                _hoisted_2,
                                _createTextVNode(". The recommended IDE setup is "),
                                _hoisted_3,
                                _createTextVNode(" + "),
                                _hoisted_4,
                                _createTextVNode(". If you need to test your components and web pages, check out "),
                                _hoisted_5,
                                _createTextVNode(" and "),
                                _hoisted_6,
                                _createTextVNode(". "),
                                _hoisted_7,
                                _createTextVNode(" More instructions are available in "),
                                _hoisted_8,
                                _createTextVNode(". ")
                            ]),
                        _: 1
                    }),
                    _createVNode$1(WelcomeItem, null, {
                        icon: _withCtx(()=>[
                                _createVNode$1(EcosystemIcon)
                            ]),
                        heading: _withCtx(()=>[
                                _createTextVNode("Ecosystem")
                            ]),
                        default: _withCtx(()=>[
                                _createTextVNode(" Get official tools and libraries for your project: "),
                                _hoisted_9,
                                _createTextVNode(", "),
                                _hoisted_10,
                                _createTextVNode(", "),
                                _hoisted_11,
                                _createTextVNode(", and "),
                                _hoisted_12,
                                _createTextVNode(". If you need more resources, we suggest paying "),
                                _hoisted_13,
                                _createTextVNode(" a visit. ")
                            ]),
                        _: 1
                    }),
                    _createVNode$1(WelcomeItem, null, {
                        icon: _withCtx(()=>[
                                _createVNode$1(CommunityIcon)
                            ]),
                        heading: _withCtx(()=>[
                                _createTextVNode("Community")
                            ]),
                        default: _withCtx(()=>[
                                _createTextVNode(" Got stuck? Ask your question on "),
                                _hoisted_14,
                                _createTextVNode(", our official Discord server, or "),
                                _hoisted_15,
                                _createTextVNode(". You should also subscribe to "),
                                _hoisted_16,
                                _createTextVNode(" and follow the official "),
                                _hoisted_17,
                                _createTextVNode(" twitter account for latest news in the Vue world. ")
                            ]),
                        _: 1
                    }),
                    _createVNode$1(WelcomeItem, null, {
                        icon: _withCtx(()=>[
                                _createVNode$1(SupportIcon)
                            ]),
                        heading: _withCtx(()=>[
                                _createTextVNode("Support Vue")
                            ]),
                        default: _withCtx(()=>[
                                _createTextVNode(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
                                _hoisted_18,
                                _createTextVNode(". ")
                            ]),
                        _: 1
                    })
                ], 64);
            };
        }
    });
    const { defineComponent: _defineComponent } = await importShared("vue");
    const { createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
    const _sfc_main = _defineComponent({
        __name: "HomeView",
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock(), _createElementBlock("main", null, [
                    _createVNode(_sfc_main$1)
                ]);
            };
        }
    });
    const router = createRouter({
        history: createWebHistory("/"),
        routes: [
            {
                path: "/",
                name: "home",
                component: _sfc_main
            },
            {
                path: "/about",
                name: "about",
                component: ()=>__vitePreload(()=>import("./AboutView-B_IFo5Cl.js").then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), true ? __vite__mapDeps([0,1]) : void 0)
            }
        ]
    });
    const { createApp } = await importShared("vue");
    const app = createApp(App);
    app.use(router);
    app.mount("#app");
})();
export { _export_sfc, importShared, __tla };
