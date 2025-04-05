"use strict";
(self.webpackChunktts_webagent_web = self.webpackChunktts_webagent_web || []).push([[43], {
    3043: ($, d, p) => {
        p.r(d),
        p.d(d, {
            AccessShellModule: () => H
        });
        var r = p(2791)
          , n = p(4438)
          , M = p(5267)
          , c = p(3955);
        const S = {
            standard: "webagent-logo-colour-cropped.png",
            waadaa: "branding/waadaa/logo-black.png"
        };
        let m = ( () => {
            class o {
                constructor(t, e) {
                    this.router = t,
                    this.branding = e
                }
                nextStep() {
                    this.router.navigate(["access/request/2"])
                }
                get logoSrc() {
                    return S[this.branding.brand]
                }
                goBack() {
                    this.router.navigate(["home"])
                }
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)(n.rXU(r.Ix),n.rXU(M.X))
                }
                ;
                static #t = this.\u0275cmp = n.VBU({
                    type: o,
                    selectors: [["app-request-access"]],
                    decls: 21,
                    vars: 17,
                    consts: [[3, "click"], [1, "fa-solid", "fa-caret-left"], [1, "content"], [3, "src"], [1, "button-large", "call-to-action", 3, "click"]],
                    template: function(e, g) {
                        1 & e && (n.j41(0, "header")(1, "button", 0),
                        n.bIt("click", function() {
                            return g.goBack()
                        }),
                        n.nrm(2, "i", 1),
                        n.EFF(3, " Back to login "),
                        n.k0s(),
                        n.j41(4, "h4"),
                        n.EFF(5),
                        n.nI1(6, "translate"),
                        n.k0s()(),
                        n.j41(7, "div", 2),
                        n.nrm(8, "img", 3),
                        n.j41(9, "p"),
                        n.EFF(10),
                        n.nI1(11, "translate"),
                        n.k0s(),
                        n.j41(12, "p"),
                        n.EFF(13),
                        n.nI1(14, "translate"),
                        n.k0s(),
                        n.j41(15, "p"),
                        n.EFF(16),
                        n.nI1(17, "translate"),
                        n.k0s(),
                        n.j41(18, "button", 4),
                        n.bIt("click", function() {
                            return g.nextStep()
                        }),
                        n.EFF(19),
                        n.nI1(20, "translate"),
                        n.k0s()()),
                        2 & e && (n.R7$(5),
                        n.JRh(n.bMT(6, 7, "REQUEST_ACCESS")),
                        n.R7$(3),
                        n.Mz_("src", "assets/", g.logoSrc, "", n.B4B),
                        n.R7$(2),
                        n.JRh(n.bMT(11, 9, "REQUEST_ACCESS_1_1ST")),
                        n.R7$(3),
                        n.JRh(n.bMT(14, 11, "REQUEST_ACCESS_1_2ND")),
                        n.R7$(3),
                        n.JRh(n.bMT(17, 13, "REQUEST_ACCESS_1_3RD")),
                        n.R7$(3),
                        n.JRh(n.bMT(20, 15, "NEXT")))
                    },
                    dependencies: [c.D9],
                    styles: ["[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{width:100%;padding:20px 10%;background-color:#f0f0f0;text-align:center;position:relative}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;border-radius:0;height:100%;top:0;left:0;padding:20px;background-color:#f0f0f0;color:var(--text-primary)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:20px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3rem;margin-top:15px}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:50px auto 0}"]
                })
            }
            return o
        }
        )();
        var P = p(177)
          , T = p(4896)
          , i = p(9417);
        let l = ( () => {
            class o {
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)
                }
                ;
                static #t = this.\u0275mod = n.$C({
                    type: o
                });
                static #o = this.\u0275inj = n.G2t({
                    imports: [P.MD, T.G, i.YN, i.X1]
                })
            }
            return o
        }
        )();
        var C = p(4625)
          , R = p(5312)
          , b = p(14)
          , O = p(1626);
        let f = ( () => {
            class o {
                constructor(t, e, g, s) {
                    this.alertService = t,
                    this.router = e,
                    this.restService = g,
                    this.ENDPOINT = R.c.endpoints.TMA,
                    s.stream("INVALID_DATA_MESSAGE").subscribe(a => {
                        this.invalidDataMessage = a
                    }
                    ),
                    s.stream("ACCESS_REQUEST_SENT_MESSAGE").subscribe(a => {
                        this.accessRequetSentMessage = a
                    }
                    )
                }
                submitAccessRequest(t) {
                    if (t.invalid)
                        this.alertService.show(C.v.ERROR, this.invalidDataMessage);
                    else {
                        const e = {
                            country: this.selectedCountry.code,
                            gds: this.selectedGds,
                            name: t.value.name,
                            email: t.value.email,
                            phone: t.value.phone,
                            son: t.value.signon,
                            pcc: t.value.pcc,
                            company: t.value.agency,
                            message: t.value.message,
                            platform: window.navigator.userAgent
                        };
                        this.restService.post(`${this.ENDPOINT}/AccessRequest`, e).subscribe({
                            next: g => {
                                this.alertService.show(C.v.SUCCESS, this.accessRequetSentMessage),
                                this.router.navigate(["home"])
                            }
                            ,
                            error: g => {
                                this.alertService.show(C.v.ERROR, "An error occured")
                            }
                        })
                    }
                }
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)(n.KVO(b.u),n.KVO(r.Ix),n.KVO(O.Qq),n.KVO(c.c$))
                }
                ;
                static #t = this.\u0275prov = n.jDH({
                    token: o,
                    factory: o.\u0275fac,
                    providedIn: "root"
                })
            }
            return o
        }
        )();
        function A(o, u) {
            if (1 & o) {
                const t = n.RV6();
                n.j41(0, "li", 6),
                n.bIt("click", function() {
                    const g = n.eBV(t).$implicit
                      , s = n.XpG();
                    return n.Njj(s.selectGds(g))
                }),
                n.j41(1, "label"),
                n.EFF(2),
                n.k0s(),
                n.nrm(3, "i", 5),
                n.k0s()
            }
            if (2 & o) {
                const t = u.$implicit;
                n.R7$(2),
                n.JRh(t)
            }
        }
        let E = ( () => {
            class o {
                constructor(t, e, g) {
                    this.accessRequestService = t,
                    this.router = e,
                    this.brandingService = g,
                    this.gdss = [],
                    this.brandingSubscription = this.brandingService.activeBrand$.subscribe(s => {
                        this.updateGdssArray(s)
                    }
                    )
                }
                ngOnDestroy() {
                    this.brandingSubscription.unsubscribe()
                }
                updateGdssArray(t) {
                    this.gdss = "waadaa" === t ? ["Galileo"] : ["Apollo", "Galileo", "Worldspan"]
                }
                selectGds(t) {
                    this.accessRequestService.selectedGds = t,
                    this.router.navigate(["access/request/3"])
                }
                goBack() {
                    this.router.navigate(["access/request"])
                }
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)(n.rXU(f),n.rXU(r.Ix),n.rXU(M.X))
                }
                ;
                static #t = this.\u0275cmp = n.VBU({
                    type: o,
                    selectors: [["app-request-access-2"]],
                    decls: 15,
                    vars: 7,
                    consts: [[3, "click"], [1, "fa-solid", "fa-caret-left"], [1, "content"], ["button", "", "detail", "", 3, "click", 4, "ngFor", "ngForOf"], ["for", ""], [1, "fa-solid", "fa-caret-right"], ["button", "", "detail", "", 3, "click"]],
                    template: function(e, g) {
                        1 & e && (n.j41(0, "header")(1, "button", 0),
                        n.bIt("click", function() {
                            return g.goBack()
                        }),
                        n.nrm(2, "i", 1),
                        n.EFF(3),
                        n.nI1(4, "translate"),
                        n.k0s(),
                        n.j41(5, "h4"),
                        n.EFF(6),
                        n.nI1(7, "translate"),
                        n.k0s()(),
                        n.j41(8, "div", 2)(9, "ul"),
                        n.DNE(10, A, 4, 1, "li", 3),
                        n.j41(11, "li", 0),
                        n.bIt("click", function() {
                            return g.selectGds("")
                        }),
                        n.j41(12, "label", 4),
                        n.EFF(13, "Other / Don't know"),
                        n.k0s(),
                        n.nrm(14, "i", 5),
                        n.k0s()()()),
                        2 & e && (n.R7$(3),
                        n.SpI(" ", n.bMT(4, 3, "BACK"), " "),
                        n.R7$(3),
                        n.JRh(n.bMT(7, 5, "REQUEST_ACCESS")),
                        n.R7$(4),
                        n.Y8G("ngForOf", g.gdss))
                    },
                    dependencies: [P.Sq, c.D9],
                    styles: ["[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{width:100%;padding:20px 10%;background-color:#f0f0f0;text-align:center;position:relative}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;border-radius:0;height:100%;top:0;left:0;padding:20px;background-color:#f0f0f0;color:var(--text-primary)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;width:60%;margin:30px auto 0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:10px;display:flex;justify-content:space-between;align-items:center;color:var(--text-primary)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.2rem}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}"]
                })
            }
            return o
        }
        )();
        var G = p(8488)
          , k = p(1379)
          , I = p(4108);
        function N(o, u) {
            if (1 & o) {
                const t = n.RV6();
                n.j41(0, "li", 8),
                n.bIt("click", function() {
                    const g = n.eBV(t).$implicit
                      , s = n.XpG();
                    return n.Njj(s.selectCountry(g))
                }),
                n.j41(1, "label"),
                n.nrm(2, "span"),
                n.EFF(3),
                n.k0s(),
                n.nrm(4, "i", 9),
                n.k0s()
            }
            if (2 & o) {
                const t = u.$implicit;
                n.R7$(2),
                n.ZvI("sprite-flag_", t.code, ""),
                n.R7$(),
                n.JRh(t.name)
            }
        }
        let v = ( () => {
            class o {
                constructor(t, e) {
                    this.accessRequestService = t,
                    this.router = e
                }
                ngOnInit() {
                    const t = [];
                    for (let e in k.D) {
                        const g = new G.TP;
                        g.code = e,
                        g.name = k.D[e],
                        t.push(g)
                    }
                    this.allCountries = (0,
                    I.G)(t),
                    this.countries = t
                }
                goBack() {
                    this.router.navigate(["access/request/2"])
                }
                selectCountry(t) {
                    this.accessRequestService.selectedCountry = t,
                    this.router.navigate(["access/request/4"])
                }
                filterCountries(t) {
                    const e = t.target.value.trim().toLowerCase();
                    this.countries = e ? this.allCountries.filter(g => g.name.toLowerCase().indexOf(e) > -1 || g.code.toLowerCase().indexOf(e) > -1) : this.allCountries
                }
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)(n.rXU(f),n.rXU(r.Ix))
                }
                ;
                static #t = this.\u0275cmp = n.VBU({
                    type: o,
                    selectors: [["app-request-access-3"]],
                    decls: 16,
                    vars: 7,
                    consts: [[3, "click"], [1, "fa-solid", "fa-caret-left"], [1, "content"], ["detail", "", "button", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "input"], ["for", "search"], [1, "fa-solid", "fa-search"], ["id", "search", "type", "text", "placeholder", "Search for country", 3, "input"], ["detail", "", "button", "", 3, "click"], [1, "fa-solid", "fa-caret-right"]],
                    template: function(e, g) {
                        1 & e && (n.j41(0, "header")(1, "button", 0),
                        n.bIt("click", function() {
                            return g.goBack()
                        }),
                        n.nrm(2, "i", 1),
                        n.EFF(3),
                        n.nI1(4, "translate"),
                        n.k0s(),
                        n.j41(5, "h4"),
                        n.EFF(6),
                        n.nI1(7, "translate"),
                        n.k0s()(),
                        n.j41(8, "div", 2)(9, "ul"),
                        n.DNE(10, N, 5, 4, "li", 3),
                        n.k0s()(),
                        n.j41(11, "footer")(12, "div", 4)(13, "label", 5),
                        n.nrm(14, "i", 6),
                        n.k0s(),
                        n.j41(15, "input", 7),
                        n.bIt("input", function(a) {
                            return g.filterCountries(a)
                        }),
                        n.k0s()()()),
                        2 & e && (n.R7$(3),
                        n.SpI(" ", n.bMT(4, 3, "BACK"), " "),
                        n.R7$(3),
                        n.JRh(n.bMT(7, 5, "REQUEST_ACCESS")),
                        n.R7$(4),
                        n.Y8G("ngForOf", g.countries))
                    },
                    dependencies: [P.Sq, c.D9],
                    styles: ["[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{width:100%;padding:20px 10%;background-color:#f0f0f0;text-align:center;position:relative}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;border-radius:0;height:100%;top:0;left:0;padding:20px;background-color:#f0f0f0;color:var(--text-primary)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;width:60%;margin:30px auto 0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:10px;display:flex;justify-content:space-between;align-items:center;color:var(--text-primary)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.2rem}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;display:block;padding:10px;box-shadow:0 0 7px #3333;background-color:#fff}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:60%;margin:0 auto;position:relative;color:var(--text-primary);box-shadow:0 0 7px #3333}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;left:7.6px;top:50%;transform:translateY(-50%);font-size:1.1rem;color:var(--text-primary)}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::placeholder{color:var(--text-primary)}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;border:0;outline:none;padding:10px;padding-left:2rem}.sprite-flag_AD[_ngcontent-%COMP%], .sprite-flag_AE[_ngcontent-%COMP%], .sprite-flag_AF[_ngcontent-%COMP%], .sprite-flag_AG[_ngcontent-%COMP%], .sprite-flag_AI[_ngcontent-%COMP%], .sprite-flag_AL[_ngcontent-%COMP%], .sprite-flag_AM[_ngcontent-%COMP%], .sprite-flag_AN[_ngcontent-%COMP%], .sprite-flag_AO[_ngcontent-%COMP%], .sprite-flag_AR[_ngcontent-%COMP%], .sprite-flag_AS[_ngcontent-%COMP%], .sprite-flag_AT[_ngcontent-%COMP%], .sprite-flag_AU[_ngcontent-%COMP%], .sprite-flag_AW[_ngcontent-%COMP%], .sprite-flag_AZ[_ngcontent-%COMP%], .sprite-flag_BA[_ngcontent-%COMP%], .sprite-flag_BB[_ngcontent-%COMP%], .sprite-flag_BD[_ngcontent-%COMP%], .sprite-flag_BE[_ngcontent-%COMP%], .sprite-flag_BF[_ngcontent-%COMP%], .sprite-flag_BG[_ngcontent-%COMP%], .sprite-flag_BH[_ngcontent-%COMP%], .sprite-flag_BI[_ngcontent-%COMP%], .sprite-flag_BJ[_ngcontent-%COMP%], .sprite-flag_BM[_ngcontent-%COMP%], .sprite-flag_BN[_ngcontent-%COMP%], .sprite-flag_BO[_ngcontent-%COMP%], .sprite-flag_BR[_ngcontent-%COMP%], .sprite-flag_BS[_ngcontent-%COMP%], .sprite-flag_BT[_ngcontent-%COMP%], .sprite-flag_BW[_ngcontent-%COMP%], .sprite-flag_BY[_ngcontent-%COMP%], .sprite-flag_BZ[_ngcontent-%COMP%], .sprite-flag_CA[_ngcontent-%COMP%], .sprite-flag_CC[_ngcontent-%COMP%], .sprite-flag_CD[_ngcontent-%COMP%], .sprite-flag_CF[_ngcontent-%COMP%], .sprite-flag_CG[_ngcontent-%COMP%], .sprite-flag_CH[_ngcontent-%COMP%], .sprite-flag_CI[_ngcontent-%COMP%], .sprite-flag_CK[_ngcontent-%COMP%], .sprite-flag_CL[_ngcontent-%COMP%], .sprite-flag_CM[_ngcontent-%COMP%], .sprite-flag_CN[_ngcontent-%COMP%], .sprite-flag_CO[_ngcontent-%COMP%], .sprite-flag_CR[_ngcontent-%COMP%], .sprite-flag_CS[_ngcontent-%COMP%], .sprite-flag_CU[_ngcontent-%COMP%], .sprite-flag_CV[_ngcontent-%COMP%], .sprite-flag_CX[_ngcontent-%COMP%], .sprite-flag_CY[_ngcontent-%COMP%], .sprite-flag_CZ[_ngcontent-%COMP%], .sprite-flag_DE[_ngcontent-%COMP%], .sprite-flag_DJ[_ngcontent-%COMP%], .sprite-flag_DK[_ngcontent-%COMP%], .sprite-flag_DM[_ngcontent-%COMP%], .sprite-flag_DO[_ngcontent-%COMP%], .sprite-flag_DZ[_ngcontent-%COMP%], .sprite-flag_EC[_ngcontent-%COMP%], .sprite-flag_EE[_ngcontent-%COMP%], .sprite-flag_EG[_ngcontent-%COMP%], .sprite-flag_EH[_ngcontent-%COMP%], .sprite-flag_ER[_ngcontent-%COMP%], .sprite-flag_ES[_ngcontent-%COMP%], .sprite-flag_ET[_ngcontent-%COMP%], .sprite-flag_FI[_ngcontent-%COMP%], .sprite-flag_FJ[_ngcontent-%COMP%], .sprite-flag_FK[_ngcontent-%COMP%], .sprite-flag_FM[_ngcontent-%COMP%], .sprite-flag_FO[_ngcontent-%COMP%], .sprite-flag_FR[_ngcontent-%COMP%], .sprite-flag_GA[_ngcontent-%COMP%], .sprite-flag_GB[_ngcontent-%COMP%], .sprite-flag_GD[_ngcontent-%COMP%], .sprite-flag_GE[_ngcontent-%COMP%], .sprite-flag_GG[_ngcontent-%COMP%], .sprite-flag_GH[_ngcontent-%COMP%], .sprite-flag_GI[_ngcontent-%COMP%], .sprite-flag_GL[_ngcontent-%COMP%], .sprite-flag_GM[_ngcontent-%COMP%], .sprite-flag_GN[_ngcontent-%COMP%], .sprite-flag_GP[_ngcontent-%COMP%], .sprite-flag_GQ[_ngcontent-%COMP%], .sprite-flag_GR[_ngcontent-%COMP%], .sprite-flag_GS[_ngcontent-%COMP%], .sprite-flag_GT[_ngcontent-%COMP%], .sprite-flag_GU[_ngcontent-%COMP%], .sprite-flag_GW[_ngcontent-%COMP%], .sprite-flag_GY[_ngcontent-%COMP%], .sprite-flag_HK[_ngcontent-%COMP%], .sprite-flag_HN[_ngcontent-%COMP%], .sprite-flag_HR[_ngcontent-%COMP%], .sprite-flag_HT[_ngcontent-%COMP%], .sprite-flag_HU[_ngcontent-%COMP%], .sprite-flag_ID[_ngcontent-%COMP%], .sprite-flag_IE[_ngcontent-%COMP%], .sprite-flag_IL[_ngcontent-%COMP%], .sprite-flag_IM[_ngcontent-%COMP%], .sprite-flag_IN[_ngcontent-%COMP%], .sprite-flag_IO[_ngcontent-%COMP%], .sprite-flag_IQ[_ngcontent-%COMP%], .sprite-flag_IR[_ngcontent-%COMP%], .sprite-flag_IS[_ngcontent-%COMP%], .sprite-flag_IT[_ngcontent-%COMP%], .sprite-flag_JE[_ngcontent-%COMP%], .sprite-flag_JM[_ngcontent-%COMP%], .sprite-flag_JO[_ngcontent-%COMP%], .sprite-flag_JP[_ngcontent-%COMP%], .sprite-flag_KE[_ngcontent-%COMP%], .sprite-flag_KG[_ngcontent-%COMP%], .sprite-flag_KH[_ngcontent-%COMP%], .sprite-flag_KI[_ngcontent-%COMP%], .sprite-flag_KM[_ngcontent-%COMP%], .sprite-flag_KN[_ngcontent-%COMP%], .sprite-flag_KP[_ngcontent-%COMP%], .sprite-flag_KR[_ngcontent-%COMP%], .sprite-flag_KW[_ngcontent-%COMP%], .sprite-flag_KY[_ngcontent-%COMP%], .sprite-flag_KZ[_ngcontent-%COMP%], .sprite-flag_LA[_ngcontent-%COMP%], .sprite-flag_LB[_ngcontent-%COMP%], .sprite-flag_LC[_ngcontent-%COMP%], .sprite-flag_LI[_ngcontent-%COMP%], .sprite-flag_LK[_ngcontent-%COMP%], .sprite-flag_LR[_ngcontent-%COMP%], .sprite-flag_LS[_ngcontent-%COMP%], .sprite-flag_LT[_ngcontent-%COMP%], .sprite-flag_LU[_ngcontent-%COMP%], .sprite-flag_LV[_ngcontent-%COMP%], .sprite-flag_LY[_ngcontent-%COMP%], .sprite-flag_MA[_ngcontent-%COMP%], .sprite-flag_MC[_ngcontent-%COMP%], .sprite-flag_MD[_ngcontent-%COMP%], .sprite-flag_MG[_ngcontent-%COMP%], .sprite-flag_MH[_ngcontent-%COMP%], .sprite-flag_MK[_ngcontent-%COMP%], .sprite-flag_ML[_ngcontent-%COMP%], .sprite-flag_MM[_ngcontent-%COMP%], .sprite-flag_MN[_ngcontent-%COMP%], .sprite-flag_MO[_ngcontent-%COMP%], .sprite-flag_MP[_ngcontent-%COMP%], .sprite-flag_MQ[_ngcontent-%COMP%], .sprite-flag_MR[_ngcontent-%COMP%], .sprite-flag_MS[_ngcontent-%COMP%], .sprite-flag_MT[_ngcontent-%COMP%], .sprite-flag_MU[_ngcontent-%COMP%], .sprite-flag_MV[_ngcontent-%COMP%], .sprite-flag_MW[_ngcontent-%COMP%], .sprite-flag_MX[_ngcontent-%COMP%], .sprite-flag_MY[_ngcontent-%COMP%], .sprite-flag_MZ[_ngcontent-%COMP%], .sprite-flag_NA[_ngcontent-%COMP%], .sprite-flag_NC[_ngcontent-%COMP%], .sprite-flag_NE[_ngcontent-%COMP%], .sprite-flag_NF[_ngcontent-%COMP%], .sprite-flag_NG[_ngcontent-%COMP%], .sprite-flag_NI[_ngcontent-%COMP%], .sprite-flag_NL[_ngcontent-%COMP%], .sprite-flag_NO[_ngcontent-%COMP%], .sprite-flag_NP[_ngcontent-%COMP%], .sprite-flag_NR[_ngcontent-%COMP%], .sprite-flag_NU[_ngcontent-%COMP%], .sprite-flag_NZ[_ngcontent-%COMP%], .sprite-flag_OM[_ngcontent-%COMP%], .sprite-flag_PA[_ngcontent-%COMP%], .sprite-flag_PE[_ngcontent-%COMP%], .sprite-flag_PF[_ngcontent-%COMP%], .sprite-flag_PG[_ngcontent-%COMP%], .sprite-flag_PH[_ngcontent-%COMP%], .sprite-flag_PK[_ngcontent-%COMP%], .sprite-flag_PL[_ngcontent-%COMP%], .sprite-flag_PM[_ngcontent-%COMP%], .sprite-flag_PN[_ngcontent-%COMP%], .sprite-flag_PR[_ngcontent-%COMP%], .sprite-flag_PS[_ngcontent-%COMP%], .sprite-flag_PT[_ngcontent-%COMP%], .sprite-flag_PW[_ngcontent-%COMP%], .sprite-flag_PY[_ngcontent-%COMP%], .sprite-flag_QA[_ngcontent-%COMP%], .sprite-flag_RO[_ngcontent-%COMP%], .sprite-flag_RU[_ngcontent-%COMP%], .sprite-flag_RW[_ngcontent-%COMP%], .sprite-flag_SA[_ngcontent-%COMP%], .sprite-flag_SB[_ngcontent-%COMP%], .sprite-flag_SC[_ngcontent-%COMP%], .sprite-flag_SD[_ngcontent-%COMP%], .sprite-flag_SE[_ngcontent-%COMP%], .sprite-flag_SG[_ngcontent-%COMP%], .sprite-flag_SH[_ngcontent-%COMP%], .sprite-flag_SI[_ngcontent-%COMP%], .sprite-flag_SK[_ngcontent-%COMP%], .sprite-flag_SL[_ngcontent-%COMP%], .sprite-flag_SM[_ngcontent-%COMP%], .sprite-flag_SN[_ngcontent-%COMP%], .sprite-flag_SO[_ngcontent-%COMP%], .sprite-flag_SR[_ngcontent-%COMP%], .sprite-flag_ST[_ngcontent-%COMP%], .sprite-flag_SV[_ngcontent-%COMP%], .sprite-flag_SY[_ngcontent-%COMP%], .sprite-flag_SZ[_ngcontent-%COMP%], .sprite-flag_TC[_ngcontent-%COMP%], .sprite-flag_TD[_ngcontent-%COMP%], .sprite-flag_TF[_ngcontent-%COMP%], .sprite-flag_TG[_ngcontent-%COMP%], .sprite-flag_TH[_ngcontent-%COMP%], .sprite-flag_TJ[_ngcontent-%COMP%], .sprite-flag_TK[_ngcontent-%COMP%], .sprite-flag_TL[_ngcontent-%COMP%], .sprite-flag_TM[_ngcontent-%COMP%], .sprite-flag_TN[_ngcontent-%COMP%], .sprite-flag_TO[_ngcontent-%COMP%], .sprite-flag_TR[_ngcontent-%COMP%], .sprite-flag_TT[_ngcontent-%COMP%], .sprite-flag_TV[_ngcontent-%COMP%], .sprite-flag_TW[_ngcontent-%COMP%], .sprite-flag_TZ[_ngcontent-%COMP%], .sprite-flag_UA[_ngcontent-%COMP%], .sprite-flag_UG[_ngcontent-%COMP%], .sprite-flag_US[_ngcontent-%COMP%], .sprite-flag_UY[_ngcontent-%COMP%], .sprite-flag_UZ[_ngcontent-%COMP%], .sprite-flag_VA[_ngcontent-%COMP%], .sprite-flag_VC[_ngcontent-%COMP%], .sprite-flag_VE[_ngcontent-%COMP%], .sprite-flag_VG[_ngcontent-%COMP%], .sprite-flag_VI[_ngcontent-%COMP%], .sprite-flag_VN[_ngcontent-%COMP%], .sprite-flag_VU[_ngcontent-%COMP%], .sprite-flag_WF[_ngcontent-%COMP%], .sprite-flag_WS[_ngcontent-%COMP%], .sprite-flag_YE[_ngcontent-%COMP%], .sprite-flag_ZA[_ngcontent-%COMP%], .sprite-flag_ZM[_ngcontent-%COMP%], .sprite-flag_ZW[_ngcontent-%COMP%]{background:url(flags.d95d2abbbca8bf2c.png) no-repeat;padding-left:25px}.sprite-flag_AD[_ngcontent-%COMP%]{background-position:0 0}.sprite-flag_AE[_ngcontent-%COMP%]{background-position:0 -26px}.sprite-flag_AF[_ngcontent-%COMP%]{background-position:0 -52px}.sprite-flag_AG[_ngcontent-%COMP%]{background-position:0 -78px}.sprite-flag_AI[_ngcontent-%COMP%]{background-position:0 -104px}.sprite-flag_AL[_ngcontent-%COMP%]{background-position:0 -130px}.sprite-flag_AM[_ngcontent-%COMP%]{background-position:0 -156px}.sprite-flag_AN[_ngcontent-%COMP%]{background-position:0 -182px}.sprite-flag_AO[_ngcontent-%COMP%]{background-position:0 -208px}.sprite-flag_AR[_ngcontent-%COMP%]{background-position:0 -234px}.sprite-flag_AS[_ngcontent-%COMP%]{background-position:0 -260px}.sprite-flag_AT[_ngcontent-%COMP%]{background-position:0 -286px}.sprite-flag_AU[_ngcontent-%COMP%]{background-position:0 -312px}.sprite-flag_AW[_ngcontent-%COMP%]{background-position:0 -338px}.sprite-flag_AZ[_ngcontent-%COMP%]{background-position:0 -364px}.sprite-flag_BA[_ngcontent-%COMP%]{background-position:0 -390px}.sprite-flag_BB[_ngcontent-%COMP%]{background-position:0 -416px}.sprite-flag_BD[_ngcontent-%COMP%]{background-position:0 -442px}.sprite-flag_BE[_ngcontent-%COMP%]{background-position:0 -468px}.sprite-flag_BF[_ngcontent-%COMP%]{background-position:0 -494px}.sprite-flag_BG[_ngcontent-%COMP%]{background-position:0 -520px}.sprite-flag_BH[_ngcontent-%COMP%]{background-position:0 -546px}.sprite-flag_BI[_ngcontent-%COMP%]{background-position:0 -572px}.sprite-flag_BJ[_ngcontent-%COMP%]{background-position:0 -598px}.sprite-flag_BM[_ngcontent-%COMP%]{background-position:0 -624px}.sprite-flag_BN[_ngcontent-%COMP%]{background-position:0 -650px}.sprite-flag_BO[_ngcontent-%COMP%]{background-position:0 -676px}.sprite-flag_BR[_ngcontent-%COMP%]{background-position:0 -702px}.sprite-flag_BS[_ngcontent-%COMP%]{background-position:0 -728px}.sprite-flag_BT[_ngcontent-%COMP%]{background-position:0 -754px}.sprite-flag_BW[_ngcontent-%COMP%]{background-position:0 -780px}.sprite-flag_BY[_ngcontent-%COMP%]{background-position:0 -806px}.sprite-flag_BZ[_ngcontent-%COMP%]{background-position:0 -832px}.sprite-flag_CA[_ngcontent-%COMP%]{background-position:0 -858px}.sprite-flag_CC[_ngcontent-%COMP%]{background-position:0 -884px}.sprite-flag_CD[_ngcontent-%COMP%]{background-position:0 -910px}.sprite-flag_CF[_ngcontent-%COMP%]{background-position:0 -936px}.sprite-flag_CG[_ngcontent-%COMP%]{background-position:0 -962px}.sprite-flag_CH[_ngcontent-%COMP%]{background-position:0 -988px}.sprite-flag_CI[_ngcontent-%COMP%]{background-position:0 -1014px}.sprite-flag_CK[_ngcontent-%COMP%]{background-position:0 -1040px}.sprite-flag_CL[_ngcontent-%COMP%]{background-position:0 -1066px}.sprite-flag_CM[_ngcontent-%COMP%]{background-position:0 -1092px}.sprite-flag_CN[_ngcontent-%COMP%]{background-position:0 -1118px}.sprite-flag_CO[_ngcontent-%COMP%]{background-position:0 -1144px}.sprite-flag_CR[_ngcontent-%COMP%]{background-position:0 -1170px}.sprite-flag_CS[_ngcontent-%COMP%]{background-position:0 -1196px}.sprite-flag_CU[_ngcontent-%COMP%]{background-position:0 -1222px}.sprite-flag_CV[_ngcontent-%COMP%]{background-position:0 -1248px}.sprite-flag_CX[_ngcontent-%COMP%]{background-position:0 -1274px}.sprite-flag_CY[_ngcontent-%COMP%]{background-position:0 -1300px}.sprite-flag_CZ[_ngcontent-%COMP%]{background-position:0 -1326px}.sprite-flag_DE[_ngcontent-%COMP%]{background-position:0 -1352px}.sprite-flag_DJ[_ngcontent-%COMP%]{background-position:0 -1378px}.sprite-flag_DK[_ngcontent-%COMP%]{background-position:0 -1404px}.sprite-flag_DM[_ngcontent-%COMP%]{background-position:0 -1430px}.sprite-flag_DO[_ngcontent-%COMP%]{background-position:0 -1456px}.sprite-flag_DZ[_ngcontent-%COMP%]{background-position:0 -1482px}.sprite-flag_EC[_ngcontent-%COMP%]{background-position:0 -1508px}.sprite-flag_EE[_ngcontent-%COMP%]{background-position:0 -1534px}.sprite-flag_EG[_ngcontent-%COMP%]{background-position:0 -1560px}.sprite-flag_EH[_ngcontent-%COMP%]{background-position:0 -1586px}.sprite-flag_ER[_ngcontent-%COMP%]{background-position:0 -1612px}.sprite-flag_ES[_ngcontent-%COMP%]{background-position:0 -1638px}.sprite-flag_ET[_ngcontent-%COMP%]{background-position:0 -1664px}.sprite-flag_FI[_ngcontent-%COMP%]{background-position:0 -1690px}.sprite-flag_FJ[_ngcontent-%COMP%]{background-position:0 -1716px}.sprite-flag_FK[_ngcontent-%COMP%]{background-position:0 -1742px}.sprite-flag_FM[_ngcontent-%COMP%]{background-position:0 -1768px}.sprite-flag_FO[_ngcontent-%COMP%]{background-position:0 -1794px}.sprite-flag_FR[_ngcontent-%COMP%]{background-position:0 -1820px}.sprite-flag_GA[_ngcontent-%COMP%]{background-position:0 -1846px}.sprite-flag_GB[_ngcontent-%COMP%]{background-position:0 -1872px}.sprite-flag_GD[_ngcontent-%COMP%]{background-position:0 -1898px}.sprite-flag_GE[_ngcontent-%COMP%]{background-position:0 -1924px}.sprite-flag_GG[_ngcontent-%COMP%]{background-position:0 -1950px}.sprite-flag_GH[_ngcontent-%COMP%]{background-position:0 -1976px}.sprite-flag_GI[_ngcontent-%COMP%]{background-position:0 -2002px}.sprite-flag_GL[_ngcontent-%COMP%]{background-position:0 -2028px}.sprite-flag_GM[_ngcontent-%COMP%]{background-position:0 -2054px}.sprite-flag_GN[_ngcontent-%COMP%]{background-position:0 -2080px}.sprite-flag_GP[_ngcontent-%COMP%]{background-position:0 -2106px}.sprite-flag_GQ[_ngcontent-%COMP%]{background-position:0 -2132px}.sprite-flag_GR[_ngcontent-%COMP%]{background-position:0 -2158px}.sprite-flag_GS[_ngcontent-%COMP%]{background-position:0 -2184px}.sprite-flag_GT[_ngcontent-%COMP%]{background-position:0 -2210px}.sprite-flag_GU[_ngcontent-%COMP%]{background-position:0 -2236px}.sprite-flag_GW[_ngcontent-%COMP%]{background-position:0 -2262px}.sprite-flag_GY[_ngcontent-%COMP%]{background-position:0 -2288px}.sprite-flag_HK[_ngcontent-%COMP%]{background-position:0 -2314px}.sprite-flag_HN[_ngcontent-%COMP%]{background-position:0 -2340px}.sprite-flag_HR[_ngcontent-%COMP%]{background-position:0 -2366px}.sprite-flag_HT[_ngcontent-%COMP%]{background-position:0 -2392px}.sprite-flag_HU[_ngcontent-%COMP%]{background-position:0 -2418px}.sprite-flag_ID[_ngcontent-%COMP%]{background-position:0 -2444px}.sprite-flag_IE[_ngcontent-%COMP%]{background-position:0 -2470px}.sprite-flag_IL[_ngcontent-%COMP%]{background-position:0 -2496px}.sprite-flag_IM[_ngcontent-%COMP%]{background-position:0 -2522px}.sprite-flag_IN[_ngcontent-%COMP%]{background-position:0 -2548px}.sprite-flag_IO[_ngcontent-%COMP%]{background-position:0 -2574px}.sprite-flag_IQ[_ngcontent-%COMP%]{background-position:0 -2600px}.sprite-flag_IR[_ngcontent-%COMP%]{background-position:0 -2626px}.sprite-flag_IS[_ngcontent-%COMP%]{background-position:0 -2652px}.sprite-flag_IT[_ngcontent-%COMP%]{background-position:0 -2678px}.sprite-flag_JE[_ngcontent-%COMP%]{background-position:0 -2704px}.sprite-flag_JM[_ngcontent-%COMP%]{background-position:0 -2730px}.sprite-flag_JO[_ngcontent-%COMP%]{background-position:0 -2756px}.sprite-flag_JP[_ngcontent-%COMP%]{background-position:0 -2782px}.sprite-flag_KE[_ngcontent-%COMP%]{background-position:0 -2808px}.sprite-flag_KG[_ngcontent-%COMP%]{background-position:0 -2834px}.sprite-flag_KH[_ngcontent-%COMP%]{background-position:0 -2860px}.sprite-flag_KI[_ngcontent-%COMP%]{background-position:0 -2886px}.sprite-flag_KM[_ngcontent-%COMP%]{background-position:0 -2912px}.sprite-flag_KN[_ngcontent-%COMP%]{background-position:0 -2938px}.sprite-flag_KP[_ngcontent-%COMP%]{background-position:0 -2964px}.sprite-flag_KR[_ngcontent-%COMP%]{background-position:0 -2990px}.sprite-flag_KW[_ngcontent-%COMP%]{background-position:0 -3016px}.sprite-flag_KY[_ngcontent-%COMP%]{background-position:0 -3042px}.sprite-flag_KZ[_ngcontent-%COMP%]{background-position:0 -3068px}.sprite-flag_LA[_ngcontent-%COMP%]{background-position:0 -3094px}.sprite-flag_LB[_ngcontent-%COMP%]{background-position:0 -3120px}.sprite-flag_LC[_ngcontent-%COMP%]{background-position:0 -3146px}.sprite-flag_LI[_ngcontent-%COMP%]{background-position:0 -3172px}.sprite-flag_LK[_ngcontent-%COMP%]{background-position:0 -3198px}.sprite-flag_LR[_ngcontent-%COMP%]{background-position:0 -3224px}.sprite-flag_LS[_ngcontent-%COMP%]{background-position:0 -3250px}.sprite-flag_LT[_ngcontent-%COMP%]{background-position:0 -3276px}.sprite-flag_LU[_ngcontent-%COMP%]{background-position:0 -3302px}.sprite-flag_LV[_ngcontent-%COMP%]{background-position:0 -3328px}.sprite-flag_LY[_ngcontent-%COMP%]{background-position:0 -3354px}.sprite-flag_MA[_ngcontent-%COMP%]{background-position:0 -3380px}.sprite-flag_MC[_ngcontent-%COMP%]{background-position:0 -3406px}.sprite-flag_MD[_ngcontent-%COMP%]{background-position:0 -3432px}.sprite-flag_MG[_ngcontent-%COMP%]{background-position:0 -3458px}.sprite-flag_MH[_ngcontent-%COMP%]{background-position:0 -3484px}.sprite-flag_MK[_ngcontent-%COMP%]{background-position:0 -3510px}.sprite-flag_ML[_ngcontent-%COMP%]{background-position:0 -3536px}.sprite-flag_MM[_ngcontent-%COMP%]{background-position:0 -3562px}.sprite-flag_MN[_ngcontent-%COMP%]{background-position:0 -3588px}.sprite-flag_MO[_ngcontent-%COMP%]{background-position:0 -3614px}.sprite-flag_MP[_ngcontent-%COMP%]{background-position:0 -3640px}.sprite-flag_MQ[_ngcontent-%COMP%]{background-position:0 -3666px}.sprite-flag_MR[_ngcontent-%COMP%]{background-position:0 -3692px}.sprite-flag_MS[_ngcontent-%COMP%]{background-position:0 -3718px}.sprite-flag_MT[_ngcontent-%COMP%]{background-position:0 -3744px}.sprite-flag_MU[_ngcontent-%COMP%]{background-position:0 -3770px}.sprite-flag_MV[_ngcontent-%COMP%]{background-position:0 -3796px}.sprite-flag_MW[_ngcontent-%COMP%]{background-position:0 -3822px}.sprite-flag_MX[_ngcontent-%COMP%]{background-position:0 -3848px}.sprite-flag_MY[_ngcontent-%COMP%]{background-position:0 -3874px}.sprite-flag_MZ[_ngcontent-%COMP%]{background-position:0 -3900px}.sprite-flag_NA[_ngcontent-%COMP%]{background-position:0 -3926px}.sprite-flag_NC[_ngcontent-%COMP%]{background-position:0 -3952px}.sprite-flag_NE[_ngcontent-%COMP%]{background-position:0 -3978px}.sprite-flag_NF[_ngcontent-%COMP%]{background-position:0 -4004px}.sprite-flag_NG[_ngcontent-%COMP%]{background-position:0 -4030px}.sprite-flag_NI[_ngcontent-%COMP%]{background-position:0 -4056px}.sprite-flag_NL[_ngcontent-%COMP%]{background-position:0 -4082px}.sprite-flag_NO[_ngcontent-%COMP%]{background-position:0 -4108px}.sprite-flag_NP[_ngcontent-%COMP%]{background-position:0 -4134px}.sprite-flag_NR[_ngcontent-%COMP%]{background-position:0 -4160px}.sprite-flag_NU[_ngcontent-%COMP%]{background-position:0 -4186px}.sprite-flag_NZ[_ngcontent-%COMP%]{background-position:0 -4212px}.sprite-flag_OM[_ngcontent-%COMP%]{background-position:0 -4238px}.sprite-flag_PA[_ngcontent-%COMP%]{background-position:0 -4264px}.sprite-flag_PE[_ngcontent-%COMP%]{background-position:0 -4290px}.sprite-flag_PF[_ngcontent-%COMP%]{background-position:0 -4316px}.sprite-flag_PG[_ngcontent-%COMP%]{background-position:0 -4342px}.sprite-flag_PH[_ngcontent-%COMP%]{background-position:0 -4368px}.sprite-flag_PK[_ngcontent-%COMP%]{background-position:0 -4394px}.sprite-flag_PL[_ngcontent-%COMP%]{background-position:0 -4420px}.sprite-flag_PM[_ngcontent-%COMP%]{background-position:0 -4446px}.sprite-flag_PN[_ngcontent-%COMP%]{background-position:0 -4472px}.sprite-flag_PR[_ngcontent-%COMP%]{background-position:0 -4498px}.sprite-flag_PS[_ngcontent-%COMP%]{background-position:0 -4524px}.sprite-flag_PT[_ngcontent-%COMP%]{background-position:0 -4550px}.sprite-flag_PW[_ngcontent-%COMP%]{background-position:0 -4576px}.sprite-flag_PY[_ngcontent-%COMP%]{background-position:0 -4602px}.sprite-flag_QA[_ngcontent-%COMP%]{background-position:0 -4628px}.sprite-flag_RO[_ngcontent-%COMP%]{background-position:0 -4654px}.sprite-flag_RU[_ngcontent-%COMP%]{background-position:0 -4680px}.sprite-flag_RW[_ngcontent-%COMP%]{background-position:0 -4706px}.sprite-flag_SA[_ngcontent-%COMP%]{background-position:0 -4732px}.sprite-flag_SB[_ngcontent-%COMP%]{background-position:0 -4758px}.sprite-flag_SC[_ngcontent-%COMP%]{background-position:0 -4784px}.sprite-flag_SD[_ngcontent-%COMP%]{background-position:0 -4810px}.sprite-flag_SE[_ngcontent-%COMP%]{background-position:0 -4836px}.sprite-flag_SG[_ngcontent-%COMP%]{background-position:0 -4862px}.sprite-flag_SH[_ngcontent-%COMP%]{background-position:0 -4888px}.sprite-flag_SI[_ngcontent-%COMP%]{background-position:0 -4914px}.sprite-flag_SK[_ngcontent-%COMP%]{background-position:0 -4940px}.sprite-flag_SL[_ngcontent-%COMP%]{background-position:0 -4966px}.sprite-flag_SM[_ngcontent-%COMP%]{background-position:0 -4992px}.sprite-flag_SN[_ngcontent-%COMP%]{background-position:0 -5018px}.sprite-flag_SO[_ngcontent-%COMP%]{background-position:0 -5044px}.sprite-flag_SR[_ngcontent-%COMP%]{background-position:0 -5070px}.sprite-flag_ST[_ngcontent-%COMP%]{background-position:0 -5096px}.sprite-flag_SV[_ngcontent-%COMP%]{background-position:0 -5122px}.sprite-flag_SY[_ngcontent-%COMP%]{background-position:0 -5148px}.sprite-flag_SZ[_ngcontent-%COMP%]{background-position:0 -5174px}.sprite-flag_TC[_ngcontent-%COMP%]{background-position:0 -5200px}.sprite-flag_TD[_ngcontent-%COMP%]{background-position:0 -5226px}.sprite-flag_TF[_ngcontent-%COMP%]{background-position:0 -5252px}.sprite-flag_TG[_ngcontent-%COMP%]{background-position:0 -5278px}.sprite-flag_TH[_ngcontent-%COMP%]{background-position:0 -5304px}.sprite-flag_TJ[_ngcontent-%COMP%]{background-position:0 -5330px}.sprite-flag_TK[_ngcontent-%COMP%]{background-position:0 -5356px}.sprite-flag_TL[_ngcontent-%COMP%]{background-position:0 -5382px}.sprite-flag_TM[_ngcontent-%COMP%]{background-position:0 -5408px}.sprite-flag_TN[_ngcontent-%COMP%]{background-position:0 -5434px}.sprite-flag_TO[_ngcontent-%COMP%]{background-position:0 -5460px}.sprite-flag_TR[_ngcontent-%COMP%]{background-position:0 -5486px}.sprite-flag_TT[_ngcontent-%COMP%]{background-position:0 -5512px}.sprite-flag_TV[_ngcontent-%COMP%]{background-position:0 -5538px}.sprite-flag_TW[_ngcontent-%COMP%]{background-position:0 -5564px}.sprite-flag_TZ[_ngcontent-%COMP%]{background-position:0 -5590px}.sprite-flag_UA[_ngcontent-%COMP%]{background-position:0 -5616px}.sprite-flag_UG[_ngcontent-%COMP%]{background-position:0 -5642px}.sprite-flag_US[_ngcontent-%COMP%]{background-position:0 -5668px}.sprite-flag_UY[_ngcontent-%COMP%]{background-position:0 -5694px}.sprite-flag_UZ[_ngcontent-%COMP%]{background-position:0 -5720px}.sprite-flag_VA[_ngcontent-%COMP%]{background-position:0 -5746px}.sprite-flag_VC[_ngcontent-%COMP%]{background-position:0 -5772px}.sprite-flag_VE[_ngcontent-%COMP%]{background-position:0 -5798px}.sprite-flag_VG[_ngcontent-%COMP%]{background-position:0 -5824px}.sprite-flag_VI[_ngcontent-%COMP%]{background-position:0 -5850px}.sprite-flag_VN[_ngcontent-%COMP%]{background-position:0 -5876px}.sprite-flag_VU[_ngcontent-%COMP%]{background-position:0 -5902px}.sprite-flag_WF[_ngcontent-%COMP%]{background-position:0 -5928px}.sprite-flag_WS[_ngcontent-%COMP%]{background-position:0 -5954px}.sprite-flag_YE[_ngcontent-%COMP%]{background-position:0 -5980px}.sprite-flag_ZA[_ngcontent-%COMP%]{background-position:0 -6006px}.sprite-flag_ZM[_ngcontent-%COMP%]{background-position:0 -6032px}.sprite-flag_ZW[_ngcontent-%COMP%]{background-position:0 -6058px}"]
                })
            }
            return o
        }
        )();
        var _ = p(9837)
          , B = p(4429)
          , F = p(6977)
          , y = p(8529)
          , U = p(8810)
          , K = p(9437);
        let L = ( () => {
            class o {
                constructor(t) {
                    this.http = t,
                    this.backendUrl = "http://localhost:3000/send-email"
                }
                sendEmail(t) {
                    const e = new O.Lr({
                        "Content-Type": "application/json"
                    });
                    return this.http.post(this.backendUrl, t, {
                        headers: e
                    }).pipe((0,
                    K.W)(this.handleError))
                }
                handleError(t) {
                    return t.error instanceof ErrorEvent ? console.error("An error occurred:", t.error.message) : console.error(`Backend returned code ${t.status}, body was: ${t.error}`),
                    (0,
                    U.$)("Something bad happened; please try again later.")
                }
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)(n.KVO(O.Qq))
                }
                ;
                static #t = this.\u0275prov = n.jDH({
                    token: o,
                    factory: o.\u0275fac,
                    providedIn: "root"
                })
            }
            return o
        }
        )();
        var D = p(3638)
          , V = p(2951);
        const q = [{
            path: "request",
            component: m,
            loadChildren: () => l
        }, {
            path: "request/2",
            component: E,
            loadChildren: () => l
        }, {
            path: "request/3",
            component: v,
            loadChildren: () => l
        }, {
            path: "request/4",
            component: ( () => {
                class o {
                    constructor(t, e, g, s, a, Y, Z, J, W) {
                        this.formBuilder = t,
                        this.accessRequestService = e,
                        this.router = g,
                        this.formSubmissionService = s,
                        this.alertService = a,
                        this.emailService = Y,
                        this.brandingService = Z,
                        this.translateService = J,
                        this.destroyService = W,
                        this.InputType = B.N,
                        this.formattedEmail = "",
                        this.messages = {
                            UNKNOWN_ERROR_MESSAGE: ""
                        },
                        Object.keys(this.messages).forEach(h => {
                            this.translateService.stream(h).pipe((0,
                            F.Q)(this.destroyService.getDestroyOrder())).subscribe(j => this.messages[h] = j)
                        }
                        )
                    }
                    ngOnInit() {
                        this.selectedCountry = this.accessRequestService.selectedCountry,
                        this.selectedGds = this.accessRequestService.selectedGds,
                        this.userForm = this.formBuilder.group({
                            name: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.name)])),
                            email: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.email)])),
                            phone: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.phone)])),
                            signon: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.text)])),
                            pcc: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.text)])),
                            agency: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.text)])),
                            message: new i.MJ(null,i.k0.compose([i.k0.required, i.k0.pattern(_.q.text)]))
                        })
                    }
                    onSubmit() {
                        this.userForm.valid ? this.brandingService.brand !== this.brandingService.defaultBrand ? this.alertService.show(C.v.WARNING, this.messages.UNKNOWN_ERROR_MESSAGE) : (this.formSubmissionService.submitForm(),
                        this.accessRequestService.submitAccessRequest(this.userForm)) : this.userForm.markAllAsTouched()
                    }
                    goBack() {
                        this.router.navigate(["access/request/3"])
                    }
                    static #n = this.\u0275fac = function(e) {
                        return new (e || o)(n.rXU(i.ok),n.rXU(f),n.rXU(r.Ix),n.rXU(y.o),n.rXU(b.u),n.rXU(L),n.rXU(M.X),n.rXU(c.c$),n.rXU(D.u))
                    }
                    ;
                    static #t = this.\u0275cmp = n.VBU({
                        type: o,
                        selectors: [["app-request-access-4"]],
                        decls: 41,
                        vars: 49,
                        consts: [[3, "click"], [1, "fa-solid", "fa-caret-left"], [1, "content"], [1, "card"], [3, "ngSubmit", "formGroup"], [1, "double-fields"], [1, "field"], ["slot", "end"], ["formControlName", "name", 3, "type", "required", "label"], ["formControlName", "email", 3, "type", "required", "label"], ["formControlName", "phone", 3, "type", "required", "label"], [1, "triple-fields"], ["formControlName", "signon", 3, "type", "required", "label"], ["formControlName", "pcc", 3, "type", "required", "label"], ["formControlName", "agency", 3, "type", "required", "label"], ["formControlName", "message", 3, "type", "required", "label"], ["type", "submit", 1, "button-large", "call-to-action"]],
                        template: function(e, g) {
                            1 & e && (n.j41(0, "header")(1, "button", 0),
                            n.bIt("click", function() {
                                return g.goBack()
                            }),
                            n.nrm(2, "i", 1),
                            n.EFF(3),
                            n.nI1(4, "translate"),
                            n.k0s(),
                            n.j41(5, "h4"),
                            n.EFF(6),
                            n.nI1(7, "translate"),
                            n.k0s()(),
                            n.j41(8, "div", 2)(9, "div", 3)(10, "form", 4),
                            n.bIt("ngSubmit", function() {
                                return g.onSubmit()
                            }),
                            n.j41(11, "div", 5)(12, "div", 6)(13, "label"),
                            n.EFF(14),
                            n.nI1(15, "translate"),
                            n.k0s(),
                            n.j41(16, "div", 7),
                            n.nrm(17, "span"),
                            n.EFF(18),
                            n.k0s()(),
                            n.j41(19, "div", 6)(20, "label"),
                            n.EFF(21, "GDS:"),
                            n.k0s(),
                            n.j41(22, "div", 7),
                            n.EFF(23),
                            n.k0s()()(),
                            n.nrm(24, "webagent-input", 8),
                            n.nI1(25, "translate"),
                            n.j41(26, "div", 5),
                            n.nrm(27, "webagent-input", 9),
                            n.nI1(28, "translate"),
                            n.nrm(29, "webagent-input", 10),
                            n.nI1(30, "translate"),
                            n.k0s(),
                            n.j41(31, "div", 11),
                            n.nrm(32, "webagent-input", 12)(33, "webagent-input", 13)(34, "webagent-input", 14),
                            n.nI1(35, "translate"),
                            n.k0s(),
                            n.nrm(36, "webagent-input", 15),
                            n.nI1(37, "translate"),
                            n.j41(38, "button", 16),
                            n.EFF(39),
                            n.nI1(40, "translate"),
                            n.k0s()()()()),
                            2 & e && (n.R7$(3),
                            n.SpI(" ", n.bMT(4, 31, "BACK"), " "),
                            n.R7$(3),
                            n.JRh(n.bMT(7, 33, "REQUEST_ACCESS")),
                            n.R7$(4),
                            n.Y8G("formGroup", g.userForm),
                            n.R7$(4),
                            n.SpI("", n.bMT(15, 35, "COUNTRY"), ":"),
                            n.R7$(3),
                            n.ZvI("sprite-flag sprite-flag_", g.selectedCountry.code, ""),
                            n.R7$(),
                            n.JRh(g.selectedCountry.name),
                            n.R7$(5),
                            n.JRh(g.selectedGds),
                            n.R7$(),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", n.bMT(25, 37, "NAME")),
                            n.R7$(3),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", n.bMT(28, 39, "EMAIL")),
                            n.R7$(2),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", n.bMT(30, 41, "PHONE")),
                            n.R7$(3),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", "SignOn"),
                            n.R7$(),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", "PCC"),
                            n.R7$(),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", n.bMT(35, 43, "AGENCY")),
                            n.R7$(2),
                            n.Y8G("type", g.InputType.TEXT)("required", !0)("label", n.bMT(37, 45, "MESSAGE")),
                            n.R7$(3),
                            n.JRh(n.bMT(40, 47, "SUBMIT")))
                        },
                        dependencies: [V.L, i.qT, i.BC, i.cb, i.YS, i.j4, i.JD, c.D9],
                        styles: [".sprite-flag_AD[_ngcontent-%COMP%], .sprite-flag_AE[_ngcontent-%COMP%], .sprite-flag_AF[_ngcontent-%COMP%], .sprite-flag_AG[_ngcontent-%COMP%], .sprite-flag_AI[_ngcontent-%COMP%], .sprite-flag_AL[_ngcontent-%COMP%], .sprite-flag_AM[_ngcontent-%COMP%], .sprite-flag_AN[_ngcontent-%COMP%], .sprite-flag_AO[_ngcontent-%COMP%], .sprite-flag_AR[_ngcontent-%COMP%], .sprite-flag_AS[_ngcontent-%COMP%], .sprite-flag_AT[_ngcontent-%COMP%], .sprite-flag_AU[_ngcontent-%COMP%], .sprite-flag_AW[_ngcontent-%COMP%], .sprite-flag_AZ[_ngcontent-%COMP%], .sprite-flag_BA[_ngcontent-%COMP%], .sprite-flag_BB[_ngcontent-%COMP%], .sprite-flag_BD[_ngcontent-%COMP%], .sprite-flag_BE[_ngcontent-%COMP%], .sprite-flag_BF[_ngcontent-%COMP%], .sprite-flag_BG[_ngcontent-%COMP%], .sprite-flag_BH[_ngcontent-%COMP%], .sprite-flag_BI[_ngcontent-%COMP%], .sprite-flag_BJ[_ngcontent-%COMP%], .sprite-flag_BM[_ngcontent-%COMP%], .sprite-flag_BN[_ngcontent-%COMP%], .sprite-flag_BO[_ngcontent-%COMP%], .sprite-flag_BR[_ngcontent-%COMP%], .sprite-flag_BS[_ngcontent-%COMP%], .sprite-flag_BT[_ngcontent-%COMP%], .sprite-flag_BW[_ngcontent-%COMP%], .sprite-flag_BY[_ngcontent-%COMP%], .sprite-flag_BZ[_ngcontent-%COMP%], .sprite-flag_CA[_ngcontent-%COMP%], .sprite-flag_CC[_ngcontent-%COMP%], .sprite-flag_CD[_ngcontent-%COMP%], .sprite-flag_CF[_ngcontent-%COMP%], .sprite-flag_CG[_ngcontent-%COMP%], .sprite-flag_CH[_ngcontent-%COMP%], .sprite-flag_CI[_ngcontent-%COMP%], .sprite-flag_CK[_ngcontent-%COMP%], .sprite-flag_CL[_ngcontent-%COMP%], .sprite-flag_CM[_ngcontent-%COMP%], .sprite-flag_CN[_ngcontent-%COMP%], .sprite-flag_CO[_ngcontent-%COMP%], .sprite-flag_CR[_ngcontent-%COMP%], .sprite-flag_CS[_ngcontent-%COMP%], .sprite-flag_CU[_ngcontent-%COMP%], .sprite-flag_CV[_ngcontent-%COMP%], .sprite-flag_CX[_ngcontent-%COMP%], .sprite-flag_CY[_ngcontent-%COMP%], .sprite-flag_CZ[_ngcontent-%COMP%], .sprite-flag_DE[_ngcontent-%COMP%], .sprite-flag_DJ[_ngcontent-%COMP%], .sprite-flag_DK[_ngcontent-%COMP%], .sprite-flag_DM[_ngcontent-%COMP%], .sprite-flag_DO[_ngcontent-%COMP%], .sprite-flag_DZ[_ngcontent-%COMP%], .sprite-flag_EC[_ngcontent-%COMP%], .sprite-flag_EE[_ngcontent-%COMP%], .sprite-flag_EG[_ngcontent-%COMP%], .sprite-flag_EH[_ngcontent-%COMP%], .sprite-flag_ER[_ngcontent-%COMP%], .sprite-flag_ES[_ngcontent-%COMP%], .sprite-flag_ET[_ngcontent-%COMP%], .sprite-flag_FI[_ngcontent-%COMP%], .sprite-flag_FJ[_ngcontent-%COMP%], .sprite-flag_FK[_ngcontent-%COMP%], .sprite-flag_FM[_ngcontent-%COMP%], .sprite-flag_FO[_ngcontent-%COMP%], .sprite-flag_FR[_ngcontent-%COMP%], .sprite-flag_GA[_ngcontent-%COMP%], .sprite-flag_GB[_ngcontent-%COMP%], .sprite-flag_GD[_ngcontent-%COMP%], .sprite-flag_GE[_ngcontent-%COMP%], .sprite-flag_GG[_ngcontent-%COMP%], .sprite-flag_GH[_ngcontent-%COMP%], .sprite-flag_GI[_ngcontent-%COMP%], .sprite-flag_GL[_ngcontent-%COMP%], .sprite-flag_GM[_ngcontent-%COMP%], .sprite-flag_GN[_ngcontent-%COMP%], .sprite-flag_GP[_ngcontent-%COMP%], .sprite-flag_GQ[_ngcontent-%COMP%], .sprite-flag_GR[_ngcontent-%COMP%], .sprite-flag_GS[_ngcontent-%COMP%], .sprite-flag_GT[_ngcontent-%COMP%], .sprite-flag_GU[_ngcontent-%COMP%], .sprite-flag_GW[_ngcontent-%COMP%], .sprite-flag_GY[_ngcontent-%COMP%], .sprite-flag_HK[_ngcontent-%COMP%], .sprite-flag_HN[_ngcontent-%COMP%], .sprite-flag_HR[_ngcontent-%COMP%], .sprite-flag_HT[_ngcontent-%COMP%], .sprite-flag_HU[_ngcontent-%COMP%], .sprite-flag_ID[_ngcontent-%COMP%], .sprite-flag_IE[_ngcontent-%COMP%], .sprite-flag_IL[_ngcontent-%COMP%], .sprite-flag_IM[_ngcontent-%COMP%], .sprite-flag_IN[_ngcontent-%COMP%], .sprite-flag_IO[_ngcontent-%COMP%], .sprite-flag_IQ[_ngcontent-%COMP%], .sprite-flag_IR[_ngcontent-%COMP%], .sprite-flag_IS[_ngcontent-%COMP%], .sprite-flag_IT[_ngcontent-%COMP%], .sprite-flag_JE[_ngcontent-%COMP%], .sprite-flag_JM[_ngcontent-%COMP%], .sprite-flag_JO[_ngcontent-%COMP%], .sprite-flag_JP[_ngcontent-%COMP%], .sprite-flag_KE[_ngcontent-%COMP%], .sprite-flag_KG[_ngcontent-%COMP%], .sprite-flag_KH[_ngcontent-%COMP%], .sprite-flag_KI[_ngcontent-%COMP%], .sprite-flag_KM[_ngcontent-%COMP%], .sprite-flag_KN[_ngcontent-%COMP%], .sprite-flag_KP[_ngcontent-%COMP%], .sprite-flag_KR[_ngcontent-%COMP%], .sprite-flag_KW[_ngcontent-%COMP%], .sprite-flag_KY[_ngcontent-%COMP%], .sprite-flag_KZ[_ngcontent-%COMP%], .sprite-flag_LA[_ngcontent-%COMP%], .sprite-flag_LB[_ngcontent-%COMP%], .sprite-flag_LC[_ngcontent-%COMP%], .sprite-flag_LI[_ngcontent-%COMP%], .sprite-flag_LK[_ngcontent-%COMP%], .sprite-flag_LR[_ngcontent-%COMP%], .sprite-flag_LS[_ngcontent-%COMP%], .sprite-flag_LT[_ngcontent-%COMP%], .sprite-flag_LU[_ngcontent-%COMP%], .sprite-flag_LV[_ngcontent-%COMP%], .sprite-flag_LY[_ngcontent-%COMP%], .sprite-flag_MA[_ngcontent-%COMP%], .sprite-flag_MC[_ngcontent-%COMP%], .sprite-flag_MD[_ngcontent-%COMP%], .sprite-flag_MG[_ngcontent-%COMP%], .sprite-flag_MH[_ngcontent-%COMP%], .sprite-flag_MK[_ngcontent-%COMP%], .sprite-flag_ML[_ngcontent-%COMP%], .sprite-flag_MM[_ngcontent-%COMP%], .sprite-flag_MN[_ngcontent-%COMP%], .sprite-flag_MO[_ngcontent-%COMP%], .sprite-flag_MP[_ngcontent-%COMP%], .sprite-flag_MQ[_ngcontent-%COMP%], .sprite-flag_MR[_ngcontent-%COMP%], .sprite-flag_MS[_ngcontent-%COMP%], .sprite-flag_MT[_ngcontent-%COMP%], .sprite-flag_MU[_ngcontent-%COMP%], .sprite-flag_MV[_ngcontent-%COMP%], .sprite-flag_MW[_ngcontent-%COMP%], .sprite-flag_MX[_ngcontent-%COMP%], .sprite-flag_MY[_ngcontent-%COMP%], .sprite-flag_MZ[_ngcontent-%COMP%], .sprite-flag_NA[_ngcontent-%COMP%], .sprite-flag_NC[_ngcontent-%COMP%], .sprite-flag_NE[_ngcontent-%COMP%], .sprite-flag_NF[_ngcontent-%COMP%], .sprite-flag_NG[_ngcontent-%COMP%], .sprite-flag_NI[_ngcontent-%COMP%], .sprite-flag_NL[_ngcontent-%COMP%], .sprite-flag_NO[_ngcontent-%COMP%], .sprite-flag_NP[_ngcontent-%COMP%], .sprite-flag_NR[_ngcontent-%COMP%], .sprite-flag_NU[_ngcontent-%COMP%], .sprite-flag_NZ[_ngcontent-%COMP%], .sprite-flag_OM[_ngcontent-%COMP%], .sprite-flag_PA[_ngcontent-%COMP%], .sprite-flag_PE[_ngcontent-%COMP%], .sprite-flag_PF[_ngcontent-%COMP%], .sprite-flag_PG[_ngcontent-%COMP%], .sprite-flag_PH[_ngcontent-%COMP%], .sprite-flag_PK[_ngcontent-%COMP%], .sprite-flag_PL[_ngcontent-%COMP%], .sprite-flag_PM[_ngcontent-%COMP%], .sprite-flag_PN[_ngcontent-%COMP%], .sprite-flag_PR[_ngcontent-%COMP%], .sprite-flag_PS[_ngcontent-%COMP%], .sprite-flag_PT[_ngcontent-%COMP%], .sprite-flag_PW[_ngcontent-%COMP%], .sprite-flag_PY[_ngcontent-%COMP%], .sprite-flag_QA[_ngcontent-%COMP%], .sprite-flag_RO[_ngcontent-%COMP%], .sprite-flag_RU[_ngcontent-%COMP%], .sprite-flag_RW[_ngcontent-%COMP%], .sprite-flag_SA[_ngcontent-%COMP%], .sprite-flag_SB[_ngcontent-%COMP%], .sprite-flag_SC[_ngcontent-%COMP%], .sprite-flag_SD[_ngcontent-%COMP%], .sprite-flag_SE[_ngcontent-%COMP%], .sprite-flag_SG[_ngcontent-%COMP%], .sprite-flag_SH[_ngcontent-%COMP%], .sprite-flag_SI[_ngcontent-%COMP%], .sprite-flag_SK[_ngcontent-%COMP%], .sprite-flag_SL[_ngcontent-%COMP%], .sprite-flag_SM[_ngcontent-%COMP%], .sprite-flag_SN[_ngcontent-%COMP%], .sprite-flag_SO[_ngcontent-%COMP%], .sprite-flag_SR[_ngcontent-%COMP%], .sprite-flag_ST[_ngcontent-%COMP%], .sprite-flag_SV[_ngcontent-%COMP%], .sprite-flag_SY[_ngcontent-%COMP%], .sprite-flag_SZ[_ngcontent-%COMP%], .sprite-flag_TC[_ngcontent-%COMP%], .sprite-flag_TD[_ngcontent-%COMP%], .sprite-flag_TF[_ngcontent-%COMP%], .sprite-flag_TG[_ngcontent-%COMP%], .sprite-flag_TH[_ngcontent-%COMP%], .sprite-flag_TJ[_ngcontent-%COMP%], .sprite-flag_TK[_ngcontent-%COMP%], .sprite-flag_TL[_ngcontent-%COMP%], .sprite-flag_TM[_ngcontent-%COMP%], .sprite-flag_TN[_ngcontent-%COMP%], .sprite-flag_TO[_ngcontent-%COMP%], .sprite-flag_TR[_ngcontent-%COMP%], .sprite-flag_TT[_ngcontent-%COMP%], .sprite-flag_TV[_ngcontent-%COMP%], .sprite-flag_TW[_ngcontent-%COMP%], .sprite-flag_TZ[_ngcontent-%COMP%], .sprite-flag_UA[_ngcontent-%COMP%], .sprite-flag_UG[_ngcontent-%COMP%], .sprite-flag_US[_ngcontent-%COMP%], .sprite-flag_UY[_ngcontent-%COMP%], .sprite-flag_UZ[_ngcontent-%COMP%], .sprite-flag_VA[_ngcontent-%COMP%], .sprite-flag_VC[_ngcontent-%COMP%], .sprite-flag_VE[_ngcontent-%COMP%], .sprite-flag_VG[_ngcontent-%COMP%], .sprite-flag_VI[_ngcontent-%COMP%], .sprite-flag_VN[_ngcontent-%COMP%], .sprite-flag_VU[_ngcontent-%COMP%], .sprite-flag_WF[_ngcontent-%COMP%], .sprite-flag_WS[_ngcontent-%COMP%], .sprite-flag_YE[_ngcontent-%COMP%], .sprite-flag_ZA[_ngcontent-%COMP%], .sprite-flag_ZM[_ngcontent-%COMP%], .sprite-flag_ZW[_ngcontent-%COMP%]{background:url(flags.d95d2abbbca8bf2c.png) no-repeat;padding-left:25px}.sprite-flag_AD[_ngcontent-%COMP%]{background-position:0 0}.sprite-flag_AE[_ngcontent-%COMP%]{background-position:0 -26px}.sprite-flag_AF[_ngcontent-%COMP%]{background-position:0 -52px}.sprite-flag_AG[_ngcontent-%COMP%]{background-position:0 -78px}.sprite-flag_AI[_ngcontent-%COMP%]{background-position:0 -104px}.sprite-flag_AL[_ngcontent-%COMP%]{background-position:0 -130px}.sprite-flag_AM[_ngcontent-%COMP%]{background-position:0 -156px}.sprite-flag_AN[_ngcontent-%COMP%]{background-position:0 -182px}.sprite-flag_AO[_ngcontent-%COMP%]{background-position:0 -208px}.sprite-flag_AR[_ngcontent-%COMP%]{background-position:0 -234px}.sprite-flag_AS[_ngcontent-%COMP%]{background-position:0 -260px}.sprite-flag_AT[_ngcontent-%COMP%]{background-position:0 -286px}.sprite-flag_AU[_ngcontent-%COMP%]{background-position:0 -312px}.sprite-flag_AW[_ngcontent-%COMP%]{background-position:0 -338px}.sprite-flag_AZ[_ngcontent-%COMP%]{background-position:0 -364px}.sprite-flag_BA[_ngcontent-%COMP%]{background-position:0 -390px}.sprite-flag_BB[_ngcontent-%COMP%]{background-position:0 -416px}.sprite-flag_BD[_ngcontent-%COMP%]{background-position:0 -442px}.sprite-flag_BE[_ngcontent-%COMP%]{background-position:0 -468px}.sprite-flag_BF[_ngcontent-%COMP%]{background-position:0 -494px}.sprite-flag_BG[_ngcontent-%COMP%]{background-position:0 -520px}.sprite-flag_BH[_ngcontent-%COMP%]{background-position:0 -546px}.sprite-flag_BI[_ngcontent-%COMP%]{background-position:0 -572px}.sprite-flag_BJ[_ngcontent-%COMP%]{background-position:0 -598px}.sprite-flag_BM[_ngcontent-%COMP%]{background-position:0 -624px}.sprite-flag_BN[_ngcontent-%COMP%]{background-position:0 -650px}.sprite-flag_BO[_ngcontent-%COMP%]{background-position:0 -676px}.sprite-flag_BR[_ngcontent-%COMP%]{background-position:0 -702px}.sprite-flag_BS[_ngcontent-%COMP%]{background-position:0 -728px}.sprite-flag_BT[_ngcontent-%COMP%]{background-position:0 -754px}.sprite-flag_BW[_ngcontent-%COMP%]{background-position:0 -780px}.sprite-flag_BY[_ngcontent-%COMP%]{background-position:0 -806px}.sprite-flag_BZ[_ngcontent-%COMP%]{background-position:0 -832px}.sprite-flag_CA[_ngcontent-%COMP%]{background-position:0 -858px}.sprite-flag_CC[_ngcontent-%COMP%]{background-position:0 -884px}.sprite-flag_CD[_ngcontent-%COMP%]{background-position:0 -910px}.sprite-flag_CF[_ngcontent-%COMP%]{background-position:0 -936px}.sprite-flag_CG[_ngcontent-%COMP%]{background-position:0 -962px}.sprite-flag_CH[_ngcontent-%COMP%]{background-position:0 -988px}.sprite-flag_CI[_ngcontent-%COMP%]{background-position:0 -1014px}.sprite-flag_CK[_ngcontent-%COMP%]{background-position:0 -1040px}.sprite-flag_CL[_ngcontent-%COMP%]{background-position:0 -1066px}.sprite-flag_CM[_ngcontent-%COMP%]{background-position:0 -1092px}.sprite-flag_CN[_ngcontent-%COMP%]{background-position:0 -1118px}.sprite-flag_CO[_ngcontent-%COMP%]{background-position:0 -1144px}.sprite-flag_CR[_ngcontent-%COMP%]{background-position:0 -1170px}.sprite-flag_CS[_ngcontent-%COMP%]{background-position:0 -1196px}.sprite-flag_CU[_ngcontent-%COMP%]{background-position:0 -1222px}.sprite-flag_CV[_ngcontent-%COMP%]{background-position:0 -1248px}.sprite-flag_CX[_ngcontent-%COMP%]{background-position:0 -1274px}.sprite-flag_CY[_ngcontent-%COMP%]{background-position:0 -1300px}.sprite-flag_CZ[_ngcontent-%COMP%]{background-position:0 -1326px}.sprite-flag_DE[_ngcontent-%COMP%]{background-position:0 -1352px}.sprite-flag_DJ[_ngcontent-%COMP%]{background-position:0 -1378px}.sprite-flag_DK[_ngcontent-%COMP%]{background-position:0 -1404px}.sprite-flag_DM[_ngcontent-%COMP%]{background-position:0 -1430px}.sprite-flag_DO[_ngcontent-%COMP%]{background-position:0 -1456px}.sprite-flag_DZ[_ngcontent-%COMP%]{background-position:0 -1482px}.sprite-flag_EC[_ngcontent-%COMP%]{background-position:0 -1508px}.sprite-flag_EE[_ngcontent-%COMP%]{background-position:0 -1534px}.sprite-flag_EG[_ngcontent-%COMP%]{background-position:0 -1560px}.sprite-flag_EH[_ngcontent-%COMP%]{background-position:0 -1586px}.sprite-flag_ER[_ngcontent-%COMP%]{background-position:0 -1612px}.sprite-flag_ES[_ngcontent-%COMP%]{background-position:0 -1638px}.sprite-flag_ET[_ngcontent-%COMP%]{background-position:0 -1664px}.sprite-flag_FI[_ngcontent-%COMP%]{background-position:0 -1690px}.sprite-flag_FJ[_ngcontent-%COMP%]{background-position:0 -1716px}.sprite-flag_FK[_ngcontent-%COMP%]{background-position:0 -1742px}.sprite-flag_FM[_ngcontent-%COMP%]{background-position:0 -1768px}.sprite-flag_FO[_ngcontent-%COMP%]{background-position:0 -1794px}.sprite-flag_FR[_ngcontent-%COMP%]{background-position:0 -1820px}.sprite-flag_GA[_ngcontent-%COMP%]{background-position:0 -1846px}.sprite-flag_GB[_ngcontent-%COMP%]{background-position:0 -1872px}.sprite-flag_GD[_ngcontent-%COMP%]{background-position:0 -1898px}.sprite-flag_GE[_ngcontent-%COMP%]{background-position:0 -1924px}.sprite-flag_GG[_ngcontent-%COMP%]{background-position:0 -1950px}.sprite-flag_GH[_ngcontent-%COMP%]{background-position:0 -1976px}.sprite-flag_GI[_ngcontent-%COMP%]{background-position:0 -2002px}.sprite-flag_GL[_ngcontent-%COMP%]{background-position:0 -2028px}.sprite-flag_GM[_ngcontent-%COMP%]{background-position:0 -2054px}.sprite-flag_GN[_ngcontent-%COMP%]{background-position:0 -2080px}.sprite-flag_GP[_ngcontent-%COMP%]{background-position:0 -2106px}.sprite-flag_GQ[_ngcontent-%COMP%]{background-position:0 -2132px}.sprite-flag_GR[_ngcontent-%COMP%]{background-position:0 -2158px}.sprite-flag_GS[_ngcontent-%COMP%]{background-position:0 -2184px}.sprite-flag_GT[_ngcontent-%COMP%]{background-position:0 -2210px}.sprite-flag_GU[_ngcontent-%COMP%]{background-position:0 -2236px}.sprite-flag_GW[_ngcontent-%COMP%]{background-position:0 -2262px}.sprite-flag_GY[_ngcontent-%COMP%]{background-position:0 -2288px}.sprite-flag_HK[_ngcontent-%COMP%]{background-position:0 -2314px}.sprite-flag_HN[_ngcontent-%COMP%]{background-position:0 -2340px}.sprite-flag_HR[_ngcontent-%COMP%]{background-position:0 -2366px}.sprite-flag_HT[_ngcontent-%COMP%]{background-position:0 -2392px}.sprite-flag_HU[_ngcontent-%COMP%]{background-position:0 -2418px}.sprite-flag_ID[_ngcontent-%COMP%]{background-position:0 -2444px}.sprite-flag_IE[_ngcontent-%COMP%]{background-position:0 -2470px}.sprite-flag_IL[_ngcontent-%COMP%]{background-position:0 -2496px}.sprite-flag_IM[_ngcontent-%COMP%]{background-position:0 -2522px}.sprite-flag_IN[_ngcontent-%COMP%]{background-position:0 -2548px}.sprite-flag_IO[_ngcontent-%COMP%]{background-position:0 -2574px}.sprite-flag_IQ[_ngcontent-%COMP%]{background-position:0 -2600px}.sprite-flag_IR[_ngcontent-%COMP%]{background-position:0 -2626px}.sprite-flag_IS[_ngcontent-%COMP%]{background-position:0 -2652px}.sprite-flag_IT[_ngcontent-%COMP%]{background-position:0 -2678px}.sprite-flag_JE[_ngcontent-%COMP%]{background-position:0 -2704px}.sprite-flag_JM[_ngcontent-%COMP%]{background-position:0 -2730px}.sprite-flag_JO[_ngcontent-%COMP%]{background-position:0 -2756px}.sprite-flag_JP[_ngcontent-%COMP%]{background-position:0 -2782px}.sprite-flag_KE[_ngcontent-%COMP%]{background-position:0 -2808px}.sprite-flag_KG[_ngcontent-%COMP%]{background-position:0 -2834px}.sprite-flag_KH[_ngcontent-%COMP%]{background-position:0 -2860px}.sprite-flag_KI[_ngcontent-%COMP%]{background-position:0 -2886px}.sprite-flag_KM[_ngcontent-%COMP%]{background-position:0 -2912px}.sprite-flag_KN[_ngcontent-%COMP%]{background-position:0 -2938px}.sprite-flag_KP[_ngcontent-%COMP%]{background-position:0 -2964px}.sprite-flag_KR[_ngcontent-%COMP%]{background-position:0 -2990px}.sprite-flag_KW[_ngcontent-%COMP%]{background-position:0 -3016px}.sprite-flag_KY[_ngcontent-%COMP%]{background-position:0 -3042px}.sprite-flag_KZ[_ngcontent-%COMP%]{background-position:0 -3068px}.sprite-flag_LA[_ngcontent-%COMP%]{background-position:0 -3094px}.sprite-flag_LB[_ngcontent-%COMP%]{background-position:0 -3120px}.sprite-flag_LC[_ngcontent-%COMP%]{background-position:0 -3146px}.sprite-flag_LI[_ngcontent-%COMP%]{background-position:0 -3172px}.sprite-flag_LK[_ngcontent-%COMP%]{background-position:0 -3198px}.sprite-flag_LR[_ngcontent-%COMP%]{background-position:0 -3224px}.sprite-flag_LS[_ngcontent-%COMP%]{background-position:0 -3250px}.sprite-flag_LT[_ngcontent-%COMP%]{background-position:0 -3276px}.sprite-flag_LU[_ngcontent-%COMP%]{background-position:0 -3302px}.sprite-flag_LV[_ngcontent-%COMP%]{background-position:0 -3328px}.sprite-flag_LY[_ngcontent-%COMP%]{background-position:0 -3354px}.sprite-flag_MA[_ngcontent-%COMP%]{background-position:0 -3380px}.sprite-flag_MC[_ngcontent-%COMP%]{background-position:0 -3406px}.sprite-flag_MD[_ngcontent-%COMP%]{background-position:0 -3432px}.sprite-flag_MG[_ngcontent-%COMP%]{background-position:0 -3458px}.sprite-flag_MH[_ngcontent-%COMP%]{background-position:0 -3484px}.sprite-flag_MK[_ngcontent-%COMP%]{background-position:0 -3510px}.sprite-flag_ML[_ngcontent-%COMP%]{background-position:0 -3536px}.sprite-flag_MM[_ngcontent-%COMP%]{background-position:0 -3562px}.sprite-flag_MN[_ngcontent-%COMP%]{background-position:0 -3588px}.sprite-flag_MO[_ngcontent-%COMP%]{background-position:0 -3614px}.sprite-flag_MP[_ngcontent-%COMP%]{background-position:0 -3640px}.sprite-flag_MQ[_ngcontent-%COMP%]{background-position:0 -3666px}.sprite-flag_MR[_ngcontent-%COMP%]{background-position:0 -3692px}.sprite-flag_MS[_ngcontent-%COMP%]{background-position:0 -3718px}.sprite-flag_MT[_ngcontent-%COMP%]{background-position:0 -3744px}.sprite-flag_MU[_ngcontent-%COMP%]{background-position:0 -3770px}.sprite-flag_MV[_ngcontent-%COMP%]{background-position:0 -3796px}.sprite-flag_MW[_ngcontent-%COMP%]{background-position:0 -3822px}.sprite-flag_MX[_ngcontent-%COMP%]{background-position:0 -3848px}.sprite-flag_MY[_ngcontent-%COMP%]{background-position:0 -3874px}.sprite-flag_MZ[_ngcontent-%COMP%]{background-position:0 -3900px}.sprite-flag_NA[_ngcontent-%COMP%]{background-position:0 -3926px}.sprite-flag_NC[_ngcontent-%COMP%]{background-position:0 -3952px}.sprite-flag_NE[_ngcontent-%COMP%]{background-position:0 -3978px}.sprite-flag_NF[_ngcontent-%COMP%]{background-position:0 -4004px}.sprite-flag_NG[_ngcontent-%COMP%]{background-position:0 -4030px}.sprite-flag_NI[_ngcontent-%COMP%]{background-position:0 -4056px}.sprite-flag_NL[_ngcontent-%COMP%]{background-position:0 -4082px}.sprite-flag_NO[_ngcontent-%COMP%]{background-position:0 -4108px}.sprite-flag_NP[_ngcontent-%COMP%]{background-position:0 -4134px}.sprite-flag_NR[_ngcontent-%COMP%]{background-position:0 -4160px}.sprite-flag_NU[_ngcontent-%COMP%]{background-position:0 -4186px}.sprite-flag_NZ[_ngcontent-%COMP%]{background-position:0 -4212px}.sprite-flag_OM[_ngcontent-%COMP%]{background-position:0 -4238px}.sprite-flag_PA[_ngcontent-%COMP%]{background-position:0 -4264px}.sprite-flag_PE[_ngcontent-%COMP%]{background-position:0 -4290px}.sprite-flag_PF[_ngcontent-%COMP%]{background-position:0 -4316px}.sprite-flag_PG[_ngcontent-%COMP%]{background-position:0 -4342px}.sprite-flag_PH[_ngcontent-%COMP%]{background-position:0 -4368px}.sprite-flag_PK[_ngcontent-%COMP%]{background-position:0 -4394px}.sprite-flag_PL[_ngcontent-%COMP%]{background-position:0 -4420px}.sprite-flag_PM[_ngcontent-%COMP%]{background-position:0 -4446px}.sprite-flag_PN[_ngcontent-%COMP%]{background-position:0 -4472px}.sprite-flag_PR[_ngcontent-%COMP%]{background-position:0 -4498px}.sprite-flag_PS[_ngcontent-%COMP%]{background-position:0 -4524px}.sprite-flag_PT[_ngcontent-%COMP%]{background-position:0 -4550px}.sprite-flag_PW[_ngcontent-%COMP%]{background-position:0 -4576px}.sprite-flag_PY[_ngcontent-%COMP%]{background-position:0 -4602px}.sprite-flag_QA[_ngcontent-%COMP%]{background-position:0 -4628px}.sprite-flag_RO[_ngcontent-%COMP%]{background-position:0 -4654px}.sprite-flag_RU[_ngcontent-%COMP%]{background-position:0 -4680px}.sprite-flag_RW[_ngcontent-%COMP%]{background-position:0 -4706px}.sprite-flag_SA[_ngcontent-%COMP%]{background-position:0 -4732px}.sprite-flag_SB[_ngcontent-%COMP%]{background-position:0 -4758px}.sprite-flag_SC[_ngcontent-%COMP%]{background-position:0 -4784px}.sprite-flag_SD[_ngcontent-%COMP%]{background-position:0 -4810px}.sprite-flag_SE[_ngcontent-%COMP%]{background-position:0 -4836px}.sprite-flag_SG[_ngcontent-%COMP%]{background-position:0 -4862px}.sprite-flag_SH[_ngcontent-%COMP%]{background-position:0 -4888px}.sprite-flag_SI[_ngcontent-%COMP%]{background-position:0 -4914px}.sprite-flag_SK[_ngcontent-%COMP%]{background-position:0 -4940px}.sprite-flag_SL[_ngcontent-%COMP%]{background-position:0 -4966px}.sprite-flag_SM[_ngcontent-%COMP%]{background-position:0 -4992px}.sprite-flag_SN[_ngcontent-%COMP%]{background-position:0 -5018px}.sprite-flag_SO[_ngcontent-%COMP%]{background-position:0 -5044px}.sprite-flag_SR[_ngcontent-%COMP%]{background-position:0 -5070px}.sprite-flag_ST[_ngcontent-%COMP%]{background-position:0 -5096px}.sprite-flag_SV[_ngcontent-%COMP%]{background-position:0 -5122px}.sprite-flag_SY[_ngcontent-%COMP%]{background-position:0 -5148px}.sprite-flag_SZ[_ngcontent-%COMP%]{background-position:0 -5174px}.sprite-flag_TC[_ngcontent-%COMP%]{background-position:0 -5200px}.sprite-flag_TD[_ngcontent-%COMP%]{background-position:0 -5226px}.sprite-flag_TF[_ngcontent-%COMP%]{background-position:0 -5252px}.sprite-flag_TG[_ngcontent-%COMP%]{background-position:0 -5278px}.sprite-flag_TH[_ngcontent-%COMP%]{background-position:0 -5304px}.sprite-flag_TJ[_ngcontent-%COMP%]{background-position:0 -5330px}.sprite-flag_TK[_ngcontent-%COMP%]{background-position:0 -5356px}.sprite-flag_TL[_ngcontent-%COMP%]{background-position:0 -5382px}.sprite-flag_TM[_ngcontent-%COMP%]{background-position:0 -5408px}.sprite-flag_TN[_ngcontent-%COMP%]{background-position:0 -5434px}.sprite-flag_TO[_ngcontent-%COMP%]{background-position:0 -5460px}.sprite-flag_TR[_ngcontent-%COMP%]{background-position:0 -5486px}.sprite-flag_TT[_ngcontent-%COMP%]{background-position:0 -5512px}.sprite-flag_TV[_ngcontent-%COMP%]{background-position:0 -5538px}.sprite-flag_TW[_ngcontent-%COMP%]{background-position:0 -5564px}.sprite-flag_TZ[_ngcontent-%COMP%]{background-position:0 -5590px}.sprite-flag_UA[_ngcontent-%COMP%]{background-position:0 -5616px}.sprite-flag_UG[_ngcontent-%COMP%]{background-position:0 -5642px}.sprite-flag_US[_ngcontent-%COMP%]{background-position:0 -5668px}.sprite-flag_UY[_ngcontent-%COMP%]{background-position:0 -5694px}.sprite-flag_UZ[_ngcontent-%COMP%]{background-position:0 -5720px}.sprite-flag_VA[_ngcontent-%COMP%]{background-position:0 -5746px}.sprite-flag_VC[_ngcontent-%COMP%]{background-position:0 -5772px}.sprite-flag_VE[_ngcontent-%COMP%]{background-position:0 -5798px}.sprite-flag_VG[_ngcontent-%COMP%]{background-position:0 -5824px}.sprite-flag_VI[_ngcontent-%COMP%]{background-position:0 -5850px}.sprite-flag_VN[_ngcontent-%COMP%]{background-position:0 -5876px}.sprite-flag_VU[_ngcontent-%COMP%]{background-position:0 -5902px}.sprite-flag_WF[_ngcontent-%COMP%]{background-position:0 -5928px}.sprite-flag_WS[_ngcontent-%COMP%]{background-position:0 -5954px}.sprite-flag_YE[_ngcontent-%COMP%]{background-position:0 -5980px}.sprite-flag_ZA[_ngcontent-%COMP%]{background-position:0 -6006px}.sprite-flag_ZM[_ngcontent-%COMP%]{background-position:0 -6032px}.sprite-flag_ZW[_ngcontent-%COMP%]{background-position:0 -6058px}[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{width:100%;padding:20px 10%;background-color:#f0f0f0;text-align:center;position:relative}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;border-radius:0;height:100%;top:0;left:0;padding:20px;background-color:#f0f0f0;color:var(--text-primary)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:20px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{position:relative;width:60%;margin:10% auto 10px;padding:10px;border-radius:11px;box-shadow:0 0 7px #3333}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px;margin-left:auto;margin-right:1%}"]
                    })
                }
                return o
            }
            )(),
            loadChildren: () => l
        }];
        let x = ( () => {
            class o {
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)
                }
                ;
                static #t = this.\u0275mod = n.$C({
                    type: o
                });
                static #o = this.\u0275inj = n.G2t({
                    imports: [r.iI.forChild(q), r.iI]
                })
            }
            return o
        }
        )()
          , H = ( () => {
            class o {
                static #n = this.\u0275fac = function(e) {
                    return new (e || o)
                }
                ;
                static #t = this.\u0275mod = n.$C({
                    type: o
                });
                static #o = this.\u0275inj = n.G2t({
                    imports: [x, x]
                })
            }
            return o
        }
        )()
    }
}]);
