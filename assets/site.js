/* Renders the home page and project pages from assets/content.js.
   You normally only edit content.js. */
(function () {
  var P = window.PORTFOLIO;
  var BASE = window.BASE || '';
  var u = function (p) { return /^(https?:|mailto:|tel:|#)/.test(p) ? p : BASE + p; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  var $ = function (sel) { return document.querySelector(sel); };

  var ALL = [].concat(P.experience, P.projects, P.earlier);
  var GROUPS = ['Research & Internships', 'Competitions', 'Student Teams & Leadership', 'Earlier Work'];
  var link = function (it) { return u('projects/' + it.id + '/'); };
  var firstImage = function (it) {
    var m = (it.media || []).filter(function (x) { return x.type !== 'video'; })[0];
    if (m) return m.src;
    var v = (it.media || []).filter(function (x) { return x.poster; })[0];
    return v ? v.poster : null;
  };

  /* ---------- theme ---------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    var btn = $('.theme-btn');
    if (btn) btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
    var mb = $('.menu-btn');
    if (mb) mb.addEventListener('click', function () { $('.nav').classList.toggle('open'); });
  }

  /* ---------- shared header / footer ---------- */
  function header() {
    var home = u('');
    return '<header class="top"><div class="wrap">' +
      '<a class="brand" href="' + home + '">' + esc(P.person.name) + '</a>' +
      '<button class="menu-btn" aria-label="Menu">Menu</button>' +
      '<nav class="nav">' +
      '<a href="' + home + '#work">Work</a>' +
      '<a href="' + home + '#experience">Experience</a>' +
      '<a href="' + home + '#about">About</a>' +
      '<a href="' + home + '#skills">Skills</a>' +
      (P.person.resume ? '<a href="' + u(P.person.resume) + '" target="_blank" rel="noopener">Resume</a>' : '') +
      '<a href="' + home + '#contact">Contact</a>' +
      '</nav>' +
      '<button class="theme-btn" aria-label="Toggle dark mode" title="Toggle dark mode">' +
      '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
      '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
      '</button></div></header>';
  }
  function contact() {
    var p = P.person;
    return '<div class="contact" id="contact"><div><h2>Let’s talk</h2>' +
      '<p>I’m looking for Summer 2027 internships and co-ops in manufacturing, robotics, automation and supply chain. I’d love to hear from you.</p></div>' +
      '<ul>' +
      '<li><small>Email</small><a href="mailto:' + p.email + '">' + p.email + '</a></li>' +
      '<li><small>Phone</small><a href="tel:' + p.phone.replace(/\s/g, '') + '">' + p.phone + '</a></li>' +
      '<li><small>LinkedIn</small><a href="https://' + p.linkedin + '" target="_blank" rel="noopener">' + p.linkedin + '</a></li>' +
      '<li><small>GitHub</small><a href="https://' + p.github + '" target="_blank" rel="noopener">' + p.github + '</a></li>' +
      '</ul></div>';
  }
  function footer() {
    return '<footer><div class="wrap">© ' + new Date().getFullYear() + ' ' + esc(P.person.name) + '.</div></footer>';
  }

  /* ---------- cards ---------- */
  function card(it) {
    var img = firstImage(it);
    var thumb;
    if (img) thumb = '<div class="thumb"><img loading="lazy" src="' + u(img) + '" alt="' + esc(it.title) + '"></div>';
    else {
      var m = (it.metrics || [])[0];
      thumb = m ? '<div class="thumb type"><b>' + esc(m.n) + '</b><span>' + esc(m.l) + '</span></div>'
                : '<div class="thumb type"><b class="small">' + esc(it.cat || it.group) + '</b><span>' + esc(it.date || '') + '</span></div>';
    }
    var org = it.role ? esc(it.role) + ', ' + esc(it.org) : esc(it.org);
    return '<a class="card" data-group="' + esc(it.group) + '" href="' + link(it) + '">' + thumb +
      '<div class="body"><h3>' + esc(it.title) + '</h3><div class="org">' + org + '</div>' +
      (it.badge ? '<div class="badge">' + esc(it.badge) + '</div>' : '') +
      '<div class="tag">' + esc(it.group) + (it.date ? ', ' + esc(it.date) : '') + '</div></div></a>';
  }

  /* ---------- home ---------- */
  function logoEl(it) {
    if (it.logo) return '<img class="tl-logo" src="' + u(it.logo) + '" alt="">';
    if (it.ini) return '<span class="tl-logo tl-ini' + (it.ini.length > 3 ? ' long' : '') + '">' + esc(it.ini) + '</span>';
    var ini = (it.org || '').replace(/[^A-Za-z ]/g, ' ').split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('');
    return '<span class="tl-logo tl-ini">' + esc(ini) + '</span>';
  }
  function tlItem(e) {
    return '<li>' + logoEl(e) + '<div class="tl-when">' + esc(e.date) + (e.location ? '<span>' + esc(e.location) + '</span>' : '') + '</div>' +
      '<div class="tl-body"><h3>' + esc(e.role) + '</h3><div class="org">' + esc(e.org) + '</div><p>' + esc(e.result) + '</p>' +
      '<a href="' + link(e) + '">Read more →</a></div></li>';
  }
  function resumeMenu(p, cls) {
    if (!p.resumes || !p.resumes.length) return '';
    return '<details class="resume-menu ' + (cls || '') + '"><summary class="btn ghost">Resume ▾</summary><div class="menu">' +
      p.resumes.map(function (r) { return '<a href="' + u(r.src) + '" target="_blank" rel="noopener">' + esc(r.label) + '</a>'; }).join('') + '</div></details>';
  }
  function band(id, alt, inner) { return '<section id="' + id + '" class="band' + (alt ? ' alt' : '') + '"><div class="wrap">' + inner + '</div></section>'; }
  function home() {
    var p = P.person;
    var logos = (p.logos || []).map(function (l) { return '<img src="' + u(l.src) + '" alt="' + esc(l.name) + '" title="' + esc(l.name) + '">'; }).join('');
    var leadIds = ['wear', 'vip', 'solar', 'energyhack', 'sclo'];
    var lead = P.projects.filter(function (x) { return leadIds.indexOf(x.id) >= 0; });
    var comps = P.projects.filter(function (x) { return x.group === 'Competitions'; });
    var now = [].concat(P.experience, P.projects).filter(function (x) { return /Present/.test(x.date || ''); });
    var html = header() + '<main>' +
      '<section class="hero"><div class="wrap">' +
      '<div class="banner"><img src="' + u(p.banner) + '" alt="Tech Tower, Georgia Tech"></div>' +
      '<div class="hero-row"><img class="avatar" src="' + u(p.photo) + '" alt="' + esc(p.name) + '">' +
      '<div class="hero-id"><h1>' + esc(p.name) + '</h1><p class="headline">' + esc(p.headline) + '</p></div></div>' +
      '<div class="hero-body"><div><p class="lede">' + esc(p.intro) + '</p>' +
      '<div class="btns"><a class="btn" href="#work">See my work</a>' +
      '<a class="btn ghost" href="mailto:' + p.email + '">Email</a>' +
      '<a class="btn ghost" href="https://' + p.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
      resumeMenu(p) + '</div>' +
      '<div class="now"><h3>Right now</h3><ul>' + now.map(function (x) {
        return '<li><a href="' + link(x) + '">' + (x.logo ? '<img src="' + u(x.logo) + '" alt="">' : '<span class="ph"></span>') +
          '<span class="nr"><b>' + esc(x.role.split(' (')[0]) + '</b><span>' + esc(x.org.split(',')[0]) + '</span></span>' +
          '<span class="nd">Since ' + esc(x.date.replace(/\s*–\s*Present/, '')) + '</span></a></li>';
      }).join('') + '</ul></div></div>' +
      '<dl class="facts">' + p.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl></div>' +
      (logos ? '<div class="logos">' + logos + '</div>' : '') +
      '</div></section>' +
      '<section class="statband"><div class="wrap stats">' + p.stats.map(function (s) { return '<div class="stat"><b>' + s.n + '</b><span>' + s.l + '</span></div>'; }).join('') + '</div></section>' +

      band('work', false, '<div class="sec-head"><div><h2>Work</h2><p class="muted" style="margin:0">Click any project for the full story, numbers and photos.</p></div>' +
        '<div class="filters" role="group" aria-label="Filter projects"><button aria-pressed="true" data-f="all">All</button>' +
        GROUPS.map(function (g) { return '<button aria-pressed="false" data-f="' + esc(g) + '">' + esc(g) + '</button>'; }).join('') + '</div></div>' +
        '<div class="grid">' + ALL.map(card).join('') + '</div>') +

      band('experience', true, '<div class="sec-head"><h2>Experience</h2></div>' +
        '<h3 class="tl-group">Research and internships</h3><ol class="timeline">' + P.experience.map(tlItem).join('') + '</ol>' +
        '<h3 class="tl-group">Leadership</h3><ol class="timeline">' + lead.map(tlItem).join('') + '</ol>' +
        '<h3 class="tl-group">Competitions and programs</h3><ol class="timeline">' + comps.map(tlItem).join('') + '</ol>') +

      band('about', false, '<div class="sec-head"><h2>About</h2></div><div class="two"><div>' +
        p.about.map(function (t) { return '<p>' + t + '</p>'; }).join('') +
        (p.strengths && p.strengths.length ? '<div class="sw"><div class="sw-card"><h3>Strengths</h3><ul>' + p.strengths.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>' +
          '<div class="sw-card"><h3>Weaknesses</h3><ul>' + (p.weaknesses || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div></div>' : '') +
        '</div><div class="edu"><h3 class="tl-group" style="margin-top:0">Education</h3>' + P.education.map(function (e) {
          return '<div class="item"><img src="' + u(e.logo) + '" alt=""><div><h3>' + esc(e.school) + '</h3><div>' + esc(e.degree) + '</div>' +
            '<div class="muted small">' + esc(e.date) + ', ' + esc(e.place) + '</div><div class="muted small">' + esc(e.notes) + '</div></div></div>';
        }).join('') + '</div></div>') +

      band('skills', true, '<div class="sec-head"><h2>Skills and certifications</h2></div><div class="skill-grid">' +
        P.skills.map(function (s) { return '<div class="skill-card"><h3>' + esc(s.h) + '</h3><ul>' + s.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>'; }).join('') +
        '</div><h3 class="tl-group">Certifications</h3><ul class="certs">' +
        P.certifications.map(function (c) { return '<li><b>' + esc(c.t) + '</b>' + (c.st !== 'Earned' ? '<span class="status">' + esc(c.st) + '</span>' : '') + '<small>' + esc(c.s) + '</small></li>'; }).join('') +
        '</ul>') +

      band('honors', false, '<div class="sec-head"><h2>Earlier honors</h2></div><div class="honors">' +
        P.honors.map(function (h) { return '<div class="honor"><div class="yr">' + esc(h.l) + '</div><h3>' + esc(h.t) + '</h3><p>' + esc(h.s) + '</p></div>'; }).join('') +
        '</div>' + contact()) +
      '</main>' + footer();
    document.body.innerHTML = html;

    var btns = document.querySelectorAll('.filters button');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        var f = b.getAttribute('data-f');
        document.querySelectorAll('.grid .card').forEach(function (c) {
          c.style.display = (f === 'all' || c.getAttribute('data-group') === f) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- project page ---------- */
  function mediaEl(m, cls) {
    if (m.type === 'video') return '<video controls muted playsinline preload="metadata"' + (m.poster ? ' poster="' + u(m.poster) + '"' : '') + ' src="' + u(m.src) + '"></video>';
    return '<img loading="lazy" src="' + u(m.src) + '" alt="' + esc(m.cap || '') + '"' + (cls ? ' class="' + cls + '"' : '') + '>';
  }
  function project(id) {
    var idx = ALL.findIndex(function (x) { return x.id === id; });
    var it = ALL[idx];
    if (!it) { document.body.innerHTML = header() + '<main class="wrap"><p style="margin-top:40px">Project not found. <a href="' + u('') + '">Back home</a></p></main>'; return; }
    document.title = it.title + ' | ' + P.person.name;
    var media = it.media || [];
    var hero = media[0];
    var rest = media.slice(1);
    var meta = [it.role, it.org, it.date].filter(Boolean).map(esc).join(', ');
    var sec = function (h, t) { return t ? '<div><h2>' + h + '</h2><p>' + esc(t) + '</p></div>' : ''; };
    var prev = ALL[(idx - 1 + ALL.length) % ALL.length], next = ALL[(idx + 1) % ALL.length];
    var html = header() + '<main class="wrap">' +
      '<a class="crumb" href="' + u('') + '#work">← All work</a>' +
      '<div class="proj-head"><h1>' + esc(it.title) + '</h1><p class="meta">' + meta + '</p>' +
      (it.badge ? '<span class="badge">' + esc(it.badge) + '</span>' : '') + '</div>' +
      (hero ? '<figure class="hero-media" style="margin-left:0;margin-right:0">' + mediaEl(hero, 'zoom') + (hero.cap ? '<figcaption class="figcap">' + esc(hero.cap) + '</figcaption>' : '') + '</figure>' : '') +
      ((it.metrics && it.metrics.length) ? '<div class="metrics">' + it.metrics.map(function (m) { return '<div class="metric"><b>' + esc(m.n) + '</b><span>' + esc(m.l) + '</span></div>'; }).join('') + '</div>' : '') +
      '<div class="story">' +
      (it.why ? '<div class="why"><p>' + esc(it.why) + '</p></div>' : '') +
      sec('Context', it.context) + sec('My role', it.roleText) + sec('Result', it.result) +
      '</div>' +
      ((it.bullets && it.bullets.length) ? '<div class="did"><h2 style="font-size:1.25rem">What I did</h2><ul>' + it.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' : '') +
      ((it.tools && it.tools.length) ? '<div class="did"><h2 style="font-size:1.25rem">Tools and methods</h2><div class="tools">' + it.tools.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div></div>' : '') +
      (rest.length ? '<div class="did"><h2 style="font-size:1.25rem">Gallery</h2><div class="gallery">' + rest.map(function (m) {
        return '<figure>' + mediaEl(m, 'zoom') + (m.cap ? '<figcaption class="figcap">' + esc(m.cap) + '</figcaption>' : '') + '</figure>';
      }).join('') + '</div></div>' : '') +
      ((it.docs && it.docs.length) || it.pdf ? '<div class="did docs"><h2 style="font-size:1.25rem">Documents</h2><ul>' +
        (it.docs || []).map(function (d) { return '<li><a href="' + u(d.src) + '" target="_blank" rel="noopener">' + esc(d.label) + '</a></li>'; }).join('') +
        (it.pdf ? '<li><a href="' + u(it.pdf) + '" target="_blank" rel="noopener">Project PDF</a></li>' : '') + '</ul></div>' : '') +
      '<nav class="pager"><a href="' + link(prev) + '"><small>Previous</small>' + esc(prev.title) + '</a>' +
      '<a href="' + link(next) + '" style="text-align:right"><small>Next</small>' + esc(next.title) + '</a></nav>' +
      contact() + '</main>' + footer() +
      '<div class="lightbox" aria-hidden="true"><img alt=""></div>';
    document.body.innerHTML = html;
    var lb = $('.lightbox');
    document.querySelectorAll('img.zoom').forEach(function (im) {
      im.addEventListener('click', function () { lb.querySelector('img').src = im.src; lb.classList.add('open'); });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
  }

  if (window.PROJECT_ID) project(window.PROJECT_ID); else home();
  initTheme();
})();
