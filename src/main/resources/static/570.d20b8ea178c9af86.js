"use strict";
(self.webpackChunktts_webagent_web = self.webpackChunktts_webagent_web || []).push([[570], {
    5570: (ee, m, a) => {
        a.r(m),
        a.d(m, {
            HomeShellModule: () => W
        });
        var h = a(2791)
          , O = a(467);
        class b {
            isValid() {
                return null != this.son && "" != this.son && null != this.pcc && "" != this.pcc && null != this.pwd && "" != this.pwd && null != this.gds && "" != this.gds && null != this.platform && "" != this.platform && null != this.platformVersion && "" != this.platformVersion && null != this.product && "" != this.product
            }
        }
        var y = a(4429)
          , x = a(9003)
          , f = a(14)
          , e = a(4438)
          , T = a(6437)
          , k = a(5312)
          , w = a(4412)
          , j = a(6977);
        class R {
            constructor(l, t, s, n) {
                this.title = l,
                this.text = t,
                this.link = s,
                this.date = n
            }
        }
        var _ = a(1626)
          , F = a(3638);
        let E = ( () => {
            class o {
                constructor(t, s) {
                    this.restService = t,
                    this.destroyService = s,
                    this.providersUrl = `${k.c.endpoints.NEWS}/NewsFeed.json`,
                    this.newsProviders$ = new w.t([]),
                    this.news$ = new w.t([])
                }
                getNews() {
                    return this.news$.pipe((0,
                    j.Q)(this.destroyService.getDestroyOrder()))
                }
                loadProviders() {
                    return new Promise(t => {
                        const s = new Date
                          , n = `${s.getFullYear()}${s.getMonth()}${s.getDate()}${s.getHours()}`;
                        this.restService.get(this.providersUrl, {
                            params: {
                                dt: n
                            },
                            responseType: "text",
                            headers: {
                                Accept: "text/xml",
                                "Access-Control-Allow-Origin": "*"
                            }
                        }).subscribe({
                            next: i => {
                                const g = JSON.parse(i);
                                this.newsProviders$.next(g.newsProviders)
                            }
                            ,
                            error: () => t(!1),
                            complete: () => t(!0)
                        })
                    }
                    )
                }
                loadNews() {
                    return new Promise(t => {
                        const s = new Array;
                        let n = 0;
                        this.restService.get("https://www.businesstravelnews.com/Rss/TopStories", {
                            responseType: "text"
                        }).subscribe({
                            next: i => {
                                const r = (new DOMParser).parseFromString(i.data, "text/xml");
                                [].slice.call(r.getElementsByTagName("item")).forEach(c => {
                                    const p = c.getElementsByTagName("title")[0].childNodes[0].nodeValue.toString();
                                    let u = c.getElementsByTagName("description")[0].childNodes[0].nodeValue.toString().replace();
                                    const P = document.createElement("div");
                                    P.innerHTML = u,
                                    u = P.innerText;
                                    const K = c.getElementsByTagName("link")[0].childNodes[0].nodeValue.toString()
                                      , Q = new Date(c.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue.toString())
                                      , Z = new R(p,u,K,Q);
                                    s.push(Z)
                                }
                                )
                            }
                            ,
                            complete: () => {
                                n++,
                                n === this.newsProviders$.value.length && t(s),
                                this.news$.next(s)
                            }
                        }),
                        this.newsProviders$.value.forEach(i => {
                            if (!i.Forced && !i.active)
                                return n++,
                                void (n === this.newsProviders$.value.length && t(s))
                        }
                        )
                    }
                    )
                }
                static #e = this.\u0275fac = function(s) {
                    return new (s || o)(e.KVO(_.Qq),e.KVO(F.u))
                }
                ;
                static #t = this.\u0275prov = e.jDH({
                    token: o,
                    factory: o.\u0275fac,
                    providedIn: "root"
                })
            }
            return o
        }
        )();
        var S = a(5267)
          , I = a(5903)
          , C = a(3955);
        let A = ( () => {
            class o {
                constructor(t) {
                    this.http = t
                }
                getJsonFilePath(t) {
                    return `assets/branding/${t}/links.json`
                }
                getJsonDataFromAssets(t) {
                    const s = this.getJsonFilePath(t);
                    return this.http.get(s)
                }
                getJsonDataFromServer(t) {
                    return this.http.get(`your-server-url/${t}.json`)
                }
                static #e = this.\u0275fac = function(s) {
                    return new (s || o)(e.KVO(_.Qq))
                }
                ;
                static #t = this.\u0275prov = e.jDH({
                    token: o,
                    factory: o.\u0275fac,
                    providedIn: "root"
                })
            }
            return o
        }
        )();
        var G = a(177)
          , d = a(9417)
          , $ = a(345);
        let D = ( () => {
            class o {
                constructor(t) {
                    this.sanitizer = t
                }
                set ref(t) {
                    this._ref = t,
                    this.sanitizedRef = this.sanitizer.bypassSecurityTrustResourceUrl(this._ref)
                }
                get ref() {
                    return this._ref
                }
                static #e = this.\u0275fac = function(s) {
                    return new (s || o)(e.rXU($.up))
                }
                ;
                static #t = this.\u0275cmp = e.VBU({
                    type: o,
                    selectors: [["news-template"]],
                    inputs: {
                        title: "title",
                        text: "text",
                        ref: "ref"
                    },
                    decls: 6,
                    vars: 3,
                    consts: [["data-testid", "title"], ["rel", "noopener", "target", "_blank", 3, "href"]],
                    template: function(s, n) {
                        1 & s && (e.j41(0, "h4", 0),
                        e.EFF(1),
                        e.k0s(),
                        e.j41(2, "p"),
                        e.EFF(3),
                        e.k0s(),
                        e.j41(4, "a", 1),
                        e.EFF(5, "Find out more >"),
                        e.k0s()),
                        2 & s && (e.R7$(),
                        e.JRh(n.title),
                        e.R7$(2),
                        e.JRh(n.text),
                        e.R7$(),
                        e.Y8G("href", n.sanitizedRef, e.B4B))
                    },
                    styles: ["[_nghost-%COMP%]{display:block;color:#2d3e50;width:100%;height:auto;padding:24px 34px 12px;box-shadow:0 0 7px var(--box-shadow);border-radius:11px;margin-bottom:25px}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;height:3rem;overflow:hidden}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:-moz-fit-content;width:fit-content;margin-top:15px;margin-left:auto;text-align:end;text-decoration:none;color:#2575ae;font-size:inherit}"]
                })
            }
            return o
        }
        )();
        var B = a(2951)
          , N = a(1111)
          , Y = a(931);
        function H(o, l) {
            if (1 & o && (e.qex(0),
            e.nrm(1, "img", 43),
            e.bVm()),
            2 & o) {
                const t = e.XpG();
                e.R7$(),
                e.Y8G("src", "assets/branding/" + t.activeBrand + "/logo-white.png", e.B4B)
            }
        }
        function V(o, l) {
            1 & o && e.nrm(0, "img", 44)
        }
        function U(o, l) {
            if (1 & o) {
                const t = e.RV6();
                e.j41(0, "div", 45)(1, "webagent-switch", 46),
                e.mxI("ngModelChange", function(n) {
                    e.eBV(t);
                    const i = e.XpG();
                    return e.DH7(i.selectedGds, n) || (i.selectedGds = n),
                    e.Njj(n)
                }),
                e.j41(2, "webagent-option", 47),
                e.EFF(3, "Apollo"),
                e.k0s(),
                e.j41(4, "webagent-option", 47),
                e.EFF(5, "Galileo"),
                e.k0s(),
                e.j41(6, "webagent-option", 47),
                e.EFF(7, "Worldspan"),
                e.k0s()()()
            }
            if (2 & o) {
                const t = e.XpG();
                e.R7$(),
                e.R50("ngModel", t.selectedGds),
                e.Y8G("callToAction", !0),
                e.R7$(),
                e.Y8G("value", "Apollo"),
                e.R7$(2),
                e.Y8G("value", "Galileo"),
                e.R7$(2),
                e.Y8G("value", "Worldspan")
            }
        }
        function z(o, l) {
            1 & o && e.nrm(0, "img", 48)
        }
        function X(o, l) {
            if (1 & o && (e.j41(0, "div", 49)(1, "a", 50),
            e.nrm(2, "i", 51),
            e.k0s(),
            e.j41(3, "a", 50),
            e.nrm(4, "i", 52),
            e.k0s(),
            e.j41(5, "a", 50),
            e.nrm(6, "i", 53),
            e.k0s(),
            e.j41(7, "a", 50),
            e.nrm(8, "i", 54),
            e.k0s()()),
            2 & o) {
                const t = e.XpG();
                e.R7$(),
                e.FS9("href", t.jsonData.facebook, e.B4B),
                e.R7$(2),
                e.FS9("href", t.jsonData.linkedin, e.B4B),
                e.R7$(2),
                e.FS9("href", t.jsonData.twitter, e.B4B),
                e.R7$(2),
                e.FS9("href", t.jsonData.youtube, e.B4B)
            }
        }
        function q(o, l) {
            1 & o && (e.j41(0, "div"),
            e.EFF(1, " Loading data... "),
            e.k0s())
        }
        function J(o, l) {
            if (1 & o) {
                const t = e.RV6();
                e.j41(0, "div", 55),
                e.nrm(1, "i", 56),
                e.j41(2, "div")(3, "select", 57),
                e.mxI("ngModelChange", function(n) {
                    e.eBV(t);
                    const i = e.XpG();
                    return e.DH7(i.languageCode, n) || (i.languageCode = n),
                    e.Njj(n)
                }),
                e.bIt("change", function(n) {
                    e.eBV(t);
                    const i = e.XpG();
                    return e.Njj(i.changeLanguage(n))
                }),
                e.j41(4, "option", 47),
                e.EFF(5, "English"),
                e.k0s(),
                e.j41(6, "option", 47),
                e.EFF(7, "\u09ac\u09be\u0999\u09be\u09b2\u09bf"),
                e.k0s(),
                e.j41(8, "option", 47),
                e.EFF(9, "Fran\xe7ais"),
                e.k0s(),
                e.j41(10, "option", 47),
                e.EFF(11, "Deutscher"),
                e.k0s(),
                e.j41(12, "option", 47),
                e.EFF(13, "\u0928\u0947\u092a\u093e\u0932\u0940"),
                e.k0s(),
                e.j41(14, "option", 47),
                e.EFF(15, "Portugu\xeas"),
                e.k0s(),
                e.j41(16, "option", 47),
                e.EFF(17, "Espa\xf1ol"),
                e.k0s(),
                e.j41(18, "option", 47),
                e.EFF(19, "Kiswahili"),
                e.k0s(),
                e.j41(20, "option", 47),
                e.EFF(21, "T\xfcrk\xe7e"),
                e.k0s()()()()
            }
            if (2 & o) {
                const t = e.XpG();
                e.R7$(3),
                e.R50("ngModel", t.languageCode),
                e.R7$(),
                e.Y8G("value", "en"),
                e.R7$(2),
                e.Y8G("value", "bn"),
                e.R7$(2),
                e.Y8G("value", "fr"),
                e.R7$(2),
                e.Y8G("value", "de"),
                e.R7$(2),
                e.Y8G("value", "ne"),
                e.R7$(2),
                e.Y8G("value", "pt"),
                e.R7$(2),
                e.Y8G("value", "es"),
                e.R7$(2),
                e.Y8G("value", "sw"),
                e.R7$(2),
                e.Y8G("value", "tr")
            }
        }
        const L = [{
            path: "",
            component: ( () => {
                class o {
                    constructor(t, s, n, i, g, r, M, c) {
                        this.authService = t,
                        this.newsService = s,
                        this.router = n,
                        this.brandingService = i,
                        this.themeService = g,
                        this.translate = r,
                        this.jsonDataService = M,
                        this.alertService = c,
                        this.InputType = y.N,
                        this.Theme = x.S,
                        this.selectedGds = "Galileo",
                        this.activeBrand = "standard",
                        this.languageCode = localStorage.getItem("languageCode") ?? "en",
                        this.loginRequest = new b,
                        this.currentYear = (new Date).getFullYear(),
                        this.router.events.subscribe( () => {
                            this.authService.getUserValue().gds && (this.loginRequest.gds = this.authService.getUserValue().gds.type,
                            this.loginRequest.pcc = this.authService.getUserValue().gds.pcc,
                            this.loginRequest.son = this.authService.getUserValue().gds.son,
                            this.selectedGds = this.authService.getUserValue().gds.type)
                        }
                        ),
                        this.brandingService.activeBrand$.subscribe(p => {
                            this.activeBrand = p
                        }
                        )
                    }
                    ngOnInit() {
                        this.user$ = this.authService.getUser(),
                        this.news$ = this.newsService.getNews(),
                        this.loginRequest.platform = window.navigator.userAgent,
                        this.loginRequest.platformVersion = "4.0.1",
                        this.loginRequest.product = "WebAgent",
                        this.getData()
                    }
                    getData() {
                        var t = this;
                        return (0,
                        O.A)(function*() {
                            t.jsonDataService.getJsonDataFromAssets(t.activeBrand).subscribe(s => {
                                t.jsonData = s
                            }
                            , s => {
                                console.error("Error fetching JSON data:", s)
                            }
                            )
                        })()
                    }
                    login() {
                        const t = this.alertService.getActiveAlertId();
                        t ? this.alertService.close(t, f.T.EXECUTE) : (this.loginRequest.gds = this.selectedGds ? this.selectedGds : "Galileo",
                        this.loginRequest.isValid() && this.authService.login(this.loginRequest))
                    }
                    requestAccess() {
                        this.router.navigate(["access/request"])
                    }
                    termsAndConditions() {
                        this.router.navigate(["terms-and-conditions"])
                    }
                    capitalizeInput(t) {
                        t.target.value = t.target.value.toUpperCase()
                    }
                    changeLanguage(t) {
                        this.translate.use(t.target.value)
                    }
                    changeTheme() {
                        this.themeService.toggleTheme(),
                        this.brandingService.toggleBrand(),
                        this.getData()
                    }
                    static #e = this.\u0275fac = function(s) {
                        return new (s || o)(e.rXU(T.u),e.rXU(E),e.rXU(h.Ix),e.rXU(S.X),e.rXU(I.F),e.rXU(C.c$),e.rXU(A),e.rXU(f.u))
                    }
                    ;
                    static #t = this.\u0275cmp = e.VBU({
                        type: o,
                        selectors: [["app-home-page"]],
                        decls: 75,
                        vars: 79,
                        consts: [["defaultLogo", ""], [1, "login"], [1, "fields"], [1, "company-logo"], [4, "ngIf", "ngIfElse"], ["class", "switch-input", 4, "ngIf"], [1, "field-container", 3, "keyup.enter"], ["id", "son", 3, "ngModelChange", "input", "type", "ngModel", "label", "theme"], ["id", "password", 3, "ngModelChange", "type", "ngModel", "label", "theme"], ["id", "pcc", 3, "ngModelChange", "input", "type", "ngModel", "label", "theme"], [1, "login-buttons"], [1, "button-medium", 3, "click"], [1, "button-medium", "call-to-action", 3, "click"], [1, "register-link"], ["for", "", 1, ""], [3, "click"], [1, "store_links"], ["href", "https://apps.apple.com/pt/app/tts-webagent/id6449288388", "rel", "noopener", "target", "_blank"], ["src", "assets/images/app_store.svg", "alt", ""], ["href", "https://play.google.com/store/apps/details?id=com.tts.webagent", "rel", "noopener", "target", "_blank"], ["src", "assets/images/google_play.svg", "alt", ""], [1, "footer-button"], ["href", "https://tts.zendesk.com/hc/en-us/categories/200114315-TTS-WebAgent", "target", "_blank", 1, "link"], [1, "fa-solid", "fa-question"], ["src", "assets/images/powered_by_tts.svg", "alt", "", "width", "100px", 4, "ngIf"], [1, "footer"], [1, "bottom-left"], [1, "company-links"], ["href", "https://www.tts.com/about-tts/", "rel", "noopener", "target", "_blank"], [1, "separator"], ["rel", "noopener", "target", "_blank", 3, "click"], ["href", "mailto:support@tts.com", "rel", "noopener", "target", "_blank"], [1, "rights-reserved"], [1, "bottom-right"], ["class", "social-links", 4, "ngIf"], [4, "ngIf"], [1, "news"], ["class", "select-language", 4, "ngIf"], [1, "news-container"], [1, "news-wrapper"], [3, "title", "text", "ref"], [1, "bottom-filter"], [1, "left-side"], ["alt", "Company Logo", "width", "350px", "height", "auto", 3, "src"], ["src", "assets/webagent-logo-white.png", "alt", "Company Logo"], [1, "switch-input"], [3, "ngModelChange", "ngModel", "callToAction"], [3, "value"], ["src", "assets/images/powered_by_tts.svg", "alt", "", "width", "100px"], [1, "social-links"], ["rel", "noopener", "target", "_blank", 3, "href"], [1, "fa-brands", "fa-square-facebook"], [1, "fa-brands", "fa-linkedin"], [1, "fa-brands", "fa-square-x-twitter"], [1, "fa-brands", "fa-square-youtube"], [1, "select-language"], [1, "fa-solid", "fa-globe", "fa-xl"], ["id", "language", 3, "ngModelChange", "change", "ngModel"]],
                        template: function(s, n) {
                            if (1 & s) {
                                const i = e.RV6();
                                e.j41(0, "div", 1)(1, "div", 2)(2, "div", 3),
                                e.DNE(3, H, 2, 1, "ng-container", 4)(4, V, 1, 0, "ng-template", null, 0, e.C5r),
                                e.k0s(),
                                e.DNE(6, U, 8, 5, "div", 5),
                                e.j41(7, "div", 6),
                                e.bIt("keyup.enter", function() {
                                    return e.eBV(i),
                                    e.Njj(n.login())
                                }),
                                e.j41(8, "webagent-input", 7),
                                e.mxI("ngModelChange", function(r) {
                                    return e.eBV(i),
                                    e.DH7(n.loginRequest.son, r) || (n.loginRequest.son = r),
                                    e.Njj(r)
                                }),
                                e.bIt("input", function(r) {
                                    return e.eBV(i),
                                    e.Njj(n.capitalizeInput(r))
                                }),
                                e.k0s(),
                                e.j41(9, "webagent-input", 8),
                                e.nI1(10, "translate"),
                                e.mxI("ngModelChange", function(r) {
                                    return e.eBV(i),
                                    e.DH7(n.loginRequest.pwd, r) || (n.loginRequest.pwd = r),
                                    e.Njj(r)
                                }),
                                e.k0s(),
                                e.j41(11, "webagent-input", 9),
                                e.mxI("ngModelChange", function(r) {
                                    return e.eBV(i),
                                    e.DH7(n.loginRequest.pcc, r) || (n.loginRequest.pcc = r),
                                    e.Njj(r)
                                }),
                                e.bIt("input", function(r) {
                                    return e.eBV(i),
                                    e.Njj(n.capitalizeInput(r))
                                }),
                                e.k0s(),
                                e.j41(12, "div", 10)(13, "button", 11),
                                e.bIt("click", function() {
                                    return e.eBV(i),
                                    e.Njj(n.requestAccess())
                                }),
                                e.EFF(14),
                                e.nI1(15, "translate"),
                                e.k0s(),
                                e.j41(16, "button", 12),
                                e.bIt("click", function() {
                                    return e.eBV(i),
                                    e.Njj(n.login())
                                }),
                                e.EFF(17),
                                e.nI1(18, "translate"),
                                e.k0s()()(),
                                e.j41(19, "div", 13)(20, "label", 14),
                                e.EFF(21),
                                e.nI1(22, "translate"),
                                e.k0s(),
                                e.j41(23, "a", 15),
                                e.bIt("click", function() {
                                    return e.eBV(i),
                                    e.Njj(n.requestAccess())
                                }),
                                e.EFF(24),
                                e.nI1(25, "translate"),
                                e.k0s()(),
                                e.j41(26, "div", 16)(27, "a", 17),
                                e.nrm(28, "img", 18),
                                e.k0s(),
                                e.j41(29, "a", 19),
                                e.nrm(30, "img", 20),
                                e.k0s()()(),
                                e.j41(31, "div", 21)(32, "a", 22),
                                e.nrm(33, "i", 23),
                                e.k0s(),
                                e.DNE(34, z, 1, 0, "img", 24),
                                e.k0s(),
                                e.j41(35, "div", 25)(36, "div", 26)(37, "div", 27)(38, "a", 28),
                                e.EFF(39),
                                e.nI1(40, "translate"),
                                e.k0s(),
                                e.j41(41, "span", 29),
                                e.EFF(42, "|"),
                                e.k0s(),
                                e.j41(43, "a", 30),
                                e.bIt("click", function() {
                                    return e.eBV(i),
                                    e.Njj(n.termsAndConditions())
                                }),
                                e.EFF(44),
                                e.nI1(45, "translate"),
                                e.k0s(),
                                e.j41(46, "span", 29),
                                e.EFF(47, "|"),
                                e.k0s(),
                                e.j41(48, "a", 31),
                                e.EFF(49),
                                e.nI1(50, "translate"),
                                e.k0s()(),
                                e.j41(51, "div", 32)(52, "label"),
                                e.EFF(53),
                                e.nI1(54, "translate"),
                                e.k0s()()(),
                                e.j41(55, "div", 33),
                                e.DNE(56, X, 9, 4, "div", 34)(57, q, 2, 0, "div", 35),
                                e.k0s()()(),
                                e.j41(58, "div", 36),
                                e.DNE(59, J, 22, 10, "div", 37),
                                e.j41(60, "div", 38)(61, "div", 39),
                                e.nrm(62, "news-template", 40)(63, "news-template", 40)(64, "news-template", 40)(65, "news-template", 40)(66, "news-template", 40)(67, "news-template", 40)(68, "news-template", 40)(69, "news-template", 40)(70, "news-template", 40)(71, "news-template", 40)(72, "news-template", 40),
                                e.k0s()(),
                                e.j41(73, "div", 41),
                                e.nrm(74, "div", 42),
                                e.k0s()()
                            }
                            if (2 & s) {
                                const i = e.sdS(5);
                                e.R7$(3),
                                e.Y8G("ngIf", "standard" !== n.activeBrand)("ngIfElse", i),
                                e.R7$(3),
                                e.Y8G("ngIf", "standard" === n.activeBrand),
                                e.R7$(2),
                                e.Y8G("type", n.InputType.TEXT),
                                e.R50("ngModel", n.loginRequest.son),
                                e.Y8G("label", "SON")("theme", n.Theme.DARK),
                                e.R7$(),
                                e.Y8G("type", n.InputType.PASSWORD),
                                e.R50("ngModel", n.loginRequest.pwd),
                                e.Y8G("label", e.bMT(10, 61, "PASSWORD"))("theme", n.Theme.DARK),
                                e.R7$(2),
                                e.Y8G("type", n.InputType.TEXT),
                                e.R50("ngModel", n.loginRequest.pcc),
                                e.Y8G("label", "PCC")("theme", n.Theme.DARK),
                                e.R7$(3),
                                e.JRh(e.bMT(15, 63, "REQUEST_ACCESS")),
                                e.R7$(3),
                                e.JRh(e.bMT(18, 65, "LOGIN")),
                                e.R7$(4),
                                e.JRh(e.bMT(22, 67, "REQUEST_ACCOUNT")),
                                e.R7$(3),
                                e.SpI(" ", e.bMT(25, 69, "REQUEST_HERE"), ""),
                                e.R7$(10),
                                e.Y8G("ngIf", "standard" !== n.activeBrand),
                                e.R7$(5),
                                e.JRh(e.bMT(40, 71, "standard" === n.activeBrand ? "ABOUT_TTS" : "ABOUT_WAADAA")),
                                e.R7$(5),
                                e.JRh(e.bMT(45, 73, "TERMS_AND_CONDITIONS")),
                                e.R7$(5),
                                e.JRh(e.bMT(50, 75, "CONTACT_US")),
                                e.R7$(4),
                                e.Lme(" \xa9 ", n.currentYear, " ", e.bMT(54, 77, "RIGHTS_RESERVED"), ""),
                                e.R7$(3),
                                e.Y8G("ngIf", n.jsonData),
                                e.R7$(),
                                e.Y8G("ngIf", !n.jsonData),
                                e.R7$(2),
                                e.Y8G("ngIf", "standard" !== n.activeBrand),
                                e.R7$(3),
                                e.Y8G("title", "The Essential Travel Agent Skills: A Guide to Success")("text", "In today\u2019s digital era, the role of a travel agent has transcended traditional boundaries. This evolution is driven by rapid technological advancements and changing consumer behaviors. The modern travel agent is not just an itinerary planner but a comprehensive service provider who offers personalized experiences to clients.")("ref", " https://www.tts.com/blog/the-essential-travel-agent-skills-a-guide-to-success/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "Elevating Business Travel with NDC Content in TTS Corporate")("text", "Navigating the complexities of corporate travel requires a blend of innovation, efficiency, and a deep understanding of the evolving needs of businesses and travelers alike. At TTS, we\u2019re committed to leading the charge in transforming travel booking processes with cutting-edge solutions.")("ref", " https://www.tts.com/blog/elevating-business-travel-with-ndc-content-in-tts-corporate/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "How to Build Strong Relationships with Your Clients as a Travel Agent")("text", "The journey of building strong client relationships begins with a deep understanding of their needs. As travel agents, your primary tool is active listening. This involves more than just hearing your clients; it requires empathy, attention, and the ability to ask the right questions.")("ref", " https://www.tts.com/blog/how-to-build-strong-relationships-with-your-clients-as-a-travel-agent/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "The Future of Travel Agents, will technology replace them?")("text", "The travel industry has witnessed a transformative shift with the advent of digital technology. Travel agents, once seen primarily as intermediaries for booking flights and accommodations, have now transitioned into a more dynamic role.")("ref", " https://www.tts.com/blog/the-future-of-travel-agents-will-technology-replace-them/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "5 Essential Tips for Travel Agents to Stand Out in a Crowded Market")("text", "Imagine standing out in today\u2019s dynamic travel industry, where every travel agent is competing for attention. The key to success lies in offering services and creating memorable experiences for your clients. As a travel agent, you have the power to make travel dreams come true and to do this, you need to differentiate yourself in a crowded market.")("ref", " https://www.tts.com/blog/5-essential-tips-for-travel-agents-to-stand-out-in-a-crowded-market/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "Secrets No One Tells You to a Seamless Travel Agency Workflow")("text", "In today\u2019s travel industry, marked by fierce competition and ever-evolving client expectations, an efficient workflow is the cornerstone of success for any travel agency. An optimized workflow not only allows agencies to respond swiftly to client inquiries and market changes but also helps them manage resources more effectively and stay ahead in the competitive landscape.")("ref", " https://www.tts.com/blog/secrets-no-one-tells-you-to-a-seamless-travel-agency-workflow/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "The Future of the Travel Industry: Travel Trends That Will Shape the Next Decade")("text", "As the decade progresses, the travel industry is set to undergo a significant transformation, driven by advancements in technology, evolving consumer values, and a stronger emphasis on sustainability. This comprehensive exploration will highlight key trends that are expected to redefine travel, providing valuable insights and actionable strategies for travel agencies aiming to thrive in these changing times.")("ref", " https://www.tts.com/blog/the-future-of-the-travel-industry-travel-trends-that-will-shape-the-next-decade/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "The Ultimate Guide to Saving Time and Money for Travel Agents")("text", "Efficiency is the cornerstone of success in the travel industry, where the pace is fast and the competition fierce. For travel agents, optimizing operations to save time and reduce costs is not just about survival\u2014it\u2019s about thriving. This guide offers actionable strategies and insights to help you streamline your business practices, ensuring you remain competitive and profitable.")("ref", " https://www.tts.com/blog/the-ultimate-guide-to-saving-time-and-money-for-travel-agents/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "5 Ways to Improve Corporate Travel Management for Your Clients")("text", "As businesses expand globally, the need for streamlined travel processes becomes paramount. Travel managers are at the forefront, optimizing travel experiences to ensure that corporate journeys are not only efficient but also cost-effective and comfortable. At TTS, our dedication lies in equipping travel managers with cutting-edge tools and insights that enhance these travel management processes.")("ref", "https://www.tts.com/blog/5-ways-to-improve-corporate-travel-management-for-your-clients/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "The Art of Upselling \u2013 How to Boost Your Travel Agency Revenue")("text", "In the bustling world of travel, upselling is not merely an option but a vital strategy that significantly impacts revenue and customer satisfaction. Effective upselling transforms the standard service offering into an enhanced experience, tailored to the unique preferences and needs of each traveler. By mastering upselling techniques, travel agencies can not only increase their profitability but also cement long-lasting relationships with clients.")("ref", " https://www.tts.com/blog/the-art-of-upselling-how-to-boost-your-travel-agency-revenue/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news"),
                                e.R7$(),
                                e.Y8G("title", "Navigating the Challenges of Travel Planning in the Digital Age")("text", "The digital transformation has revolutionized numerous industries, with travel being one of the most significantly impacted. This evolution has transformed how travel services are offered, from automated booking systems to personalized travel recommendations delivered via AI. While these advancements provide substantial benefits to both providers and consumers, they also present unique challenges for travel agents")("ref", " https://www.tts.com/blog/navigating-the-challenges-of-travel-planning-in-the-digital-age/?utm_source=webagentapp-news&utm_medium=webagent&utm_campaign=webagent&utm_id=webagentapp-news")
                            }
                        },
                        dependencies: [G.bT, d.xH, d.y7, d.wz, d.BC, d.vS, D, B.L, N.r, Y.I, C.D9],
                        styles: ["[_nghost-%COMP%]{display:flex;height:100%;width:100vw}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{width:60%;background-color:var(--background-primary);display:flex;align-items:center;justify-content:center;flex-direction:column}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{width:70%;height:100%;text-align:center;display:flex;flex-direction:column;justify-content:center;gap:25px;min-width:350px;max-width:600px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .company-logo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:10px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .switch-input[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:35px;width:70%;min-width:340px;margin:0 auto;max-width:425px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;font-size:1rem}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--link-color);cursor:pointer}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]{display:flex;padding-top:20px;justify-content:flex-end;width:60%;min-width:290px;max-width:350px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]   .button-medium[_ngcontent-%COMP%]{width:198px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{margin-left:10px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field-container[_ngcontent-%COMP%]   webagent-input[_ngcontent-%COMP%]{width:60%;min-width:290px;max-width:350px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .store_links[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:60px;width:100%;gap:0px 10px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .store_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:40px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;width:100%;padding:0 0 2em 2em}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--call-to-action);color:#fff;width:50px;height:50px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .footer-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]{width:40%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;padding:10px 25px;gap:10px;width:100%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:20%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;-webkit-padding-end:10px;-webkit-padding-start:2px;-webkit-user-select:none;border-radius:0;border:unset;width:100%;max-width:400px;padding:.75rem;border:none;appearance:none;background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:right .7rem top 50%;background-size:.65rem auto;font-size:inherit}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .bottom-filter[_ngcontent-%COMP%]{display:block;position:absolute;bottom:0;width:40%;height:15%;background:linear-gradient(to top,white 33%,transparent);pointer-events:none}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]{padding:5% 25px 0}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]{display:flex;height:13vh;justify-content:space-between;align-items:flex-end;padding:0 25px}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{width:30%;height:34px;display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#597a9d}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]{height:45px;width:45px;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .large[_ngcontent-%COMP%]{width:25px;height:2px;background-color:#000;margin-bottom:5px}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%]{width:20px;height:2px;background-color:#000;margin-bottom:5px}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{width:15px;height:2px;background-color:#000}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:33%;margin:0}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .news-wrapper[_ngcontent-%COMP%]{overflow-y:scroll;height:90vh;padding:25px 25px 0;position:relative}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:space-between;color:#fff;margin-bottom:10px;align-items:flex-end}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%]   .company-links[_ngcontent-%COMP%]{display:flex;gap:5px}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%]   .company-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;cursor:pointer}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{display:flex;gap:10px}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:20px}.link[_ngcontent-%COMP%]{text-decoration:none!important}@media only screen and (max-width: 1400px){[_nghost-%COMP%]{flex-direction:column;height:200vh}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{width:100%;height:100vh}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:40px;width:auto;object-fit:contain;margin-bottom:20px}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .login-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;font-size:.875rem}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]{width:100%;height:100vh}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]{position:absolute;top:0}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background-color:#000;color:#fff;background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E)}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]{height:7vh}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{width:28%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:45%}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .news-container[_ngcontent-%COMP%]   .news-wrapper[_ngcontent-%COMP%]{padding-bottom:10px}[_nghost-%COMP%]   .news[_ngcontent-%COMP%]   .bottom-filter[_ngcontent-%COMP%]{width:100%;display:none}}"]
                    })
                }
                return o
            }
            )(),
            loadChildren: () => a.e(833).then(a.bind(a, 3833)).then(o => o.HomePageModule)
        }];
        let v = ( () => {
            class o {
                static #e = this.\u0275fac = function(s) {
                    return new (s || o)
                }
                ;
                static #t = this.\u0275mod = e.$C({
                    type: o
                });
                static #n = this.\u0275inj = e.G2t({
                    imports: [h.iI.forChild(L), h.iI]
                })
            }
            return o
        }
        )()
          , W = ( () => {
            class o {
                static #e = this.\u0275fac = function(s) {
                    return new (s || o)
                }
                ;
                static #t = this.\u0275mod = e.$C({
                    type: o
                });
                static #n = this.\u0275inj = e.G2t({
                    imports: [v, v]
                })
            }
            return o
        }
        )()
    }
}]);
