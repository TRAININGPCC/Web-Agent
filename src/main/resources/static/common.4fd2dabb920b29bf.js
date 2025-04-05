"use strict";
(self.webpackChunktts_webagent_web = self.webpackChunktts_webagent_web || []).push([[76], {
    6157: (b, h, e) => {
        e.d(h, {
            L: () => n
        });
        var d = e(4896)
          , t = e(177)
          , _ = e(4438);
        let g = ( () => {
            class l {
                static #t = this.\u0275fac = function(a) {
                    return new (a || l)
                }
                ;
                static #e = this.\u0275mod = _.$C({
                    type: l
                });
                static #a = this.\u0275inj = _.G2t({
                    imports: [t.MD, d.G]
                })
            }
            return l
        }
        )()
          , n = ( () => {
            class l {
                static #t = this.\u0275fac = function(a) {
                    return new (a || l)
                }
                ;
                static #e = this.\u0275mod = _.$C({
                    type: l
                });
                static #a = this.\u0275inj = _.G2t({
                    imports: [t.MD, g, d.G]
                })
            }
            return l
        }
        )()
    }
    ,
    9719: (b, h, e) => {
        e.d(h, {
            y: () => n
        });
        var d = e(9837)
          , t = e(4438);
        let _ = ( () => {
            class l {
                static #t = this.creditCardPatterns = {
                    visa: /^(4[0-9]{12}(?:[0-9]{3})?)$/,
                    mastercard: /^(5[1-5][0-9]{14})$/,
                    amex: /^(3[47][0-9]{13})$/,
                    discover: /^(6(?:011|5[0-9]{2})[0-9]{12})$/,
                    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
                };
                static #e = this.debitCardPatterns = {
                    visadebit: /^(4[012345]\d{2}|4[678]\d{3}|4[9]\d{2}|417500)\d{10}$/,
                    mastercarddebit: /^(51|52|53|54|55|222[1-9]|22[3-9]\d)\d{12}$/,
                    amexdebit: /^(34|37)\d{13}$/,
                    discoverdebit: /^(6011|65|64[4-9]|622)\d{12}$/
                };
                static validateCard(o) {
                    return (o = o.replace(/\D/g, "")).length < 13 || o.length > 19 ? g.InvalidLength : g.ValidCard
                }
                static getCardType(o) {
                    for (const a in this.creditCardPatterns)
                        if (this.creditCardPatterns[a].test(o))
                            return a;
                    for (const a in this.debitCardPatterns)
                        if (this.debitCardPatterns[a].test(o))
                            return a
                }
                static passesLuhnAlgorithm(o) {
                    let a = 0
                      , s = !1;
                    for (let c = o.length - 1; c >= 0; c--) {
                        let u = parseInt(o.charAt(c), 10);
                        s && (u *= 2,
                        u > 9 && (u -= 9)),
                        a += u,
                        s = !s
                    }
                    return a % 10 == 0
                }
                static #a = this.\u0275fac = function(a) {
                    return new (a || l)
                }
                ;
                static #n = this.\u0275prov = t.jDH({
                    token: l,
                    factory: l.\u0275fac,
                    providedIn: "root"
                })
            }
            return l
        }
        )();
        var g = function(l) {
            return l.ValidCard = "ValidCard",
            l.InvalidLength = "InvalidLength",
            l.InvalidLuhnAlgorithm = "InvalidLuhnAlgorithm",
            l.UnknownCardType = "UnknownCardType",
            l
        }(g || {});
        class n {
            constructor(i, o, a, s, c) {
                this.number = "",
                this.name = i,
                this.number = null == o ? "" : o.toString(),
                this.securityCode = a,
                this.expiryDate = s,
                this.cardType = c
            }
            isValid() {
                return "" != this.name && "" != this.number && "" != this.securityCode && "" != this.expiryDate && "" != this.cardType && null != this.expiryDate.match(d.q.expiryDate) && _.validateCard(this.number.toString()) == g.ValidCard
            }
            isDateValid(i) {
                const [o,a] = i.split("/");
                if (!o || !a)
                    return !1;
                const s = parseInt(o, 10)
                  , c = parseInt(a, 10);
                if (isNaN(s) || isNaN(c) || s < 1 || s > 12)
                    return !1;
                const u = (new Date).getFullYear()
                  , r = (new Date).getMonth() + 1;
                return c > u || c === u && s >= r
            }
            equals(i) {
                return i instanceof n && i.name == this.name && i.number == this.number && i.securityCode == this.securityCode && i.expiryDate == this.expiryDate && i.cardType == this.cardType
            }
            copy() {
                return new n(this.name,this.number,this.securityCode,this.expiryDate,this.cardType)
            }
        }
    }
    ,
    1365: (b, h, e) => {
        e.d(h, {
            M: () => d
        });
        var d = function(t) {
            return t.CASH = "CASH",
            t.CREDIT_CARD = "CREDIT_CARD",
            t.NONE = "",
            t
        }(d || {})
    }
    ,
    7596: (b, h, e) => {
        e.d(h, {
            p: () => t
        });
        var d = e(1365);
        class t {
            constructor(g, n, l, i, o) {
                this.ref = g,
                this.type = n,
                this.entityName = l,
                this.creditCard = i,
                this.address = o
            }
            isEmpty() {
                return "" === this.ref && this.type === d.M.CASH && "" === this.entityName && null == this.creditCard && null == this.address
            }
        }
    }
    ,
    6440: (b, h, e) => {
        e.d(h, {
            w: () => g
        });
        var d = e(177)
          , t = e(4896)
          , _ = e(4438);
        let g = ( () => {
            class n {
                static #t = this.\u0275fac = function(o) {
                    return new (o || n)
                }
                ;
                static #e = this.\u0275mod = _.$C({
                    type: n
                });
                static #a = this.\u0275inj = _.G2t({
                    imports: [d.MD, t.G]
                })
            }
            return n
        }
        )()
    }
    ,
    8582: (b, h, e) => {
        e.d(h, {
            V: () => o
        });
        var d = e(467)
          , t = e(4438)
          , _ = e(3077)
          , g = e(2791)
          , n = e(177)
          , l = e(3955);
        const i = (a, s) => ({
            complete: a,
            current: s
        });
        let o = ( () => {
            class a {
                constructor(c, u) {
                    this.reservationService = c,
                    this.router = u,
                    this.promiseTest = Promise.resolve(!1),
                    this.fundsChecked = !1,
                    this.airCheckoutDetails = !1,
                    this.travellerDetailsValid = !1,
                    this.airCheckoutPrice = !1,
                    this.booking = !1,
                    this.reservationProcess$ = this.reservationService.getProgress(),
                    this.reservationProcess$.subscribe({
                        next: r => {
                            r.FUNDS_CHECKED.then(M => this.fundsChecked = M),
                            r.AIR_CHECKOUT_DETAILS.then(M => this.airCheckoutDetails = M),
                            r.TRAVELLER_DETAILS_VALID.then(M => this.travellerDetailsValid = M),
                            r.AIR_CHECKOUT_PRICE.then(M => this.airCheckoutPrice = M),
                            r.BOOKING.then(M => this.booking = M)
                        }
                    })
                }
                getPromiseValue(c) {
                    return (0,
                    d.A)(function*() {
                        return c
                    })()
                }
                goTo(c, u) {
                    u && this.router.navigateByUrl(c)
                }
                static #t = this.\u0275fac = function(u) {
                    return new (u || a)(t.rXU(_.E),t.rXU(g.Ix))
                }
                ;
                static #e = this.\u0275cmp = t.VBU({
                    type: a,
                    selectors: [["reservation-state"]],
                    decls: 12,
                    vars: 30,
                    consts: [[1, "phase", 3, "click", "ngClass"]],
                    template: function(u, r) {
                        1 & u && (t.j41(0, "div", 0),
                        t.nI1(1, "translate"),
                        t.bIt("click", function() {
                            return r.goTo("neo/travellers", r.travellerDetailsValid)
                        }),
                        t.EFF(2),
                        t.nI1(3, "translate"),
                        t.k0s(),
                        t.j41(4, "div", 0),
                        t.nI1(5, "translate"),
                        t.bIt("click", function() {
                            return r.goTo("neo/checkout", r.airCheckoutPrice)
                        }),
                        t.EFF(6),
                        t.nI1(7, "translate"),
                        t.k0s(),
                        t.j41(8, "div", 0),
                        t.nI1(9, "translate"),
                        t.bIt("click", function() {
                            return r.goTo("neo/finish-booking", r.booking)
                        }),
                        t.EFF(10),
                        t.nI1(11, "translate"),
                        t.k0s()),
                        2 & u && (t.Y8G("ngClass", t.l_i(21, i, r.travellerDetailsValid, !r.travellerDetailsValid && r.airCheckoutDetails)),
                        t.BMQ("data-content", t.bMT(1, 9, "TRAVELLER_DETAILS")),
                        t.R7$(2),
                        t.SpI(" ", t.bMT(3, 11, "TRAVELLERS_DETAILS"), " "),
                        t.R7$(2),
                        t.Y8G("ngClass", t.l_i(24, i, r.airCheckoutPrice, !r.airCheckoutPrice && r.travellerDetailsValid)),
                        t.BMQ("data-content", t.bMT(5, 13, "CHECKOUT")),
                        t.R7$(2),
                        t.SpI(" ", t.bMT(7, 15, "CHECKOUT"), "\n"),
                        t.R7$(2),
                        t.Y8G("ngClass", t.l_i(27, i, r.booking, !r.booking && r.airCheckoutPrice)),
                        t.BMQ("data-content", t.bMT(9, 17, "RESERVATION_SUMMARY")),
                        t.R7$(2),
                        t.SpI(" ", t.bMT(11, 19, "RESERVATION_SUMMARY"), "\n"))
                    },
                    dependencies: [n.YU, l.D9],
                    styles: ['[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;background-color:var(--lightest-blue);margin-top:20px}[_nghost-%COMP%]   .phase[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center;justify-content:center;height:2rem;position:relative}[_nghost-%COMP%]   .phase[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;right:0;top:0;width:40px;height:100%;z-index:999;clip-path:polygon(0 0,50% 50%,0 100%);transform:translate(100%);background-color:var(--lightest-blue);margin-right:1px}[_nghost-%COMP%]   .phase.complete[_ngcontent-%COMP%]{background-color:#c8d8e9;border-radius:0;color:var(--phase-color-complete);cursor:pointer}[_nghost-%COMP%]   .phase.complete[_ngcontent-%COMP%]:after{background-color:#c8d8e9;z-index:9999}[_nghost-%COMP%]   .phase.current[_ngcontent-%COMP%]{background-color:#c8d8e9;color:#fff;border-top-right-radius:32px;border-bottom-right-radius:32px;position:relative;z-index:0}[_nghost-%COMP%]   .phase.current[_ngcontent-%COMP%]:before{content:attr(data-content);width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;z-index:99;background-color:var(--phase-color-complete)}[_nghost-%COMP%]   .phase.current[_ngcontent-%COMP%]:after{background-color:var(--phase-color-complete)}@media (max-width: 800px){[_nghost-%COMP%]   .phase[_ngcontent-%COMP%]{width:200px;font-size:.75rem}[_nghost-%COMP%]   .phase.current[_ngcontent-%COMP%]:before{font-size:.75rem}}']
                })
            }
            return a
        }
        )()
    }
    ,
    224: (b, h, e) => {
        e.d(h, {
            w: () => g
        });
        var d = e(177)
          , t = e(4896)
          , _ = e(4438);
        let g = ( () => {
            class n {
                static #t = this.\u0275fac = function(o) {
                    return new (o || n)
                }
                ;
                static #e = this.\u0275mod = _.$C({
                    type: n
                });
                static #a = this.\u0275inj = _.G2t({
                    imports: [d.MD, t.G]
                })
            }
            return n
        }
        )()
    }
    ,
    8688: (b, h, e) => {
        e.d(h, {
            I: () => l
        });
        var d = e(177)
          , t = e(4896)
          , _ = e(6517)
          , g = e(224)
          , n = e(4438);
        let l = ( () => {
            class i {
                static #t = this.\u0275fac = function(s) {
                    return new (s || i)
                }
                ;
                static #e = this.\u0275mod = n.$C({
                    type: i
                });
                static #a = this.\u0275inj = n.G2t({
                    imports: [d.MD, _.y, g.w, t.G]
                })
            }
            return i
        }
        )()
    }
    ,
    8584: (b, h, e) => {
        e.d(h, {
            s: () => d
        });
        var d = function(t) {
            return t.YESTERDAY = "YESTERDAY",
            t.LAST_7_DAYS = "LAST_7_DAYS",
            t.LAST_30_DAYS = "LAST_30_DAYS",
            t.LAST_90_DAYS = "LAST_90_DAYS",
            t.THIS_YEAR = "THIS_YEAR",
            t.ALL_TIME = "ALL_TIME",
            t.CUSTOM = "CUSTOM",
            t
        }(d || {})
    }
    ,
    8488: (b, h, e) => {
        e.d(h, {
            TP: () => t,
            iF: () => g
        });
        class t {
        }
        var g = function(n) {
            return n[n.ORIGIN = 0] = "ORIGIN",
            n[n.DESTINATION = 1] = "DESTINATION",
            n
        }(g || {})
    }
    ,
    3179: (b, h, e) => {
        e.d(h, {
            a: () => u
        });
        var d = e(177)
          , t = e(4438)
          , _ = e(9417)
          , g = e(6600)
          , n = e(5084)
          , l = e(2102)
          , i = e(9631)
          , o = e(3955)
          , a = e(9203)
          , s = e(1463)
          , c = e(6437);
        let u = ( () => {
            class r {
                constructor(p) {
                    this.authService = p,
                    this.dateRangeChange = new t.bkB,
                    this.minDate = new Date((new Date).setFullYear(2e3)),
                    this.maxDate = new Date,
                    this.selectedOption = "last90Days",
                    this.today = new Date,
                    this.startDate = new Date((new Date).setDate((new Date).getDate() - 90)),
                    this.finalDate = new Date,
                    this._adapter = (0,
                    t.WQX)(g.MJ),
                    this._intl = (0,
                    t.WQX)(n.qG),
                    this.authService.getUser(!0).subscribe(D => {
                        D instanceof s.$ && D.settings && (this.userLanguage = D.settings.languageCode,
                        this.updateLocale(this.userLanguage))
                    }
                    )
                }
                ngAfterViewInit() {
                    this.dateRangeChange.emit({
                        startDate: this.startDate,
                        finalDate: this.finalDate
                    })
                }
                updateLocale(p) {
                    this._adapter.setLocale(p),
                    this._intl.changes.next()
                }
                onSelectChange() {
                    const p = new Date;
                    switch (this.finalDate = new Date,
                    this.selectedOption) {
                    case "yesterday":
                        this.startDate = new Date(p.setDate(p.getDate() - 1));
                        break;
                    case "last7Days":
                        this.startDate = new Date(p.setDate(p.getDate() - 7));
                        break;
                    case "last30Days":
                        this.startDate = new Date(p.setDate(p.getDate() - 30));
                        break;
                    case "last90Days":
                        this.startDate = new Date(p.setDate(p.getDate() - 90));
                        break;
                    case "lastYear":
                        this.startDate = new Date(p.setFullYear(p.getFullYear() - 1));
                        break;
                    default:
                        this.startDate = null,
                        this.finalDate = null
                    }
                    this.dateRangeChange.emit({
                        startDate: this.startDate,
                        finalDate: this.finalDate
                    })
                }
                dateHasChange() {
                    this.selectedOption = "",
                    this.startDate && this.finalDate && this.finalDate < this.startDate && (this.startDate = null),
                    this.startDate && this.finalDate && this.dateRangeChange.emit({
                        startDate: this.startDate,
                        finalDate: this.finalDate
                    })
                }
                static #t = this.\u0275fac = function(D) {
                    return new (D || r)(t.rXU(c.u))
                }
                ;
                static #e = this.\u0275cmp = t.VBU({
                    type: r,
                    selectors: [["filters-date-range-with-options"]],
                    outputs: {
                        dateRangeChange: "dateRangeChange"
                    },
                    standalone: !0,
                    features: [t.Jv_([{
                        provide: g.Ju,
                        useValue: "pt-PT"
                    }, {
                        provide: g.de,
                        useValue: a.h
                    }, (0,
                    g.aw)()]), t.aNF],
                    decls: 38,
                    vars: 33,
                    consts: [["starterDate", ""], ["endDate", ""], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "yesterday"], ["value", "last7Days"], ["value", "last30Days"], ["value", "last90Days", "selected", ""], ["value", "lastYear"], [1, "date-picker-container"], [1, "date-input"], ["matInput", "", "placeholder", "DD/MM/YYYY", 3, "ngModelChange", "click", "focus", "dateChange", "matDatepicker", "min", "max", "ngModel"]],
                    template: function(D, C) {
                        if (1 & D) {
                            const P = t.RV6();
                            t.j41(0, "select", 2),
                            t.mxI("ngModelChange", function(m) {
                                return t.eBV(P),
                                t.DH7(C.selectedOption, m) || (C.selectedOption = m),
                                t.Njj(m)
                            }),
                            t.bIt("change", function() {
                                return t.eBV(P),
                                t.Njj(C.onSelectChange())
                            }),
                            t.j41(1, "option", 3),
                            t.EFF(2),
                            t.nI1(3, "translate"),
                            t.k0s(),
                            t.j41(4, "option", 4),
                            t.EFF(5),
                            t.nI1(6, "translate"),
                            t.k0s(),
                            t.j41(7, "option", 5),
                            t.EFF(8),
                            t.nI1(9, "translate"),
                            t.k0s(),
                            t.j41(10, "option", 6),
                            t.EFF(11),
                            t.nI1(12, "translate"),
                            t.k0s(),
                            t.j41(13, "option", 7),
                            t.EFF(14),
                            t.nI1(15, "translate"),
                            t.k0s(),
                            t.j41(16, "option", 8),
                            t.EFF(17),
                            t.nI1(18, "translate"),
                            t.k0s()(),
                            t.j41(19, "div", 9)(20, "div")(21, "label"),
                            t.EFF(22),
                            t.nI1(23, "translate"),
                            t.k0s(),
                            t.j41(24, "div", 10)(25, "mat-form-field")(26, "input", 11),
                            t.mxI("ngModelChange", function(m) {
                                return t.eBV(P),
                                t.DH7(C.startDate, m) || (C.startDate = m),
                                t.Njj(m)
                            }),
                            t.bIt("click", function() {
                                t.eBV(P);
                                const m = t.sdS(28);
                                return t.Njj(m.open())
                            })("focus", function() {
                                t.eBV(P);
                                const m = t.sdS(28);
                                return t.Njj(m.open())
                            })("dateChange", function() {
                                return t.eBV(P),
                                t.Njj(C.dateHasChange())
                            }),
                            t.k0s(),
                            t.nrm(27, "mat-datepicker", null, 0),
                            t.k0s()()(),
                            t.j41(29, "div")(30, "label"),
                            t.EFF(31),
                            t.nI1(32, "translate"),
                            t.k0s(),
                            t.j41(33, "div", 10)(34, "mat-form-field")(35, "input", 11),
                            t.mxI("ngModelChange", function(m) {
                                return t.eBV(P),
                                t.DH7(C.finalDate, m) || (C.finalDate = m),
                                t.Njj(m)
                            }),
                            t.bIt("click", function() {
                                t.eBV(P);
                                const m = t.sdS(37);
                                return t.Njj(m.open())
                            })("focus", function() {
                                t.eBV(P);
                                const m = t.sdS(37);
                                return t.Njj(m.open())
                            })("dateChange", function() {
                                return t.eBV(P),
                                t.Njj(C.dateHasChange())
                            }),
                            t.k0s(),
                            t.nrm(36, "mat-datepicker", null, 1),
                            t.k0s()()()()
                        }
                        if (2 & D) {
                            const P = t.sdS(28)
                              , O = t.sdS(37);
                            t.R50("ngModel", C.selectedOption),
                            t.R7$(2),
                            t.JRh(t.bMT(3, 17, "CUSTOM")),
                            t.R7$(3),
                            t.JRh(t.bMT(6, 19, "YESTERDAY")),
                            t.R7$(3),
                            t.JRh(t.bMT(9, 21, "LAST_7_DAYS")),
                            t.R7$(3),
                            t.JRh(t.bMT(12, 23, "LAST_30_DAYS")),
                            t.R7$(3),
                            t.JRh(t.bMT(15, 25, "LAST_90_DAYS")),
                            t.R7$(3),
                            t.JRh(t.bMT(18, 27, "THIS_YEAR")),
                            t.R7$(5),
                            t.JRh(t.bMT(23, 29, "FROM")),
                            t.R7$(4),
                            t.Y8G("matDatepicker", P)("min", C.minDate)("max", C.finalDate),
                            t.R50("ngModel", C.startDate),
                            t.R7$(5),
                            t.JRh(t.bMT(32, 31, "TO_DATE")),
                            t.R7$(4),
                            t.Y8G("matDatepicker", O)("min", C.minDate)("max", C.maxDate),
                            t.R50("ngModel", C.finalDate)
                        }
                    },
                    dependencies: [l.RG, l.rl, n.X6, n.Vh, n.bZ, g.WX, i.fS, i.fg, _.YN, _.xH, _.y7, _.me, _.wz, _.BC, _.vS, o.h, o.D9, d.MD],
                    styles: ["[_nghost-%COMP%]   select[_ngcontent-%COMP%]{height:40px;width:100%;padding:10px;border:none;box-shadow:0 0 2px var(--text-primary);border-radius:5px;color:var(--text-primary);font-size:.75rem;cursor:pointer}[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--text-primary)}[_nghost-%COMP%]   .date-picker-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:10px;padding:10px 0}[_nghost-%COMP%]   .date-picker-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:120px!important;position:relative}[_nghost-%COMP%]   .date-picker-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;transform:translateY(-50%);margin-left:23px;left:0;background-color:#fff;padding:0 5px;color:var(--text-primary-rgba);font-weight:500;z-index:1}[_nghost-%COMP%]   .date-picker-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%]{width:100%;box-shadow:0 0 2px var(--text-primary);border-radius:5px}[_nghost-%COMP%]   .date-picker-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;height:40px;font-size:.75rem;color:var(--text-primary)!important}@media only screen and (max-width: 800px){[_nghost-%COMP%]{flex-direction:column}}"],
                    changeDetection: 0
                })
            }
            return r
        }
        )()
    }
    ,
    1379: (b, h, e) => {
        e.d(h, {
            D: () => d
        });
        const d = {
            AF: "Afghanistan",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AG: "Antigua And Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            BA: "Bosnia And Herzegovina",
            BW: "Botswana",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo, The Democratic Republic Of The",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "C\xd4te D'ivoire",
            HR: "Croatia",
            CU: "Cuba",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-bissau",
            GY: "Guyana",
            HT: "Haiti",
            VA: "Holy See (vatican City State)",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran, Islamic Republic Of",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle Of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KP: "Korea, Democratic People's Republic Of",
            KR: "Korea, Republic Of",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Lao People's Democratic Republic",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libyan Arab Jamahiriya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MK: "Macedonia, The Former Yugoslav Republic Of",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            MX: "Mexico",
            FM: "Micronesia, Federated States Of",
            MD: "Moldova",
            MC: "Monaco",
            MN: "Mongolia",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            AN: "Netherlands Antilles",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestinian Territory, Occupied",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            SH: "Saint Helena",
            KN: "Saint Kitts And Nevis",
            LC: "Saint Lucia",
            PM: "Saint Pierre And Miquelon",
            VC: "Saint Vincent And The Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome And Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            CS: "Serbien und Montenegro",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia And The South Sandwich Islands",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan, Province Of China",
            TJ: "Tajikistan",
            TZ: "Tanzania, United Republic Of",
            TH: "Thailand",
            TL: "Timor-leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad And Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks And Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            US: "United States",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela",
            VN: "Viet Nam",
            VG: "Virgin Islands, British",
            VI: "Virgin Islands, U.s.",
            WF: "Wallis And Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        }
    }
    ,
    8994: (b, h, e) => {
        e.d(h, {
            j: () => d
        });
        const d = {
            Afghanistan: "93",
            Albania: "355",
            Algeria: "213",
            "American Samoa": "1-684",
            Andorra: "376",
            Angola: "244",
            Anguilla: "1-264",
            Antarctica: "00672",
            "Antigua and Barbuda": "1-268",
            Argentina: "54",
            Armenia: "374",
            Aruba: "297",
            Australia: "61",
            Austria: "43",
            Azerbaijan: "994",
            Bahamas: "1-242",
            Bahrain: "973",
            Bangladesh: "880",
            Barbados: "1-246",
            Belarus: "375",
            Belgium: "32",
            Belize: "501",
            Benin: "229",
            Bermuda: "1-441",
            Bhutan: "975",
            Bolivia: "591",
            "Bonaire, Saint Eustatius and Saba": "599",
            "Bosnia and Herzegovina": "387",
            Botswana: "267",
            "Bouvet Island": "47",
            Brazil: "55",
            "British Indian Ocean Territory": "246",
            "British Virgin Islands": "1-284",
            Brunei: "673",
            Bulgaria: "359",
            "Burkina Faso": "226",
            Burundi: "257",
            Cambodia: "855",
            Cameroon: "237",
            Canada: "1",
            "Cape Verde": "238",
            "Cayman Islands": "1-345",
            "Central African Republic": "236",
            Chad: "235",
            Chile: "56",
            China: "86",
            "Christmas Island": "61",
            "Cocos Islands": "0061",
            Colombia: "57",
            Comoros: "269",
            "Cook Islands": "682",
            "Costa Rica": "506",
            Croatia: "385",
            Cuba: "53",
            Curacao: "00599",
            Cyprus: "357",
            "Czech Republic": "420",
            "Democratic Republic of the Congo": "243",
            Denmark: "45",
            Djibouti: "253",
            Dominica: "1-767",
            "Dominican Republic": "1-809",
            "East Timor": "670",
            Ecuador: "593",
            Egypt: "20",
            "El Salvador": "503",
            "Equatorial Guinea": "240",
            Eritrea: "291",
            Estonia: "372",
            Eswatini: "268",
            Ethiopia: "251",
            "Falkland Islands": "500",
            "Faroe Islands": "298",
            Fiji: "679",
            Finland: "358",
            France: "33",
            "French Guiana": "594",
            "French Polynesia": "689",
            "French Southern Territories": "262",
            Gabon: "241",
            Gambia: "220",
            Georgia: "995",
            Germany: "49",
            Ghana: "233",
            Gibraltar: "350",
            Greece: "30",
            Greenland: "299",
            Grenada: "1-473",
            Guadeloupe: "590",
            Guam: "1-671",
            Guatemala: "502",
            Guernsey: "44-1481",
            Guinea: "224",
            "Guinea-Bissau": "245",
            Guyana: "592",
            Haiti: "509",
            "Heard Island and McDonald Islands": "",
            Honduras: "504",
            "Hong Kong": "852",
            Hungary: "36",
            Iceland: "354",
            India: "91",
            Indonesia: "62",
            Iran: "98",
            Iraq: "964",
            Ireland: "353",
            "Isle of Man": "44-1624",
            Israel: "972",
            Italy: "39",
            "Ivory Coast": "225",
            Jamaica: "1-876",
            Japan: "81",
            Jersey: "44-1534",
            Jordan: "962",
            Kazakhstan: "007",
            Kenya: "254",
            Kiribati: "686",
            Kosovo: "00383",
            Kuwait: "965",
            Kyrgyzstan: "996",
            Laos: "856",
            Latvia: "371",
            Lebanon: "961",
            Lesotho: "266",
            Liberia: "231",
            Libya: "218",
            Liechtenstein: "423",
            Lithuania: "370",
            Luxembourg: "352",
            Macau: "853",
            Macedonia: "389",
            Madagascar: "261",
            Malawi: "265",
            Malaysia: "60",
            Maldives: "960",
            Mali: "223",
            Malta: "356",
            "Marshall Islands": "692",
            Martinique: "596",
            Mauritania: "222",
            Mauritius: "230",
            Mayotte: "262",
            Mexico: "52",
            Moldova: "373",
            Monaco: "377",
            Mongolia: "976",
            Montenegro: "382",
            Montserrat: "1-664",
            Morocco: "00212",
            Mozambique: "258",
            Myanmar: "95",
            Namibia: "264",
            Nauru: "674",
            Nepal: "977",
            Netherlands: "31",
            "New Caledonia": "687",
            "New Zealand": "64",
            Nicaragua: "505",
            Niger: "227",
            Nigeria: "234",
            Niue: "683",
            "Norfolk Island": "672",
            "North Korea": "850",
            "North Macedonia": "389",
            "Northern Mariana Islands": "1-670",
            Norway: "47",
            Oman: "968",
            Pakistan: "92",
            Palau: "680",
            "Palestinian Territory": "970",
            Panama: "507",
            "Papua New Guinea": "675",
            Paraguay: "595",
            Peru: "51",
            Philippines: "63",
            Pitcairn: "870",
            Poland: "48",
            Portugal: "351",
            "Puerto Rico": "1-800",
            Qatar: "974",
            "Republic of the Congo": "242",
            Reunion: "00262",
            Romania: "40",
            Russia: "7",
            Rwanda: "250",
            "Saint Barthelemy": "00590",
            "Saint Helena": "290",
            "Saint Kitts and Nevis": "1-869",
            "Saint Lucia": "1-758",
            "Saint Martin": "590",
            "Saint Pierre and Miquelon": "508",
            "Saint Vincent and the Grenadines": "1-784",
            Samoa: "685",
            "San Marino": "378",
            "Sao Tome and Principe": "239",
            "Saudi Arabia": "966",
            Senegal: "221",
            Serbia: "381",
            Seychelles: "248",
            "Sierra Leone": "232",
            Singapore: "65",
            "Sint Maarten": "599",
            Slovakia: "421",
            Slovenia: "386",
            "Solomon Islands": "677",
            Somalia: "252",
            "South Africa": "27",
            "South Georgia and the South Sandwich Islands": "00500",
            "South Korea": "82",
            "South Sudan": "211",
            Spain: "34",
            "Sri Lanka": "94",
            Sudan: "249",
            Suriname: "597",
            "Svalbard and Jan Mayen": "0047",
            Sweden: "46",
            Switzerland: "41",
            Syria: "963",
            Taiwan: "886",
            Tajikistan: "992",
            Tanzania: "255",
            Thailand: "66",
            "Timor-Leste": "670",
            Togo: "228",
            Tokelau: "690",
            Tonga: "676",
            "Trinidad and Tobago": "1-868",
            Tunisia: "216",
            Turkey: "90",
            Turkmenistan: "993",
            "Turks and Caicos Islands": "1-649",
            Tuvalu: "688",
            "U.S. Virgin Islands": "1-340",
            Uganda: "256",
            Ukraine: "380",
            "United Arab Emirates": "971",
            "United Kingdom": "44",
            "United States": "001",
            "United States Minor Outlying Islands": "1",
            Uruguay: "598",
            Uzbekistan: "998",
            Vanuatu: "678",
            Vatican: "379",
            Venezuela: "58",
            Vietnam: "84",
            "Wallis and Futuna": "681",
            "Western Sahara": "212",
            Yemen: "967",
            Zambia: "260",
            Zimbabwe: "263"
        }
    }
    ,
    3880: (b, h, e) => {
        e.d(h, {
            f: () => l
        });
        var d = e(177)
          , t = e(4438);
        const _ = ["tabsList"];
        function g(i, o) {
            1 & i && (t.j41(0, "div", 11)(1, "div", 12),
            t.nrm(2, "div", 13),
            t.k0s(),
            t.j41(3, "div", 14),
            t.nrm(4, "div", 15),
            t.k0s()())
        }
        function n(i, o) {
            if (1 & i) {
                const a = t.RV6();
                t.j41(0, "li", 9),
                t.bIt("click", function(c) {
                    const u = t.eBV(a)
                      , r = u.$implicit
                      , M = u.index
                      , p = t.XpG();
                    return t.Njj(p.setActiveTab(r.route, M, r.segIndex, c))
                }),
                t.j41(1, "a"),
                t.EFF(2),
                t.k0s(),
                t.DNE(3, g, 5, 0, "div", 10),
                t.k0s()
            }
            if (2 & i) {
                const a = o.$implicit
                  , s = t.XpG();
                t.AVh("active", s.activeTab === a.route),
                t.R7$(),
                t.AVh("active", s.activeTab === a.route),
                t.R7$(),
                t.JRh(a.route),
                t.R7$(),
                t.Y8G("ngIf", s.activeTab === a.route)
            }
        }
        let l = ( () => {
            class i {
                constructor() {
                    this.airSegmentChange = new t.bkB,
                    this.resizeObserver = new ResizeObserver( () => this.manageIcons())
                }
                ngAfterViewInit() {
                    setTimeout( () => {
                        this.manageIcons(),
                        this.activeTab = this.tabs[0].route,
                        this.tabsList && this.tabsList.nativeElement && this.resizeObserver.observe(this.tabsList.nativeElement)
                    }
                    )
                }
                scrollLeft() {
                    this.tabsList.nativeElement.scrollLeft -= 200,
                    this.manageIcons()
                }
                setActiveTab(a, s, c, u) {
                    this.activeTab = a,
                    this.airSegmentChange.emit({
                        tabIndex: s,
                        segIndex: c
                    }),
                    u.target.scrollIntoView({
                        behavior: "smooth",
                        inline: "center"
                    })
                }
                scrollRight() {
                    this.tabsList.nativeElement.scrollLeft += 200,
                    this.manageIcons()
                }
                manageIcons() {
                    const s = this.tabsList.nativeElement.nextElementSibling;
                    this.tabsList.nativeElement.previousElementSibling.classList.toggle("active", this.tabsList.nativeElement.scrollLeft >= 20),
                    s.classList.toggle("active", this.tabsList.nativeElement.scrollLeft < this.tabsList.nativeElement.scrollWidth - this.tabsList.nativeElement.clientWidth - 20)
                }
                static #t = this.\u0275fac = function(s) {
                    return new (s || i)
                }
                ;
                static #e = this.\u0275cmp = t.VBU({
                    type: i,
                    selectors: [["app-slider-tabs"]],
                    viewQuery: function(s, c) {
                        if (1 & s && t.GBs(_, 5),
                        2 & s) {
                            let u;
                            t.mGM(u = t.lsd()) && (c.tabsList = u.first)
                        }
                    },
                    inputs: {
                        tabs: "tabs"
                    },
                    outputs: {
                        airSegmentChange: "airSegmentChange"
                    },
                    standalone: !0,
                    features: [t.aNF],
                    decls: 10,
                    vars: 1,
                    consts: [["tabsList", ""], [1, "scrollable-tabs-container"], [1, "left-arrow-gradient", 3, "click"], [1, "arrow"], [1, "fa-solid", "fa-chevron-left"], [3, "scroll"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "right-arrow-gradient", 3, "click"], [1, "fa-solid", "fa-chevron-right"], [3, "click"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "square-left"], [1, "ellipse-cut-left"], [1, "square-right"], [1, "ellipse-cut-right"]],
                    template: function(s, c) {
                        if (1 & s) {
                            const u = t.RV6();
                            t.j41(0, "div", 1)(1, "div", 2),
                            t.bIt("click", function() {
                                return t.eBV(u),
                                t.Njj(c.scrollLeft())
                            }),
                            t.j41(2, "div", 3),
                            t.nrm(3, "i", 4),
                            t.k0s()(),
                            t.j41(4, "ul", 5, 0),
                            t.bIt("scroll", function() {
                                return t.eBV(u),
                                t.Njj(c.manageIcons())
                            }),
                            t.DNE(6, n, 4, 6, "li", 6),
                            t.k0s(),
                            t.j41(7, "div", 7),
                            t.bIt("click", function() {
                                return t.eBV(u),
                                t.Njj(c.scrollRight())
                            }),
                            t.j41(8, "div", 3),
                            t.nrm(9, "i", 8),
                            t.k0s()()()
                        }
                        2 & s && (t.R7$(6),
                        t.Y8G("ngForOf", c.tabs))
                    },
                    dependencies: [d.MD, d.Sq, d.bT],
                    styles: ["[_nghost-%COMP%]{--tab-bottom-border-radius: 12px }.scrollable-tabs-container[_ngcontent-%COMP%]{background:var(--text-primary);border-radius:8px;overflow:hidden;position:relative}.scrollable-tabs-container[_ngcontent-%COMP%]   .left-arrow-gradient[_ngcontent-%COMP%], .scrollable-tabs-container[_ngcontent-%COMP%]   .right-arrow-gradient[_ngcontent-%COMP%]{position:absolute;height:100%;width:100px;top:0;display:none;align-items:center;padding:0 10px;pointer-events:auto;z-index:1}.scrollable-tabs-container[_ngcontent-%COMP%]   .left-arrow-gradient[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .scrollable-tabs-container[_ngcontent-%COMP%]   .right-arrow-gradient[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{width:24px;height:24px;padding:8px;cursor:pointer;color:#fff;border-radius:50%;pointer-events:auto;display:flex;align-items:center}.scrollable-tabs-container[_ngcontent-%COMP%]   .left-arrow-gradient[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover, .scrollable-tabs-container[_ngcontent-%COMP%]   .right-arrow-gradient[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover{transform:scale(1.3)}.scrollable-tabs-container[_ngcontent-%COMP%]   .left-arrow-gradient.active[_ngcontent-%COMP%], .scrollable-tabs-container[_ngcontent-%COMP%]   .right-arrow-gradient.active[_ngcontent-%COMP%]{display:flex}.scrollable-tabs-container[_ngcontent-%COMP%]   .left-arrow-gradient[_ngcontent-%COMP%]{background:linear-gradient(to right,var(--text-primary) 50%,transparent)}.scrollable-tabs-container[_ngcontent-%COMP%]   .right-arrow-gradient[_ngcontent-%COMP%]{right:0;background:linear-gradient(to left,var(--text-primary) 50%,transparent);justify-content:flex-end}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;gap:16px;padding:6px 50px 0;margin:0;list-style:none;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;scroll-behavior:smooth}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;height:34px;background-color:var(--text-primary);border-top-left-radius:8px;border-top-right-radius:8px}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#fff;color:var(--text-primary);border-bottom-left-radius:0;border-bottom-right-radius:0}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active){cursor:pointer}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover   a[_ngcontent-%COMP%]{background-color:var(--Pale-Sky-Blue);color:var(--text-primary)}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;background:var(--text-primary);padding:4px 24px;display:inline-block;-webkit-user-select:none;user-select:none;white-space:nowrap;cursor:pointer;height:28px;border-radius:8px}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#fff;color:var(--text-primary)}.scrollable-tabs-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;height:var(--tab-bottom-border-radius);position:absolute;bottom:0}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .square-left[_ngcontent-%COMP%], .scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .square-right[_ngcontent-%COMP%]{width:var(--tab-bottom-border-radius);height:var(--tab-bottom-border-radius);background-color:#fff;position:absolute}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .square-left[_ngcontent-%COMP%]{left:calc(-1 * var(--tab-bottom-border-radius))}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .square-right[_ngcontent-%COMP%]{right:calc(-1 * var(--tab-bottom-border-radius))}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .ellipse-cut-left[_ngcontent-%COMP%], .scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .ellipse-cut-right[_ngcontent-%COMP%]{position:absolute;top:0;width:var(--tab-bottom-border-radius);height:var(--tab-bottom-border-radius);background-color:var(--text-primary);transform:scale(1);will-change:transform}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .ellipse-cut-left[_ngcontent-%COMP%]{left:0;clip-path:ellipse(100% 100% at 0% 0%)}.scrollable-tabs-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .ellipse-cut-right[_ngcontent-%COMP%]{right:0;clip-path:ellipse(100% 100% at 100% 0%)}"]
                })
            }
            return i
        }
        )()
    }
}]);
