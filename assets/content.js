/* ==========================================================================
   PORTFOLIO CONTENT — the single source for BOTH the website (index.html)
   and the printable portfolio (print.html → Shreeniket_Bhat_Portfolio.pdf).
   Edit here once and both update.

   ADDING PHOTOS: drop an image into assets/img/ and add it to an item's
   `media` list, e.g.  media:[{src:'assets/img/ampf-1.jpg', cap:'Tormach ZA6 cell'}]
   Items with no media show a metrics panel instead of a photo.
   Only list work that is Done or In progress.
   ========================================================================== */

window.PORTFOLIO = {

  person: {
    name: 'Shreeniket Bhat',
    first: 'SHREENIKET', last: 'BHAT',
    headline: 'Industrial & Systems Engineering student at Georgia Tech',
    tagline: 'Smart manufacturing, Robotics & automation, Supply chain analytics',
    location: 'Atlanta, GA',
    email: 'shreeniketb@gmail.com',
    phone: '+1 470 891 7896',
    linkedin: 'linkedin.com/in/shreeniket-bhat',
    github: 'github.com/shreeniketb',
    site: 'shreeniketb.github.io',
    photo: 'assets/img/profile.jpg',
    banner: 'assets/img/banner-techtower.jpg',
    resume: 'assets/docs/Shreeniket_Bhat_Resume.pdf',
    resumes: [                           // shown in the Resume menu
      { label: 'Full resume (all experience)', src: 'assets/docs/Shreeniket_Bhat_Resume.pdf' },
      { label: 'Supply chain & operations', src: 'assets/docs/Shreeniket_Bhat_Resume_SupplyChain.pdf' },
      { label: 'Manufacturing & process', src: 'assets/docs/Shreeniket_Bhat_Resume_Manufacturing.pdf' },
      { label: 'Mechanical design & robotics', src: 'assets/docs/Shreeniket_Bhat_Resume_Design_Robotics.pdf' },
      { label: 'Data, AI & analytics', src: 'assets/docs/Shreeniket_Bhat_Resume_Data_Analytics.pdf' }
    ],
    logos: [],                           // top logo strip disabled; logos show in the Experience timeline
    strengths: ['Say yes to everything', 'Efficient LLM user', 'Interdisciplinary approach', 'Leadership conviction'],
    weaknesses: ['Say yes to too much', 'Reflecting', 'Good food'],
    intro: 'I’m an Industrial & Systems Engineering student at Georgia Tech who likes making machines, processes and people work better together. I do paid research at Georgia Tech’s Advanced Manufacturing Pilot Facility, co-lead robotics and energy teams, and use data to make supply-chain decisions.',
    about: [
      'I was born in India, grew up in Hong Kong, and now study <strong>Industrial & Systems Engineering at Georgia Tech</strong> (#1 IE program, U.S. News). Most of my work sits where hardware meets operations: robotic cells, inspection, fixtures and safety on one side; forecasting, sourcing and process improvement on the other.',
      'Right now I’m a paid research assistant in Dr. Stebner’s BeamTeam at the <strong>Advanced Manufacturing Pilot Facility</strong>, owning workstreams that automate how metal additive-manufactured samples are produced, inspected and handled. Before Georgia Tech I spent two months at the <strong>Siemens Centre of Excellence</strong> working across the full digital-manufacturing chain, from CAD and FEA to CNC, robot simulation and live ABB and KUKA hardware.',
      'Outside the lab I lead people: a 45-member mechanical subteam at WEAR@GT, a 6-person robotics VIP team, an electrical team on Energy@GT’s solar array, and the team that won the IISE x UCC case competition. I learn by building, and I’m comfortable starting from zero.'
    ],
    facts: [
      ['Based in', 'Atlanta, GA'],
      ['Studying', 'B.S. Industrial & Systems Engineering, concentration in Supply Chain Engineering, minor in Robotics. Expected May 2029'],
      ['Interests', 'Smart manufacturing, Industrial automation, Robotics, Supply chain analytics, Wearable robotics'],
      ['Languages', 'English, Spanish, Hindi, Mandarin, Konkani']
    ],
    stats: [
      { n: '1st', l: 'of 35 teams<br>IISE x UCC case' },
      { n: '3', l: 'research workstreams<br>GT AMPF' },
      { n: '45', l: 'member subteam<br>led at WEAR@GT' },
      { n: '45/45', l: 'IB Diploma<br>Valedictorian' }
    ]
  },

  /* ---------------- EXPERIENCE ---------------- */
  experience: [
    {
      id: 'ampf', logo: 'assets/img/logos/ampf.png',
      group: 'Research & Internships',
      title: 'Robotic Inspection, Handling & Safeguarding for Metal AM',
      role: 'Research Assistant (Paid)',
      org: 'Advanced Manufacturing Pilot Facility (AMPF), Georgia Tech',
      date: 'August 2026 – Present', location: 'Atlanta, GA',
      cat: 'Industry 4.0, Robotics, Metrology',
      context: 'AMPF is an Industry 4.0 pilot facility automating AMR-driven production and testing of metal additive-manufactured (AM) samples. Each sample needs to be inspected, handled and moved safely between robot cells before X-ray CT.',
      why: 'Scanning each sample against its CAD right on the robot catches geometry problems before the sample goes to slower, more expensive X-ray CT, and proper safeguarding lets robots and people share the cell safely.',
      roleText: 'I own three workstreams in Dr. Stebner’s BeamTeam: robotic 3D inspection, vacuum handling, and machine safeguarding, working up to 20 hours a week alongside a full course load.',
      result: 'Scoped the Tormach ZA6 inspection station, shortlisted sensors for a vendor demo, drafted the light-curtain purchasing report, and built a vacuum-gripper prototype that lifted parts in a demo.',
      metrics: [
        { n: '3', l: 'workstreams owned' },
        { n: '72 mm', l: 'sensor head covers the insert in one scan' },
        { n: '4', l: 'Type 4 light curtains compared' },
        { n: '4×', l: 'safety factor on suction cups' }
      ],
      bullets: [
        'Own 3 workstreams automating AMR-driven production & testing of metal AM samples at an Industry 4.0 pilot facility: robotic inspection, vacuum handling, & machine safeguarding.',
        'Developing a robotic 3D inspection station on a Tormach ZA6 robot to scan metal AM samples against CAD before X-ray CT; scoped full-surface deviation analysis & point-cloud export with a research engineer.',
        'Sized the sensor to the insert geometry (41 x 23 mm base): showed a 35 mm field of view is too narrow, while a 72 mm head covers the insert in one scan; scoped a two-part NX fixture against ±0.5 mm robot repeatability.',
        'Shortlisted Keyence LJ-S8000 sensor heads by field of view, standoff, height range, & weight vs. the 6 kg robot payload; requested an on-site vendor demo to evaluate scan quality, CAD comparison, & data export.',
        'Drafted a safety light curtain purchasing report for a two-robot Tormach cell: compared 4 Type 4 (IEC 61496) options & 3 layouts with ISO 13855 safety-distance calculations & costs from ~$3.8K to ~$24K.',
        'Co-developing a vacuum gripper for robotic insert pickup: sized suction cups with holding-force analysis (4x safety factor) & built an Arduino, DC-pump, & solenoid-valve prototype that lifted parts in a demo.',
        'Completed AMPF safety training; contribute up to 20 hrs/week in Dr. Stebner’s BeamTeam alongside a full course load.'
      ],
      tools: ['Tormach ZA6', 'Keyence LJ-S8000', 'Siemens NX', 'IEC 61496 / ISO 13855', 'Arduino', 'Pneumatics', 'Otto AMRs'],
      media: []
    },
    {
      id: 'siemens', logo: 'assets/img/logos/siemens.png',
      group: 'Research & Internships',
      title: 'Full Digital-Manufacturing Chain: CAD to Live Robots',
      role: 'Smart Manufacturing Engineering Intern',
      org: 'Siemens Centre of Excellence, VNIT Nagpur',
      date: 'July – August 2026', location: 'Nagpur, India',
      cat: 'Smart Manufacturing, Industry 4.0',
      context: 'A two-month intensive covering design, simulation, CNC, robotics and inspection, certified by VNIT Nagpur, Siemens and 3D Engineering Automation LLP.',
      roleText: 'Delivered CAD/CAM/CAE/PLM workflows for healthtech and automotive use cases, then took simulated robot programs onto physical ABB and KUKA hardware.',
      result: 'Earned the Siemens Smart Manufacturing certification after working every stage of the chain hands-on.',
      metrics: [
        { n: '2 mo', l: 'full-chain intensive' },
        { n: '2', l: 'FEA studies (gas tank, turbine)' },
        { n: 'ABB + KUKA', l: 'sim paths moved to live robots' },
        { n: '✓', l: 'Siemens Smart Manufacturing certified' }
      ],
      bullets: [
        'Completed a 2-month intensive across the full digital-manufacturing chain (design, simulation, CNC, robotics, inspection), earning Siemens Smart Manufacturing certification.',
        'Delivered CAD/CAM/CAE/PLM workflows for healthtech & automotive in Siemens NX, Simcenter 3D, & Tecnomatix.',
        'Ran FEA on 2 engineering problems (gas tank, turbine under combined loading), refining mesh density, boundary conditions, & results interpretation to assess structural response.',
        'Programmed CNC parts from scratch in SinuTrain (G-code, toolpaths, tool offsets), verifying in simulation first.',
        'Built & programmed a conveyor robotic workcell in Tecnomatix Process Simulate, validating material flow, cycle sequence, & layout offline before commissioning; moved simulated robot paths to live ABB & KUKA hardware.',
        'Performed RAPID arc welding on a physical ABB robot & created a TCP for a 7-axis KUKA cobot with automatic tool changer, taking programmed paths from simulation to live hardware.',
        'Built a Zeiss COMET scan-to-CAD pipeline (GOM Inspect, Colin3D, NX) to capture, remodel, & 3D-print client geometries.'
      ],
      tools: ['Siemens NX', 'Simcenter 3D (FEA)', 'Tecnomatix Process Simulate', 'SinuTrain / G-code', 'ABB RAPID', 'KUKA cobot', 'Zeiss COMET', 'GOM Inspect'],
      media: []
    },
    {
      id: 'harvard', logo: 'assets/img/logos/harvard.png',
      group: 'Research & Internships',
      title: 'Energy Data Pipelines & Leadership Dashboards',
      role: 'Technical Product Intern',
      org: 'Harvard Undergraduate Ventures–TECH, Rayfield Systems',
      date: 'July – August 2025', location: 'Remote',
      cat: 'Data, Product, Energy',
      context: 'Rayfield Systems, an AI/ML startup, works with energy datasets that arrive in many formats, and its AI-generated reports needed to reach leadership in a usable form. The program accepts under 15% of applicants.',
      why: 'Forecasts are only as good as the data going into them; clean, validated inputs and clear visuals are what turn a model\u2019s output into a decision leadership can act on.',
      roleText: 'Built Python data-cleaning and validation pipelines, mapped workflows, and designed Figma dashboards.',
      result: 'Eliminated all multi-format ingestion errors, identified 3 workflow bottlenecks supporting demand-planning and energy-forecasting models, and built an automated AI weekly analytics report generator. Pitched to industry mentors; awarded a US$2k scholarship.',
      metrics: [
        { n: '3', l: 'workflow bottlenecks identified' },
        { n: 'All', l: 'multi-format ingestion errors eliminated' },
        { n: 'US$2k', l: 'scholarship, <15% acceptance' }
      ],
      bullets: [
        'Eliminated multi-format ingestion errors in energy datasets with Python data-cleaning & validation pipelines.',
        'Identified 3 workflow bottlenecks, supporting demand-planning & energy-forecasting models.',
        'Designed Figma dashboards turning AI-generated reports into leadership visuals (AI/ML startup, <15% acceptance).',
        'Built an automated AI weekly analytics report generator.',
        'Pitched work to industry mentors; awarded a US$2k scholarship.'
      ],
      tools: ['Python', 'Pandas', 'Figma', 'Prompt engineering', 'Data validation', 'Dashboard design'],
      media: []
    },
    {
      id: 'tradelink', logo: 'assets/img/logos/tradelink.png',
      group: 'Research & Internships',
      title: 'Purchase-Order Automation: KPI Experiment & UX',
      role: 'Supply Chain Automation Intern',
      org: 'TradeLink Technologies',
      date: 'May – June 2025', location: 'Hong Kong',
      cat: 'Supply Chain Automation, Industry 4.0',
      context: 'TradeLink is a Hong Kong supply-chain automation and Industry 4.0 firm working with ERP/WMS, RFID-based purchase-order tracking and GS1 standards.',
      why: 'Purchase-order processing is repetitive and error-prone; putting hard numbers on how much effort AI saves is what convinces funders and customers to adopt automation, and software only saves time if people find it easy to use.',
      roleText: 'Ran an investor-facing KPI experiment benchmarking AI vs. human effort on purchase-order data, ran usability tests and UI/UX mockups for the PO automation software, and designed mockups for AI-guided warehouse packing workflows.',
      result: 'The KPI experiment secured HK$50,000 in government funding; usability work raised Net Promoter Score 11%.',
      metrics: [
        { n: 'HK$50K', l: 'government funding secured' },
        { n: '+11%', l: 'Net Promoter Score' }
      ],
      bullets: [
        'Secured HK$50,000 in government funding via an investor-facing KPI experiment benchmarking AI vs. human effort on purchase-order data; Excel PivotTables surfaced inaccuracies.',
        'Raised Net Promoter Score 11% via usability testing & UI/UX mockups for PO automation software.',
        'Designed UI/UX mockups for AI-guided warehouse packing workflows.'
      ],
      tools: ['Excel (PivotTables)', 'ERP / WMS', 'RFID', 'GS1', 'Usability testing', 'UI/UX mockups'],
      media: []
    }
  ],

  /* ---------------- PROJECTS & LEADERSHIP ---------------- */
  projects: [
    {
      id: 'iise', logo: 'assets/img/logos/901partners.png',
      group: 'Competitions',
      title: 'Launch Demand Forecast & Purchase Plan for 170 Stores',
      role: 'Team Lead',
      org: 'IISE x UCC Case Competition (901 Partners), Georgia Tech',
      date: 'November 2026', badge: '1st of 35 teams, $500 prize',
      team: 'Team Scoop Strategy',
      cat: 'Supply Chain Analytics, Forecasting',
      context: 'Jeremiah\u2019s Italian Ice launched a Cheesecake limited-time offer (LTO) across 170 stores for 13 weeks. The base ingredient is bought once, before launch, with no reorders, then either shipped to stores or held at 7 regional warehouses (Opcos); 19 stores had never run an LTO.',
      why: 'A limited-time launch gives one shot at the order: buy too little and stores stock out on launch day, buy too much and the leftovers are wasted, so a better forecast and order size is worth real money.',
      roleText: 'Led the team and pitched the plan to 901 Partners’ founder. Built the forecast, the newsvendor purchase model, Monte Carlo checks and a Python replenishment simulator.',
      result: '1st of 35 teams (131 participants), winning a $500 prize (and free Italian ice from Jeremiah\u2019s). Forecast error cut from 37.5% to 19.1%, and ~$45K (27%) expected savings identified per launch.',
      metrics: [
        { n: '1st/35', l: 'teams, 131 participants' },
        { n: '37.5→19.1%', l: 'store-level forecast error' },
        { n: '~$45K', l: 'expected savings per launch (27%)' },
        { n: '1,000', l: 'Monte Carlo scenarios' }
      ],
      bullets: [
        'Led team to 1st of 35 (131 participants) with a demand forecast, purchase, & allocation plan for Jeremiah’s Italian Ice’s 170-store limited-time launch; pitched to 901 Partners’ founder.',
        'Cut store-level forecast error from 37.5% to 19.1% by blending store launch history with relative size, validated by leave-one-launch-out backtesting & stockout-censored demand correction.',
        'Set a 6,192-case purchase (~$477K) minimizing expected system cost via a per-store newsvendor critical-ratio model, confirmed in a 1,000-scenario Monte Carlo simulation & avoiding $47K excess expected cost vs. standard 15% safety stock.',
        'Identified ~$45K (27%) in expected savings per launch by modeling franchisee over-ordering in a Python replenishment simulator & recommending gated approvals for extra orders; 100% launch shipping beat reserves in 6 of 6 replays.',
        'Stress-tested the plan across 9 demand scenarios (buy within $0.7K of optimal) & forecast 19 new stores lacking history via store-size indices.'
      ],
      tools: ['Python', 'Newsvendor model', 'Monte Carlo simulation', 'Backtesting', 'Excel'],
      media: [
        { src: 'assets/img/iise/photo-3.jpg', cap: 'Team Scoop Strategy at the UCC x IISE final' },
        { src: 'assets/img/iise/slide-01.jpg', cap: 'Our winning pitch: \u201cAuto-ship all and sell it through\u201d' },
        { src: 'assets/img/iise/photo-1.jpg', cap: 'Team Scoop Strategy' },
        { src: 'assets/img/iise/photo-2.jpg', cap: 'Celebrating the win' }
      ]
    },
    {
      id: 'aakruti', logo: 'assets/img/logos/dassault.png',
      group: 'Competitions',
      title: 'AirShield: Solar-Powered Air-Filtration Wall',
      role: 'Team & CAD Lead',
      org: 'Dassault Systèmes SolidWorks AAKRUTI Competition',
      date: 'May 2026 – Present', badge: 'Regional finalist (Top 8), Patent application in preparation',
      team: 'Team Sparkline',
      cat: 'Product Design, CAD, Simulation',
      context: 'A global team product challenge run by Dassault Syst\u00e8mes: design, validate and make the business case for a new product in SolidWorks. Our concept, AirShield, replaces an ordinary boundary wall with a solar-powered wall that pulls street air through modular filter cartridges to remove PM2.5.',
      why: 'Fine-particle pollution is a serious health problem in Indian cities, and most air filtration happens indoors. A wall that cleans air at street level without grid power has to filter well at low airflow and stand up to high wind loads, which is why the design was checked against India\u2019s IS:875 Zone V wind-load standard.',
      roleText: 'Lead a 4-member global team (with a faculty mentor) through the full product cycle: concept scoring, SolidWorks CAD, material selection, simulation, documentation and a business-to-government (B2G) business case.',
      result: 'Reached the regional finals (Top 8) and pitched to industry judges. Provisional patent application in preparation. Design validated against India’s IS:875 Zone V wind-load standard at ~3.1x factor of safety, with est. 99.89% PM2.5 removal.',
      metrics: [
        { n: '99.89%', l: 'est. PM2.5 removal at 0.20 m/s' },
        { n: '~3.1×', l: 'factor of safety, IS:875 Zone V' },
        { n: '3', l: 'independent claims, patent application in preparation' },
        { n: 'Top 8', l: 'regional finalist, pitched to industry judges' }
      ],
      bullets: [
        'Lead a 4-member global team through the full product cycle for the AirShield solar-powered air-filtration wall: concept scoring, SolidWorks CAD, material selection, simulation, & B2G business case.',
        'Validated the design with airflow simulation & static structural testing against India’s IS:875 Zone V wind-load standard: est. 99.89% PM2.5 removal at 0.20 m/s design face velocity & ~3.1x factor of safety.',
        'Produced NASA/Boston Dynamics-standard datasheets, BOM tables, & technical documentation; drafted a provisional patent application (3 independent claims), now in preparation for filing & pitch videos.',
        'Scored concepts against competition criteria (SolidWorks value, differentiation, feasibility), retiring weaker concepts early to focus effort on AirShield.',
        'Resolved critical design conflicts (sealed plenum integrity, fan-housing stress concentration under IS:875 Zone V loading) through quantitative verification of airflow & structural performance.'
      ],
      tools: ['SolidWorks', 'SolidWorks Flow Simulation', 'Static structural FEA', 'BOM & datasheets', 'Patent drafting'],
      media: [
        { src: 'assets/img/airshield/iso-1.jpg', cap: 'AirShield wall with two filtration modules, solar panels and wind turbines' },
        { src: 'assets/img/airshield/front.jpg', cap: 'Front view render' },
        { src: 'assets/img/airshield/back.jpg', cap: 'Rear view render' },
        { src: 'assets/img/airshield/iso-3.jpg', cap: 'Filtration module close-up' },
        { src: 'assets/img/airshield/flow-velocity.jpg', cap: 'SolidWorks Flow Simulation: velocity through the filter module' },
        { src: 'assets/img/airshield/flow-trajectories.jpg', cap: 'Flow trajectories through the module openings' },
        { src: 'assets/img/airshield/displacement.jpg', cap: 'Static structural study: wall displacement under wind load' },
        { src: 'assets/img/airshield/deck-07.jpg', cap: 'Final product design (competition deck)' },
        { src: 'assets/img/airshield/deck-09.jpg', cap: 'Design validation (competition deck)' },
        { type: 'video', src: 'assets/video/airshield-flowsim-video.mp4', poster: 'assets/img/airshield/flowsim-video-poster.jpg', cap: 'Flow simulation (video)' },
        { type: 'video', src: 'assets/video/airshield-flow-trajectories-video.mp4', poster: 'assets/img/airshield/flow-trajectories-video-poster.jpg', cap: 'Flow trajectories (video)' }
      ]
    },
    {
      id: 'wear', logo: 'assets/img/logos/weargt.png',
      group: 'Student Teams & Leadership',
      title: 'Leading Mechanical for a Wearable-Robotics Club: Prosthetics to Exoskeleton',
      role: 'Mechanical Subteam Lead & Founding Member',
      org: 'WEAR@GT, Georgia Tech Wearable Robotics',
      date: 'September 2026 – Present',
      cat: 'Wearable Robotics, Team Leadership',
      context: 'WEAR@GT is a new Georgia Tech wearable-robotics club. New members onboard by building open-source prosthetic hands and arms in mentor-led groups; in spring 2027 the club builds a lower-body exoskeleton for a competition modeled on the University of Michigan\u2019s ACE challenge.',
      why: 'A new club\u2019s first build sets its habits. Shared purchasing, safety rules and a \u201cmodify it, don\u2019t just copy it\u201d standard turn 45 new members into engineers ready to take on a real exoskeleton competition.',
      roleText: 'As a founding member, I lead the 45-member mechanical subteam. This fall I ran the onboarding prosthetics build; now I manage four mechanical subteams through the research and build phases of the spring 2027 ACE exoskeleton competition, after interviewing and selecting their leads.',
      result: '7 mentor-led groups building 6 prosthetic designs from one consolidated 38-item, ~$403 order, under clear safety and design rules; four mechanical subteams staffed with screened leads and moving into ACE research.',
      metrics: [
        { n: '45', l: 'members led' },
        { n: '7', l: 'mentor-led groups, 6 prosthetic designs' },
        { n: '~$403', l: 'one consolidated 38-item order' },
        { n: '4', l: 'mechanical subteams for ACE 2027' }
      ],
      bullets: [
        'Lead a 45-member mechanical subteam through a 1-month onboarding build: 7 mentor-led groups building 6 open-source prosthetic hand & arm designs, with staged deliverables from design brief to final presentation.',
        'Consolidated 7 groups\u2019 BOMs into one 38-item, ~$403 club order: merged duplicates into shared bulk buys, added overlooked parts (e.g., EMG electrode cables, servo battery), & capped group budgets at $90 (1 documented exception).',
        'Set electrical safety rules for the EMG build (battery-only power while electrodes are on skin; separate servo supply with common ground) & required every team to modify at least one design part in CAD, not just copy it.',
        'Run weekly team meetings (agendas, slides, published minutes), organized an Onshape CAD workshop, & analyzed the UMich ACE 2027 lower-body exoskeleton rulebook (scoring, weight handicaps, deadlines) to brief the team for the spring 2027 effort.',
        'Manage 4 mechanical subteams for the ACE exoskeleton (Structures & Joints, Actuation & Transmission, Attachment & Fit, Materials & Manufacturing); interviewed and screened subteam leads for leadership & technical qualities.',
        'Leading the mechanical team through the ACE research phase, assigning research tasks across the subteams ahead of the spring design and build.'
      ],
      tools: ['Onshape', 'EMG sensors', 'Servos', 'BOM consolidation', 'Interviewing & team building'],
      media: []
    },
    {
      id: 'vip', logo: 'assets/img/logos/vip.png',
      group: 'Student Teams & Leadership',
      title: 'Six-Axis AR4 Arm for Sheet-Metal Automation',
      role: 'Co-Lead',
      org: 'Intelligent Robotics for Assembly & Design VIP, Georgia Tech',
      date: 'August 2026 – Present',
      cat: 'Robotics, Simulation, Team Operations',
      context: 'A Vertically Integrated Projects research team building a six-axis AR4 robotic arm (motors, controller, simulation) to automate sheet-metal processes, with NVIDIA Isaac Sim computer vision planned next.',
      roleText: 'Co-lead a 6-person team, continuing as co-lead in spring 2027. Mapping failure modes ahead of vision integration, learning Rhino and Grasshopper for a parametric arm simulation, and setting up team documentation and inventory.',
      result: 'All six joints of the AR4 arm are assembled. Kit reconciled against the BOM (7 missing part categories flagged), hardware labeled, and SOPs giving the team traceable progress.',
      metrics: [
        { n: '6/6', l: 'AR4 joints assembled' },
        { n: '6', l: 'person team co-led' },
        { n: '7', l: 'missing part categories flagged' }
      ],
      bullets: [
        'Co-lead a 6-person team building a six-axis AR4 robotic arm (motors, controller, simulation) to automate sheet-metal processes; mapping failure modes ahead of Isaac Sim computer-vision integration.',
        'All six AR4 joints now assembled.',
        'Starting a Rhino & Grasshopper parametric AR4 simulation (URDF-based inverse kinematics) that checks joint range & collision clearance before physical runs.',
        'Cut build search time & part mix-ups by reconciling kit vs. BOM, flagging 7 missing part categories, & labeling hardware.',
        'Implemented SOPs for documentation, change logs, & inventory tracking, giving the 6-person team traceable progress.',
        'Led a pilot of Wispr Flow AI note-taking for build logs & action items, reducing manual note-taking.'
      ],
      tools: ['AR4 robot', 'NVIDIA Isaac Sim', 'Rhino / Grasshopper (learning)', 'URDF / inverse kinematics', 'SOPs', 'Wispr Flow'],
      media: []
    },
    {
      id: 'solar', logo: 'assets/img/logos/energygt.png',
      group: 'Student Teams & Leadership',
      title: 'Collapsible Solar Array: From Demo to Product',
      role: 'Solar Array Co-Lead (Electrical) and Data Lead',
      org: 'Energy@GT, Georgia Tech',
      date: 'September 2026 – Present',
      cat: 'Energy, Electrical, Data',
      context: 'Energy@GT is building a collapsible solar array, with a demo planned for early February 2027.',
      why: 'A demo proves an array works; a product people will actually use needs a clear dashboard, an easy setup and parts that scale. The data side turns raw panel readings into output and efficiency numbers that show whether the design is worth deploying.',
      roleText: 'I co-lead the 6-person electrical team and am the sole data lead. I led the commercialization plan, and I drive microcontroller interface, sourcing and budget decisions.',
      result: 'Project scope redefined beyond the demo to include a user-facing dashboard, ergonomic design and a modular architecture. A standardized BOM and a Power BI KPI dashboard are being set up ahead of the February demo.',
      metrics: [
        { n: '6', l: 'person electrical team co-led' },
        { n: '2', l: 'team meetings a week' },
        { n: 'Sole', l: 'data lead' }
      ],
      bullets: [
        'Led the commercialization plan for the collapsible solar array, redefining project scope beyond the demo to include a user-facing dashboard, ergonomic design, & scalable modular architecture.',
        'Co-lead a 6-person electrical team on the collapsible solar array: assigning deliverables, managing deadlines in 2 weekly meetings, & mentoring members on microcontroller fundamentals (IEEE SSCS).',
        'Drive microcontroller interface, sourcing, & budget decisions under cost & schedule constraints ahead of the demo.',
        'Developing a custom BOM spreadsheet standardizing procurement format & assigning component ownership, so the team orders consistently ahead of the demo.',
        'Sole data lead: setting up processing of array sensor signals into output & efficiency KPIs on a Power BI dashboard for the team & users.'
      ],
      tools: ['Power BI', 'Microcontrollers', 'BOM & procurement', 'Team leadership'],
      media: []
    },
    {
      id: 'energyhack', logo: 'assets/img/logos/energygt.png',
      group: 'Student Teams & Leadership',
      title: 'EnergyHack@GT 2027: Judges and Sponsors',
      role: 'Judging & Sponsor Co-Head',
      org: 'EnergyHack@GT 2027, Energy@GT',
      date: 'November 2026 – Present',
      cat: 'Event Leadership, Industry Relations',
      context: 'EnergyHack@GT is Energy@GT\u2019s energy-focused hackathon, running January 22\u201324, 2027.',
      why: 'A hackathon is only as good as the people who judge it and the companies that back it: credible judges give teams real feedback, and sponsors fund the prizes and bring the problems.',
      roleText: 'I co-head judging and sponsor outreach with one other organizer, sharing both rather than splitting them: recruiting industry judges and sponsors and working with them through the event.',
      result: 'Outreach under way for the January 2027 event.',
      metrics: [],
      bullets: [
        'Co-head judging & sponsor outreach for the EnergyHack@GT 2027 hackathon (Jan. 22\u201324), working with sponsors & judges.'
      ],
      tools: ['Sponsor outreach', 'Judging logistics'],
      media: []
    },
    {
      id: 'tesla', logo: 'assets/img/logos/sclo.png',
      group: 'Competitions',
      title: 'Tesla Sourcing Strategy under Uncertainty',
      role: 'Team Lead',
      org: 'Tesla Supply Chain Case Competition (SCLO), Georgia Tech',
      date: 'October 2026',
      cat: 'Sourcing, Risk Modeling',
      context: 'An end-to-end sourcing-strategy case for Tesla, weighing supplier risk, cost and lead-time trade-offs.',
      roleText: 'Led a 3-person team (Team 14) and built the Monte Carlo model behind the recommendation.',
      result: 'Ranked sourcing options by risk-adjusted cost and delivered a 3-minute executive video pitch on deadline.',
      metrics: [
        { n: '10,000', l: 'Monte Carlo trials' },
        { n: '3', l: 'person team led' },
        { n: '3 min', l: 'executive video pitch' }
      ],
      bullets: [
        'Led a 3-person team (Team 14) through end-to-end sourcing-strategy analysis for Tesla (supplier risk, cost, & lead-time trade-offs), delivering a 3-minute executive video pitch on deadline.',
        'Built a 10,000-trial Monte Carlo model of supply, lead-time, & cost variability to rank sourcing options by risk-adjusted cost.'
      ],
      tools: ['Monte Carlo simulation', 'Supplier risk analysis', 'Excel', 'Video pitch'],
      media: []
    },
    {
      id: 'hackgt', logo: 'assets/img/logos/hackgt.png',
      group: 'Competitions',
      title: 'ScamShield-AI: Real-Time Scam-Call Protection',
      role: 'Product Lead',
      org: 'HackGT 13, Georgia Tech',
      date: 'September 2026',
      cat: 'Product, Full-Stack, AI',
      context: 'A 36-hour hackathon build: real-time protection against scam phone calls.',
      roleText: 'Product lead of a 4-person team. Wrote the spec, API contract and build plan, and directed AI coding agents (Cursor, Claude Code) to deliver the app.',
      result: 'Shipped a full-stack Next.js app with 27 REST endpoints in 36 hours; pitched live across 4 prize tracks and got technical feedback from NSA, Meta and SpaceX AI engineers.',
      metrics: [
        { n: '36 hrs', l: 'spec to shipped app' },
        { n: '27', l: 'REST endpoints' },
        { n: '4', l: 'prize tracks pitched' }
      ],
      bullets: [
        'Shipped ScamShield-AI, real-time scam-call protection, in 36 hours as product lead of a 4-person team: wrote the spec, API contract, & build plan; directed AI coding agents (Cursor, Claude Code) to deliver a full-stack Next.js app (27 REST endpoints).',
        'Pitched live across 4 prize tracks; earned technical feedback from NSA, Meta, & SpaceX AI engineers.'
      ],
      tools: ['Next.js / React / TypeScript', 'Node.js', 'REST APIs', 'MongoDB', 'Vercel', 'Cursor', 'Claude Code'],
      media: []
    },
    {
      id: 'forage', logo: 'assets/img/logos/siemens.png',
      group: 'Competitions',
      title: 'Wheel-Assembly Bottleneck & Layout Fix',
      role: 'Participant',
      org: 'Siemens Mobility: Operations & Industrial Engineering Job Simulation (Forage)',
      date: 'May 2026',
      cat: 'Operations, Process Analysis',
      context: 'A Siemens Mobility operations-optimization job simulation focused on a wheel-assembly process.',
      roleText: 'Used process analysis to find the bottleneck and propose a layout change.',
      result: 'Pinpointed the wheel-assembly bottleneck and presented a layout fix in PowerPoint.',
      metrics: [
        { n: '1', l: 'bottleneck pinpointed' },
        { n: '✓', l: 'layout fix proposed' }
      ],
      bullets: [
        'Completed the Siemens Mobility operations-optimization job simulation: used process analysis to pinpoint a wheel-assembly bottleneck & propose a layout fix, presented via PowerPoint.'
      ],
      tools: ['Process analysis', 'Bottleneck analysis', 'Layout design', 'PowerPoint'],
      media: []
    },
    {
      id: 'bcg', logo: 'assets/img/logos/bcg.png',
      group: 'Competitions',
      title: 'Thinking Like a Strategy Consultant: Revenue Growth Ideas',
      role: 'Participant',
      org: 'BCG: Introduction to Strategy Consulting Job Simulation (Forage)',
      date: 'July 2026',
      cat: 'Strategy, Problem Solving',
      context: 'A Boston Consulting Group job simulation on Forage: help a fictional luxury clothing company grow sales revenue, using the way BCG consultants approach a problem.',
      why: 'Good engineering and operations work starts the same way good strategy does: question the assumptions everyone takes for granted before generating solutions.',
      roleText: 'Worked through BCG\u2019s tasks on challenging mental models, then generated and pressure-tested ideas to grow the client\u2019s revenue.',
      result: 'Completed the simulation and earned BCG\u2019s Forage certificate.',
      metrics: [],
      bullets: [
        'Completed BCG\u2019s Introduction to Strategy Consulting job simulation (Forage): challenged the assumptions behind a luxury clothing client\u2019s current thinking & generated ideas to grow its sales revenue.'
      ],
      tools: ['Brainstorming & ideation', 'Critical thinking', 'Creative problem solving'],
      media: []
    },
    {
      id: 'sclo', logo: 'assets/img/logos/sclo.png',
      group: 'Student Teams & Leadership',
      title: 'Bringing Supply-Chain Employers to Georgia Tech Students',
      role: 'Corporate Outreach Officer',
      org: 'Supply Chain & Logistics Organization (SCLO), Georgia Tech',
      date: 'November 2026 – Present',
      cat: 'Industry Relations, Leadership',
      context: 'SCLO is Georgia Tech\u2019s supply chain and logistics student organization. Its speaker sessions, Supply Chain Day, case competitions and semester-long pro bono projects all depend on companies agreeing to take part.',
      why: 'Every speaker session, case competition and pro bono project starts with a company saying yes to a first call, so outreach is the pipeline that feeds everything else the club offers students.',
      roleText: 'I am one of three outreach officers. I source company contacts, prioritizing Georgia Tech alumni at top supply-chain companies, and I am building a Power Automate and Excel mail-merge pipeline so each officer can send personalized outreach in batches from the club\u2019s shared mailbox.',
      result: 'Outreach pipeline being built for spring 2027, working up a ladder from a first call to speaker sessions, case competitions, pro bono projects and sponsorship.',
      metrics: [
        { n: '3', l: 'outreach officers, each with assigned contacts' },
        { n: '1st', l: 'priority: top supply-chain companies' }
      ],
      bullets: [
        'Selected as one of three Corporate Outreach Officers for Georgia Tech\u2019s Supply Chain & Logistics Organization after an interview.',
        'Sourcing company contacts through CareerShift, prioritizing Georgia Tech alumni at top supply-chain companies, with LinkedIn as a secondary channel.',
        'Building a Power Automate and Excel mail-merge pipeline so officers can send personalized outreach in batches from the club\u2019s shared mailbox.',
        'Working companies up an engagement ladder: a first call, then a speaker or info session (weekly meetings, Supply Chain Day), then case competitions, semester-long pro bono projects and sponsorship.'
      ],
      tools: ['Power Automate', 'Excel mail merge', 'CareerShift', 'LinkedIn', 'Outlook'],
      media: []
    }
  ],

  /* ---------------- EARLIER WORK (high school) ---------------- */
  earlier: [
    {
      id: 'vision', logo: 'assets/img/logos/nyas.png', group: 'Earlier Work', title: 'VisionXcelerate: AR Smart Glasses for Dementia', org: 'NYAS Junior Academy', date: '2024',
      cat: 'Wearables, Product Design', badge: 'Winner, 1st of 170 teams',
      context: 'Dementia patients lose independence as memory declines, and most assistive tech reacts after something goes wrong.',
      roleText: 'Led CAD design, research, and the embedded IoT hardware and software stack; designed the AR interface concept for real-time memory cues.',
      result: 'Winner, NYAS Wearable Technologies Challenge, 1st of 170 global teams.',
      tools: ['CAD', 'Embedded IoT', 'AR concept', 'Research'],
      media: [{ src: 'assets/img/visionx-glasses.jpg', cap: 'Smart-glasses CAD concept' }]
    },
    {
      id: 'gripper', logo: 'assets/img/logos/northwood.png', group: 'Earlier Work', title: 'Pneumatic Soft Robotic Gripper for Fruit Harvesting', org: 'Northwood School, Lake Placid', date: '2024',
      cat: 'Soft Robotics, Biomimicry', badge: 'Lake Placid STEM Exhibition',
      context: 'Rigid grippers bruise soft produce; small farms need compliant, low-cost alternatives, a problem I saw in rural Indian agriculture.',
      roleText: 'Self-led, end-to-end: CAD, 3D-printed molds, silicone casting, Arduino-controlled pneumatics, and testing.',
      result: 'Exhibited at the Lake Placid STEM Exhibition; earned Advanced STEM college credit.',
      tools: ['CAD', '3D printing', 'Silicone casting', 'Arduino', 'Pneumatics'],
      media: [
        { src: 'assets/img/gripper-cad.jpg', cap: 'Four-finger CAD model' },
        { src: 'assets/img/gripper-proto.png', cap: 'Working prototype with pumps & valves' },
        { src: 'assets/img/gripper-test.jpg', cap: 'Testing the Arduino control circuit' },
        { src: 'assets/img/gripper-slice.jpg', cap: 'Slicing the 3D-printed base' },
        { src: 'assets/img/gripper-expo.jpg', cap: 'Presenting at the STEM exhibition' }
      ]
    },
    {
      id: 'frc', logo: 'assets/img/logos/northwood.png', group: 'Earlier Work', title: 'FRC Robot: Mechanical Lead & Autonomous Gyro-Drive', org: 'Northwood School FRC Team', date: '2024',
      cat: 'Robotics, Controls', badge: '3rd, South Florida Regional',
      context: 'FRC robots drift in the 15-second autonomous period; the team had no experienced programmer.',
      roleText: 'Mechanical Lead on the team; also taught myself Java and wrote the gyro-drive autonomous routine that self-corrects heading.',
      result: '3rd at South Florida Regional and 4th at NY Tech Valley Regional (2024).',
      tools: ['Java', 'WPILib', 'Gyro control', 'Mechanical build'],
      media: [
        { type: 'video', src: 'assets/video/frc-1.mp4', poster: 'assets/img/frc-1-poster.jpg', cap: 'Robot in action, clip 1' },
        { type: 'video', src: 'assets/video/frc-2.mp4', poster: 'assets/img/frc-2-poster.jpg', cap: 'Robot in action, clip 2' },
        { type: 'video', src: 'assets/video/frc-3.mp4', poster: 'assets/img/frc-3-poster.jpg', cap: 'Robot in action, clip 3' }
      ]
    },
    {
      id: 'adirondack', logo: 'assets/img/logos/northwood.png', group: 'Earlier Work', title: 'Modernist Adirondack Home: Full CAD House Plan', org: 'Northwood School', date: 'March – May 2024',
      cat: 'Architectural CAD',
      context: 'Design a complete three-storey home from scratch using CAD only.',
      roleText: 'Independently produced dimensioned floor plans, a 3D model with interiors, section views and a cardboard scale model.',
      result: 'Complete architectural CAD package plus physical scale prototype.',
      tools: ['SketchUp', 'Floor plans', '3D modeling', 'Prototyping'],
      media: [
        { src: 'assets/img/adirondack5.jpg', cap: 'Complete home, isometric' },
        { src: 'assets/img/adirondack.jpg', cap: 'Floor plan' },
        { src: 'assets/img/adirondack4.jpg', cap: 'Floor 1, isometric' },
        { src: 'assets/img/adirondack1.jpg', cap: 'Cross-section, floor 2' },
        { src: 'assets/img/adirondack6.jpg', cap: 'Rapid cardboard scale model' }
      ]
    },
    {
      id: 'studyunit', logo: 'assets/img/logos/kgv.png', group: 'Earlier Work', title: 'Portable Study Unit: Electronic Product Design', org: 'King George V School (IGCSE DT)', date: '2023',
      cat: 'Product Design, Electronics', badge: 'Highest in Asia, IGCSE DT',
      context: 'Small Hong Kong homes make it hard for students and remote workers to keep an organised, ventilated workspace.',
      roleText: 'Ran the full design process: client research, CAD, engineering drawings, electronics (LDR, thermistor, cooling fan) and manufacture.',
      result: 'Built and evaluated a working prototype; highest IGCSE Design Technology mark in Asia.',
      tools: ['CAD', 'Electronics', 'Engineering drawings', 'Manufacturing'],
      media: [
        { src: 'assets/img/studyunit-2.jpg', cap: 'Finished unit with drawers & laptop stand' },
        { src: 'assets/img/studyunit-1.jpg', cap: 'In use on a home desk' }
      ],
      pdf: 'pdfs/dtneaslides.pdf'
    },
    {
      id: 'mekong', logo: 'assets/img/logos/northwood.png', group: 'Earlier Work', title: 'Mekong River Conflict: A Game-Theory Analysis', org: 'Research paper', date: '2023 – 2024',
      cat: 'Research, Mathematics',
      context: 'Six nations share the Mekong; upstream dams give China leverage. Is cooperation or unilateral action the rational strategy?',
      roleText: 'Wrote a research paper modeling the conflict with a two-player payoff matrix and four game variations, including incomplete information.',
      result: 'Completed paper and presentation on cooperation, payoffs and decision-making.',
      tools: ['Game theory', 'Payoff matrices', 'Research writing'],
      media: [], pdf: 'pdfs/gametheory_slides.pdf'
    },
    {
      id: 'truss', logo: 'assets/img/logos/northwood.png', group: 'Earlier Work', title: 'Popsicle Warren Truss Bridge', org: 'Northwood School', date: '2024',
      cat: 'Structural Engineering',
      context: 'Maximise load capacity of a popsicle-stick bridge on a fixed materials budget.',
      roleText: 'Chose a Warren truss in simulation, hand-analysed it (moments, method of joints), then built and load-tested it.',
      result: 'Held 40 lbs before failure.',
      metrics: [{ n: '40 lbs', l: 'held before failure' }],
      tools: ['Truss simulation', 'Hand calculations', 'SketchUp'],
      media: []
    },
    {
      id: 'greenhouse', group: 'Earlier Work', title: 'Modular AC Greenhouse System', org: 'HK Science Fair', date: '2024 – 2025',
      cat: 'Systems Design',
      context: 'Small-scale controlled-environment growing that reuses air-conditioner byproducts.',
      roleText: 'Led a team of four: feasibility research, CAD, 3D-printed components and material testing.',
      result: 'Presented at the HK Science Fair.',
      tools: ['Fusion 360', '3D printing', 'Material testing'],
      media: []
    }
  ],

  /* ---------------- EDUCATION ---------------- */
  education: [
    {
      school: 'Georgia Institute of Technology', place: 'Atlanta, GA', date: 'Expected May 2029',
      degree: 'B.S. Industrial & Systems Engineering (#1 IE program, U.S. News); concentration in Supply Chain Engineering, minor in Robotics',
      notes: 'Sophomore standing. Member of IISE and SCLO; VIP: Intelligent Robotics for Assembly & Design',
      logo: 'assets/img/logos/gatech.png'
    },
    {
      school: 'Stamford American School', place: 'Hong Kong', date: '2024 – 2026',
      degree: 'IB Diploma, Valedictorian',
      notes: 'IB 45/45 (perfect score, top 0.2% globally)',
      logo: 'assets/img/logos/stamford.png'
    },
    {
      school: 'Northwood School', place: 'Lake Placid, NY', date: '2023 – 2024',
      degree: 'AP Program, ranked 1st, 4.0 unweighted GPA',
      notes: 'Student-athlete soccer scholarship, Cum Laude Society, Dean\u2019s List; FRC Robotics Team 6300',
      logo: 'assets/img/logos/northwood.png'
    },
    {
      school: 'King George V School', place: 'Hong Kong', date: '2018 – 2023',
      degree: 'IGCSE: top 4 of 250, all A*/9s in 10 subjects',
      notes: 'Highest in Asia, IGCSE Design Technology; Speech Day awards in DT, Spanish, English and History',
      logo: 'assets/img/logos/kgv.png'
    }
  ],

  /* ---------------- CERTIFICATIONS ---------------- */
  certifications: [
    { t: 'Siemens Smart Manufacturing Certification', s: 'VNIT Nagpur / Siemens / 3D Engineering Automation LLP', st: 'Earned' },
    { t: 'Lean Six Sigma Yellow Belt', s: 'DMAIC, 7 wastes', st: 'Earned' },
    { t: 'IEEE SSCS Micro-Controller Proficiency Certificate', s: 'IEEE Solid-State Circuits Society', st: 'Earned' },
    { t: 'MathWorks (edX): Drone Simulation', s: 'MATLAB & Simulink', st: 'Earned' },
    { t: 'Semiconductors for Beginners', s: 'National University of Singapore (edX): crystal lattices, bandgaps, semiconductors and solar cells', st: 'Earned' },
    { t: 'SolidWorks CSWA & CSWP', s: 'Dassault Systèmes', st: 'In progress' }
  ],

  /* ---------------- SKILLS ---------------- */
  skills: [
    { h: 'Supply Chain & Analytics', items: ['Demand planning', 'Forecasting & backtesting', 'Inventory optimization (newsvendor)', 'Sourcing strategy', 'Monte Carlo simulation', 'ERP / WMS, RFID, GS1', 'Excel (PivotTables), Power BI', 'Python (Pandas), SQL (in progress)', 'KPI dashboards, Figma, D3/Recharts'] },
    { h: 'Process Excellence', items: ['Lean Six Sigma (DMAIC)', 'Continuous improvement', 'Bottleneck analysis', 'SOPs & standard work', 'Process simulation', 'Metrology (Zeiss COMET)'] },
    { h: 'CAD / CAM / CAE & Fabrication', items: ['Siemens NX, Simcenter 3D (FEA)', 'Tecnomatix', 'SolidWorks (Flow Simulation)', 'Fusion 360, Onshape', 'RobotStudio', 'CNC, EDM machining', 'ABB arc welding', 'Laser cutting, 3D printing'] },
    { h: 'Robotics & Electronics', items: ['ABB RAPID', 'KUKA / Fanuc cobots', 'Otto AMRs', 'NVIDIA Isaac Sim', 'Rhino / Grasshopper (learning)', 'Arduino (C++)', 'Soldering & wiring', 'Pneumatics'] },
    { h: 'Programming & AI', items: ['Python, Java, C++', 'MATLAB / Simulink', 'M & G-code', 'Next.js / React / TypeScript', 'Node.js, REST APIs, MongoDB', 'Vercel', 'Cursor, Claude Code', 'Wispr Flow'] },
    { h: 'Languages', items: ['English', 'Spanish', 'Hindi', 'Mandarin', 'Konkani'] }
  ],

  /* ---------------- EARLIER HONORS (from previous site) ---------------- */
  honors: [
    { l: 'NYAS, 2024', t: 'Winner, Wearable Tech Challenge', s: '1st of 170 global teams' },
    { l: 'NYAS, 2025', t: 'Top 10, Living in Extremes', s: 'Top 10 of 170 teams' },
    { l: 'NYAS, 2022', t: 'Runner-Up, Green Redesign', s: 'IoT & 5G smart closed-loop farm' },
    { l: 'HKAGE, 2025', t: 'Top 50 HK Youth STEAM Talent', s: 'Hong Kong Academy for Gifted Education' },
    { l: 'IGCSE, 2023', t: 'Highest in Asia, Design Technology', s: 'King George V School' },
    { l: 'ATF, 2019', t: 'HK National Tennis Squad', s: 'Represented Hong Kong, U14' }
  ]
};
