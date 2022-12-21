(this['webpackJsonpstatus-icon-generator'] = this['webpackJsonpstatus-icon-generator'] || []).push([
    [0],
    {
        110: function (e, t) {},
        280: function (e, t, n) {},
        281: function (e, t, n) {
            'use strict';
            n.r(t);
            var a = n(304),
                r = n(0),
                o = n(150),
                c = n.n(o),
                i = n(299),
                s = n(306),
                l = n(295),
                u = n(300),
                d = n(301),
                h = n(302),
                j = n(308),
                x = n(305),
                b = n(8),
                f = n.n(b),
                p = n(16),
                g = n(2),
                v = n(291),
                m = n(10),
                O = n(79),
                w = n.n(O),
                k = n(57),
                y = function (e) {
                    return new Promise(function (t, n) {
                        var a = new XMLHttpRequest();
                        a.open('GET', e, !0),
                            (a.responseType = 'arraybuffer'),
                            (a.onload = function () {
                                var e = a.response;
                                t(e);
                            }),
                            (a.onerror = function () {
                                n();
                            }),
                            a.send(null);
                    });
                },
                C = n(3),
                S = 'var(--chakra-colors-gray-600)',
                B = 'var(--chakra-colors-gray-700)',
                I = function () {
                    var e = Object(m.f)('backgroundColor'),
                        t = Object(g.a)(e, 1)[0],
                        n = Object(m.f)('text'),
                        a = Object(g.a)(n, 1)[0],
                        o = Object(r.useState)(),
                        c = Object(g.a)(o, 2),
                        i = c[0],
                        s = c[1];
                    return (
                        Object(r.useEffect)(function () {
                            (function () {
                                var e = Object(p.a)(
                                    f.a.mark(function e() {
                                        var t;
                                        return f.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), y('Roboto-Regular.ttf');
                                                    case 2:
                                                        (t = e.sent), s(new w.a(Object(k.parse)(t)));
                                                    case 4:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }, []),
                        Object(C.jsx)(v.a, {
                            backgroundImage: 'linear-gradient('
                                .concat(S, ' 2px, transparent 2px), linear-gradient(90deg, ')
                                .concat(S, ' 2px, transparent 1px), linear-gradient(')
                                .concat(B, ' 1px, transparent 1px), linear-gradient(90deg, ')
                                .concat(B, ' 1px, transparent 1px);'),
                            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                            backgroundPosition: '-50px -50px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 500,
                            height: 500,
                            children: Object(C.jsxs)('svg', {
                                width: 250,
                                height: 250,
                                viewBox: '0 0 30 30',
                                fill: t,
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                    Object(C.jsx)('rect', { width: '30', height: '30', rx: '2', fill: 'inherit' }),
                                    Object(C.jsx)('path', {
                                        fill: '#fff',
                                        d:
                                            null === i || void 0 === i
                                                ? void 0
                                                : i.getD(a, { fontSize: 16, x: 15, y: 15, anchor: 'center middle' }),
                                    }),
                                ],
                            }),
                        })
                    );
                },
                z = n(303),
                T = n(155),
                R = n(83),
                A = n(89),
                W = n(292),
                E = n(293),
                N = n(294),
                D = n(307),
                M = n(298),
                H = ['name', 'validator', 'schema', 'label'],
                P = function (e) {
                    var t = e.name,
                        n = e.validator,
                        a = e.schema,
                        o = e.label,
                        c = Object(A.a)(e, H),
                        i = Object(m.c)({ name: t, validator: n, schema: a }),
                        s = i.value,
                        u = i.control,
                        d = u.setValue,
                        h = u.setTouched,
                        j = Object(r.useCallback)(
                            function (e) {
                                d(e.target.value);
                            },
                            [d]
                        ),
                        x = Object(r.useCallback)(
                            function (e) {
                                h({ $touched: !0 });
                            },
                            [h]
                        );
                    return Object(C.jsxs)(v.a, {
                        flexDir: 'column',
                        alignItems: 'flex-start',
                        children: [
                            o && Object(C.jsx)(W.a, { color: 'gray.300', fontSize: 'sm', children: o }),
                            Object(C.jsxs)(E.a, {
                                children: [
                                    Object(C.jsxs)(N.a, {
                                        children: [
                                            Object(C.jsx)(l.a, {
                                                position: 'relative',
                                                children: Object(C.jsx)(D.a, {
                                                    type: 'color',
                                                    name: t,
                                                    variant: 'filled',
                                                    value: s,
                                                    onChange: j,
                                                    opacity: '0',
                                                    zIndex: '2',
                                                    cursor: 'pointer',
                                                }),
                                            }),
                                            Object(C.jsx)(l.a, {
                                                position: 'absolute',
                                                children: s
                                                    ? Object(C.jsx)(l.a, {
                                                          backgroundColor: s,
                                                          borderRadius: '50%',
                                                          width: '10px',
                                                          height: '10px',
                                                      })
                                                    : Object(C.jsx)(M.a, { marginTop: '-5px' }),
                                            }),
                                        ],
                                    }),
                                    Object(C.jsx)(
                                        D.a,
                                        Object(R.a)({ name: t, variant: 'filled', value: s, onChange: j, onBlur: x }, c)
                                    ),
                                ],
                            }),
                        ],
                    });
                },
                U = ['name', 'validator', 'schema', 'label', 'onBlur'],
                V = function (e) {
                    var t = e.name,
                        n = e.validator,
                        a = e.schema,
                        o = e.label,
                        c = e.onBlur,
                        i = Object(A.a)(e, U),
                        s = Object(m.c)({ name: t, validator: n, schema: a }),
                        l = s.value,
                        u = s.control,
                        d = u.setValue,
                        h = u.setTouched,
                        j = Object(r.useCallback)(
                            function (e) {
                                d(e.target.value);
                            },
                            [d]
                        ),
                        x = Object(r.useCallback)(
                            function (e) {
                                h({ $touched: !0 }), null === c || void 0 === c || c(e);
                            },
                            [h, c]
                        );
                    return Object(C.jsxs)(v.a, {
                        flexDir: 'column',
                        alignItems: 'flex-start',
                        children: [
                            o && Object(C.jsx)(W.a, { color: 'gray.300', fontSize: 'sm', children: o }),
                            Object(C.jsx)(
                                D.a,
                                Object(R.a)({ name: t, variant: 'filled', value: l, onChange: j, onBlur: x }, i)
                            ),
                        ],
                    });
                },
                L = n(159),
                $ = (function () {
                    var e = Object(p.a)(
                        f.a.mark(function e(t) {
                            var n, a, r, o, c, i, s, l;
                            return f.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = t.backgroundColor),
                                                (a = t.text),
                                                (r = t.iconName),
                                                (e.next = 3),
                                                y('Roboto-Regular.ttf')
                                            );
                                        case 3:
                                            (o = e.sent),
                                                (c = new w.a(Object(k.parse)(o))),
                                                (i =
                                                    '<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="2" fill="'
                                                        .concat(n, '"></rect><path fill="#fff" d="')
                                                        .concat(
                                                            c.getD(a, {
                                                                fontSize: 16,
                                                                x: 15,
                                                                y: 15,
                                                                anchor: 'center middle',
                                                            }),
                                                            '"></path></svg>'
                                                        )),
                                                (s = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(i)),
                                                (l = document.createElement('a')).setAttribute('href', s),
                                                l.setAttribute('download', ''.concat(r, '.svg')),
                                                (l.style.display = 'none'),
                                                document.body.appendChild(l),
                                                l.click(),
                                                document.body.removeChild(l);
                                        case 14:
                                        case 'end':
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                G = (n(280), Object(i.a)({ config: { initialColorMode: 'dark', useSystemColorMode: !1 } })),
                J = function () {
                    var e = Object(m.h)({
                            initialValues: { backgroundColor: '', iconName: '', text: '' },
                            onSubmit: $,
                        }),
                        t = function (t) {
                            var n = t.target.value;
                            e.setFieldValue('text', function (e) {
                                return 0 === e.trim().length ? n[0] : e;
                            });
                        };
                    return Object(C.jsx)(s.a, {
                        theme: G,
                        children: Object(C.jsx)(l.a, {
                            textAlign: 'center',
                            fontSize: 'xl',
                            children: Object(C.jsx)(m.a, {
                                formBag: e,
                                children: function () {
                                    return Object(C.jsxs)(l.a, {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        h: '100vh',
                                        children: [
                                            Object(C.jsx)(l.a, {
                                                children: Object(C.jsx)(u.a, {
                                                    as: 'h2',
                                                    size: 'xl',
                                                    textTransform: 'uppercase',
                                                    padding: '20px 0 0 0',
                                                    children: 'Status icon generator',
                                                }),
                                            }),
                                            Object(C.jsx)(d.a, {
                                                w: '100%',
                                                p: 4,
                                                color: 'white',
                                                h: '100%',
                                                children: Object(C.jsx)(I, {}),
                                            }),
                                            Object(C.jsxs)(l.a, {
                                                w: '100%',
                                                children: [
                                                    Object(C.jsx)(l.a, {
                                                        w: '100%',
                                                        p: 4,
                                                        color: 'white',
                                                        padding: '0',
                                                        children: Object(C.jsx)('div', {
                                                            children: Object(C.jsxs)('svg', {
                                                                className: 'waves',
                                                                xmlns: 'http://www.w3.org/2000/svg',
                                                                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                                                                viewBox: '0 24 150 28',
                                                                preserveAspectRatio: 'none',
                                                                'shape-rendering': 'auto',
                                                                children: [
                                                                    Object(C.jsx)('defs', {
                                                                        children: Object(C.jsx)('path', {
                                                                            id: 'gentle-wave',
                                                                            d: 'M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z',
                                                                        }),
                                                                    }),
                                                                    Object(C.jsxs)('g', {
                                                                        className: 'parallax',
                                                                        children: [
                                                                            Object(C.jsx)('use', {
                                                                                xlinkHref: '#gentle-wave',
                                                                                x: '48',
                                                                                y: '0',
                                                                                fill: 'rgb(46, 136, 137)',
                                                                            }),
                                                                            Object(C.jsx)('use', {
                                                                                xlinkHref: '#gentle-wave',
                                                                                x: '48',
                                                                                y: '0',
                                                                                fill: 'rgb(42, 116, 119)',
                                                                            }),
                                                                            Object(C.jsx)('use', {
                                                                                xlinkHref: '#gentle-wave',
                                                                                x: '48',
                                                                                y: '0',
                                                                                fill: 'rgb(39, 97, 100)',
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                    Object(C.jsxs)(l.a, {
                                                        w: '100%',
                                                        p: 4,
                                                        color: 'white',
                                                        bg: '#276164',
                                                        justifyContent: 'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        children: [
                                                            Object(C.jsxs)(h.a, {
                                                                href: 'https://github.com/ArtiomTr/status-icon-generator',
                                                                isExternal: !0,
                                                                position: 'absolute',
                                                                left: '20px',
                                                                bottom: '20px',
                                                                children: [
                                                                    'Github ',
                                                                    Object(C.jsx)(z.a, { mx: '2px' }),
                                                                ],
                                                            }),
                                                            Object(C.jsx)(l.a, {
                                                                w: '300px',
                                                                padding: '30px 0',
                                                                children: Object(C.jsx)(T.a, {
                                                                    children: Object(C.jsxs)(j.a, {
                                                                        alignItems: 'stretch',
                                                                        spacing: '2',
                                                                        children: [
                                                                            Object(C.jsx)(P, {
                                                                                label: 'Background color',
                                                                                name: 'backgroundColor',
                                                                            }),
                                                                            Object(C.jsx)(V, {
                                                                                onBlur: t,
                                                                                label: 'Icon name',
                                                                                name: 'iconName',
                                                                            }),
                                                                            Object(C.jsx)(V, {
                                                                                label: 'Icon text',
                                                                                name: 'text',
                                                                            }),
                                                                            Object(C.jsx)(l.a, {
                                                                                children: Object(C.jsx)(x.a, {
                                                                                    type: 'submit',
                                                                                    leftIcon: Object(C.jsx)(L.a, {
                                                                                        size: '20px',
                                                                                    }),
                                                                                    marginTop: '2',
                                                                                    children: 'Download',
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            }),
                        }),
                    });
                },
                X = Boolean(
                    'localhost' === window.location.hostname ||
                        '[::1]' === window.location.hostname ||
                        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
                );
            function q(e, t) {
                navigator.serviceWorker
                    .register(e)
                    .then(function (e) {
                        e.onupdatefound = function () {
                            var n = e.installing;
                            null != n &&
                                (n.onstatechange = function () {
                                    'installed' === n.state &&
                                        (navigator.serviceWorker.controller
                                            ? (console.log(
                                                  'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.'
                                              ),
                                              t && t.onUpdate && t.onUpdate(e))
                                            : (console.log('Content is cached for offline use.'),
                                              t && t.onSuccess && t.onSuccess(e)));
                                });
                        };
                    })
                    .catch(function (e) {
                        console.error('Error during service worker registration:', e);
                    });
            }
            c.a.render(
                Object(C.jsxs)(r.StrictMode, { children: [Object(C.jsx)(a.a, {}), Object(C.jsx)(J, {})] }),
                document.getElementById('root')
            ),
                (function (e) {
                    if ('serviceWorker' in navigator) {
                        if (
                            new URL('https://fracht.github.io/status-icon-generator', window.location.href).origin !==
                            window.location.origin
                        )
                            return;
                        window.addEventListener('load', function () {
                            var t = ''.concat('https://fracht.github.io/status-icon-generator', '/service-worker.js');
                            X
                                ? (!(function (e, t) {
                                      fetch(e, { headers: { 'Service-Worker': 'script' } })
                                          .then(function (n) {
                                              var a = n.headers.get('content-type');
                                              404 === n.status || (null != a && -1 === a.indexOf('javascript'))
                                                  ? navigator.serviceWorker.ready.then(function (e) {
                                                        e.unregister().then(function () {
                                                            window.location.reload();
                                                        });
                                                    })
                                                  : q(e, t);
                                          })
                                          .catch(function () {
                                              console.log(
                                                  'No internet connection found. App is running in offline mode.'
                                              );
                                          });
                                  })(t, e),
                                  navigator.serviceWorker.ready.then(function () {
                                      console.log(
                                          'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
                                      );
                                  }))
                                : q(t, e);
                        });
                    }
                })();
        },
    },
    [[281, 1, 2]],
]);
//# sourceMappingURL=main.f17b0154.chunk.js.map
