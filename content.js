/* =============================================================================
   YOUR WEBSITE CONTENT  —  this is the ONLY file you normally need to edit.
   =============================================================================

   HOW IT WORKS
   ------------
   All the words on your site live here, in plain lists. The design (colours,
   layout, fonts) lives in index.html and you can ignore it. When you want to
   add a paper, a talk, or a news item, you just copy one of the existing lines,
   paste it at the TOP of the right list, and change the text.

   THREE SMALL RULES (the only things that can break the page)
     1. Keep each entry wrapped in backticks:  `like this`
     2. Put a comma after every entry  } ,
     3. To make text italic, wrap it in <i> ... </i>  (this is how journal and
        conference names are shown in italics)

   Counts (how many journal/conference papers etc.) are calculated for you
   automatically from the lists below — you never update numbers by hand.

   After editing, just save this file and refresh the page.
============================================================================= */

const SITE = {

  /* ---- WHO YOU ARE (shown in the header and hero) ----------------------- */
  name: `Metin Ozturk, PhD, SMIEEE`,
  tagline: `Wireless Communications | Non-Terrestrial Networks | 6G | AI`,
  photo: `profilepic.jpg`,                 // keep this image file next to index.html
  lastUpdated: `15 June 2026`,      // change this whenever you update the site
  copyrightYear: `2024`,

  /* ---- THE NUMBER STRIP AT THE TOP OF THE PAGE -------------------------- */
  /* Edit these freely — change the number or the label.                     */
  /* You can type a fixed number (e.g. 6), OR use one of these keywords and  */
  /* the strip will count it for you automatically:                          */
  /*   `publications` -> journals + conferences + book chapters              */
  /*   `talks`        -> entries in your Talks list                          */
  /*   `courses`      -> graduate + undergraduate courses                    */
  heroStats: [
    { num: `publications`, label: `Research publications` },
    { num: 6,              label: `Projects` },
    { num: `talks`,        label: `Talks` },
    { num: `courses`,      label: `Courses taught` },
  ],

  // The short welcome paragraph at the very top
  welcome: `Hello! I am a researcher and currently an Assistant Professor, working on various aspects of wireless communication networks, with a special focus on non-terrestrial networks (NTN), sustainability, and artificial intelligence (AI) applications. Here, you can explore my most recent works and projects.`,

  /* ---- CONTACT + SOCIAL LINKS ------------------------------------------- */
  email: `metin.ozturk@aybu.edu.tr`,
  links: {
    linkedin:     `https://www.linkedin.com/in/metin-ozturk`,
    twitter:      `https://twitter.com/MettinOzturk`,
    scholar:      `https://scholar.google.ca/citations?user=4UxKZw4AAAAJ&hl=en`,
    researchgate: `https://www.researchgate.net/profile/Metin-Ozturk-3`,
  },

  /* ---- NEWS / ANNOUNCEMENTS --------------------------------------------- */
  /* Newest first. To add one, copy a line and paste it just below this note. */
  announcements: [
    { date: `07 June 2026`,     body: `We attended IEEE International Conference on Communications (IEEE ICC 2026) in Glasgow, UK, from May 24 to 27, 2026, where our AYBU NTN-Lab presented three papers.` },
    { date: `28 December 2025`, body: `I delivered a tutorial titled "Towards Sustainable 6G: The Role of Non-Terrestrial Networks in Intelligent Green Communication Systems" at 2025 International Conference on Engineering and Computing Technologies (EngiTek 2025), Irbid, Jordan.` },
    { date: `05 August 2025`,   body: `I was a speaker at XCHANGING IDEAS #64: Global 5G Evolution, delivering my talk titled "Internet Above the Clouds: The Promise of High-Altitude Platform Stations (HAPS)."` },
    { date: `25 June 2025`,     body: `We delivered a tutorial titled "6G and Beyond Wireless Communication Systems with High Altitude Platform Stations (HAPS)", co-presented with Cihan Kement, at IEEE SIU 2025 (Signal Processing and Communication Applications Conference), Istanbul, Turkiye.` },
    { date: `09 May 2025`,      body: `I gave a seminar titled "Elevating Connectivity: HAPS-Based Communications for a Connected Future" at Electrical and Electronics Engineering, Middle East Technical University (METU), Ankara, Turkiye.` },
    { date: `23 April 2025`,    body: `I gave a webinar titled "The AI Revolution in Wireless Communications: Magic, Myth, or the Next Reality?" jointly organized by IEEE Women in Engineering Ottawa Section and Carleton University NTN-Lab.` },
    { date: `19 December 2024`, body: `Became a panelist in an event, titled "Meeting with Academics", organized by IEEE AYBU Student Branch.` },
    { date: `15 November 2024`, body: `Gave a seminar titled "Sky-High Solutions for Connectivity: How HAPS is Redefining Non-Terrestial Networks" at TUBITAK-Bilgem in Gebze, Kocaeli, Turkiye.` },

    /* --- Older items, currently hidden (they were commented out before). ---
       To show one again, delete the // at the start of its line.            */
    // { date: `02 October 2024`, body: `I was elevated to IEEE Senior Membership.` },
    // { date: `16 July 2024`,    body: `Metin Ozturk was interviewed by Cahid Atik from gdh digital, a large media outlet in Türkiye, about AI-related threats and opportunities, including those in 6G networks.` },
    // { date: `18 June 2024`,    body: `Our paper, titled "Cell Switching in HAPS-Aided Networking: How the Obscurity of Traffic Loads Affects the Decision," was accepted for publication at IEEE Transactions on Vehicular Technology.` },
    // { date: `14 June 2024`,    body: `Metin Ozturk was a panelist on the theme of "Non-Terrestrial Networks for Sustainable and Intelligent 6G Networks" at the panel session titled "Technologies That Will Revolutionize 6G" during the xURLLC6G Workshop at IEEE ICC 2024.` },
    // { date: `14 June 2024`,    body: `Metin Ozturk chaired a session at the IEEE International Conference on Communications (ICC) 2024, during the Workshop on Ultra High Data Rate Enabled Next Generation Hyper-Reliable and Low-Latency Communications for Futuristic 6G Networks (xURLLC6G).` },
    // { date: `24 May 2024`,     body: `Metin Ozturk delivered a talk, titled "Sustainability in Wireless Communications: Can HAPS Be Instrumental?," in a webinar organized and hosted by Dr. Abdulkadir Köse from Computer Engineering, Abdullah Gül University, Kayseri, Turkiye.` },
  ],

  /* ---- ABOUT (one entry = one paragraph) -------------------------------- */
  about: [
    `Hello!`,
    `I am a senior researcher on wireless communications. Currently, I'm working as an Assistant Professor of Telecommunications for Ankara Yıldırım Beyazıt University, Turkiye, where I previously worked as a Lecturer between 2020 and 2021, and as a Research Assistant between 2013 and 2016. Between 2023 and 2024, I worked as a Visiting Professor at Carleton University, Canada for a full year. I am the Director of CosetLab (Communication and Sensing Technologies Laboratory) at Ankara Yildirim Beyazit University. My current research interest is sustainability in non-terrestrial networks (NTN)-assisted wireless communication networks.`,
    `I received my Ph.D. degree from the James Watt School of Engineering, University of Glasgow, UK, and obtained my B.Sc. (in Electrical and Electronics Engineering) and M.Sc. (in Electronics and Communication Engineering) from Eskisehir Osmangazi University, Turkiye and Ankara Yildirim Beyazit University, Turkiye, in 2013 and 2016, respectively.`,
    `I have authored/co-authored 50+ journal & conference papers as well as book chapters published at top-tier venues. Additionally, we have received Workshop Best Paper Award in IEEE WCNC 2019.`,
    `I have been serving as guest editor, research topic editor, and academic reviewer for various high-class journals and conferences. We have also organized a workshop at IEEE-WCNC 2023, titled "AI-Enabled Network Orchestration: Design Challenges and Opportunities for 6G Networks." I have also delivered several seminars, talks, and keynote speeches that helped me sharing experience with people from distintive backgrounds.`,
    `I am happily married and have one lovely kid.`,
  ],

  /* ---- RESEARCH --------------------------------------------------------- */
  researchIntro: `My resarch interests encompass various aspects of wireless networks, including:`,
  researchImage: `system_model.png`,   // keep this image file next to index.html
  researchInterests: [
    `6G and 5G networks`,
    `Non-terrestrial networks (NTN)`,
    `Artificial intelligence (AI) for communications`,
    `Sustainability in  wireless communication networks`,
    `Cell-switching for energy efficiency in cellular communications`,
    `Radio resource management`,
    `High altitude platform station (HAPS) assisted cell switching in cellular networks`,
    `Internet of things (IoT)`,
    `Cognitive radio and opportunistic spectrum access`,
  ],

  /* =========================================================================
     PUBLICATIONS
     -------------------------------------------------------------------------
     To add a paper: copy the FIRST line of the matching list, paste it at the
     top of that list, and edit the id and the citation.

       id    = the label in brackets, e.g. "J-27"
       cite  = the full reference. Wrap the journal/conference name in <i></i>.
       status (optional) = "accepted"  -> amber highlight
                           "review"    -> grey highlight
                           leave it out -> normal (already published)
     ========================================================================= */

  journals: [
    { id: `J-26`, status: `accepted`, cite: `Talal Alqahtani, Metin Ozturk, Yu Chen, Amjed Hameed, Shuja Ansari, Muhammad Ali Imran, Yusuf Sambo (2026). Blockchain-Enabled Dynamic Spectrum Trading for Next-Generation Wireless Networks. <i>IEEE Open Journal of the Communications Society</i>. (Accepted on 07 June 2026)` },
    { id: `J-25`, cite: `Faicel Khennoufa, Khelil Abdellatif, Halim Yanikomeroglu, Safwan Alfattani, Metin Ozturk, Ferdi Kara (2026). Two-Tier High Altitude Platform Stations (HAPS) for Exploring Wireless Energy Harvesting. <i>IEEE Access</i>. Volume 14, 59422 - 59438. (<a href="https://ieeexplore.ieee.org/document/11482139/">Link to the paper</a>)` },
    { id: `J-24`, status: `accepted`, cite: `Faicel Khennoufa, Khelil Abdellatif, Metin Ozturk, Halim Yanikomeroglu, Safwan Alfattani (2026). RSMA-Enabled Hierarchical UAV Networks with Non-Linear Energy Harvesting: Outage Probability Analysis and UAV Placement Optimization. <i>IEEE Transactions on Vehicular Technology</i>. (Accepted on 03 June 2026) (<a href="https://arxiv.org/abs/2606.07284">Link to the paper</a>)` },
    { id: `J-23`, cite: `Maryam Salamatmoghadasi, Metin Ozturk and Halim Yanikomeroglu (2026). Two-Phase Cell Switching in 6G vHetNets: Sleeping-Cell Load Estimation and Renewable-Aware Switching Toward NES. <i>IEEE Transactions on Cognitive Communications and Networking</i>. Volume 12, 7034 - 7047. (<a href="https://arxiv.org/abs/2603.15881">Link to the paper</a>)` },
    { id: `J-22`, status: `accepted`, cite: `Metin Ozturk (2026). Unified Optimization of Solar-Powered Cell Switching in HAPS-Assisted 6G Networks. <i>Wireless Personal Communications</i>. (Accepted on 15 June 2026)` },
    { id: `J-21`, cite: `Metin Ozturk, Maryam Salamatmoghadasi, Halim Yanikomeroglu  (2026). Integrating Terrestrial and Non-Terrestrial Networks for Sustainable 6G Operations: A Latency-Aware Multi-Tier Cell-Switching Approach. <i>IEEE Network</i>. 40(2), 156 - 164. (<a href="https://arxiv.org/abs/2508.10849">Link to the paper</a>)` },
    { id: `J-20`, cite: `Faical Khennoufa, Khelil Abdellatif, Halim Yanikomeroglu, Metin Ozturk, Taissir Elganimi, Ferdi Kara, Khaled Rabie (2025). A Multi-layer Non-Terrestrial Networks Architecture for 6G and Beyond under Realistic Conditions and with Practical Limitations. <i>IEEE Internet of Things Magazine</i>. 8(5), 136 - 143. (<a href="https://arxiv.org/abs/2502.16296">Link to the paper</a>)` },
    { id: `J-19`, cite: `Attai Ibrahim Abubakar, Michael S. Mollel, Metin Ozturk, Naeem Ramzan (2025). A Secured Energy Saving with Federated Assisted Modified Actor-Critic Framework for 6G Networks. <i>IEEE Transactions on Vehicular Technology</i>. 74(6), 9671 - 9688. (<a href="https://ieeexplore.ieee.org/document/10879325">Link to the paper</a>)` },
    { id: `J-18`, cite: `Berk Çiloğlu, Görkem Berkay Koç, Afsoon Alidadi Shamsabadi, Metin Ozturk, Halim Yanikomeroglu (2025). Strategic Demand-Planning in Wireless Networks: Can Generative-AI Save Spectrum and Energy?. <i>IEEE Communications Magazine</i>, 63(5), 134-141. (<a href="https://arxiv.org/abs/2407.02292">Link to the paper</a>)` },
    { id: `J-17`, cite: `Berk Çiloğlu, Görkem Berkay Koç, Metin Ozturk, Halim Yanikomeroglu (2024). Cell Switching in HAPS-Aided Networking: How the Obscurity of Traffic Loads Affects the Decision. <i>IEEE Transactions on Vehicular Technology</i>, 73(11), 17782-17787. (<a href="https://arxiv.org/abs/2405.00387">Link to the paper</a>)` },
    { id: `J-16`, cite: `Attai I. Abubakar, Michael S. Mollel, Oluwakayode Onireti, Metin Ozturk, Iftikhar Ahmad, Syed Muhammad Asad, Yusuf Sambo, Ahmed Zoha, Sajjad Hussain, Muhammad A. Imran (2023). Coverage and Throughput Analysis of an Energy Efficient UAV Base Station Positioning Scheme. <i>Computer Networks</i>, 232, 109854. (<a href="https://www.sciencedirect.com/science/article/pii/S1389128623002992">Link to the paper</a>)` },
    { id: `J-15`, cite: `Attai I. Abubakar, Iftikhar Ahmad, Kenechi G. Omeke, Metin Ozturk, Cihat Ozturk, Ali Makine Abdel-Salam, Michael S. Mollel, Qammer H. Abbasi, Sajjad Hussain, Muhammad A. Imran (2023). A Survey on Energy Optimization Techniques in UAV-Based Cellular Networks: From Conventional to Machine Learning Approaches. <i>Drones</i>, 7(3), 214. (<a href="https://www.mdpi.com/2504-446X/7/3/214">Link to the paper</a>)` },
    { id: `J-14`, cite: `Attai I. Abubakar, Cihat Ozturk, Metin Ozturk, Michael S. Mollel, Syed Muhammad Asad, Naveed Ul Hassan, Sajjad Hussain, Muhammad A. Imran (2022). Revenue Maximization through Cell Switching and Spectrum Leasing in 5G Heterogeneous Cellular Networks. <i>IEEE Access</i>, 10, 48301-48317. (<a href="https://ieeexplore.ieee.org/document/9766327">Link to the paper</a>)` },
    { id: `J-13`, cite: `Metin Ozturk, Attai I. Abubakar, Rao Naveed Bin Rais, Mona Jaber, Sajjad Hussain, Muhammad A. Imran (2022). Context-Aware Connectivity and Processing Optimization for IoT Networks. <i>IEEE Internet of Things Journal</i>, 9(17), 16028-16043. (<a href="https://ieeexplore.ieee.org/document/9716065">Link to the paper</a>)` },
    { id: `J-12`, cite: `Attai I. Abubakar, Michael S. Mollel, Metin Ozturk, Sajjad Hussain, Muhammad A. Imran, (2022). A Lightweight Cell Switching and Traffic Offloading Scheme for Energy Optimization in Ultra-Dense Heterogeneous Networks. <i>Physical Communication</i>, 52, 101643. (<a href="https://www.sciencedirect.com/science/article/pii/S1874490722000283">Link to the paper</a>)` },
    { id: `J-11`, cite: `Ibrahim Atli, Metin Ozturk, Gianluca C. Valastro, Muhammad Zeeshan Asghar (2021). Multi-Objective UAV Positioning Mechanism for Sustainable Wireless Connectivity in Environments with Forbidden Flying Zones. <i>Algorithms</i>, 14(11), 302. (<a href="https://www.mdpi.com/1999-4893/14/11/302">Link to the paper</a>)` },
    { id: `J-10`, cite: `Michael S. Mollel, Attai I. Abubakar, Metin Ozturk, Shubi F. Kaijage, Michael Kisangiri, Sajjad Hussain, Muhammad A. Imran, Qammer H. Abbasi (2021). A Survey of Machine Learning Applications to Handover Management in 5G and Beyond. <i>IEEE Access</i>, 9, 45770-45802. (<a href="https://ieeexplore.ieee.org/document/9381854">Link to the paper</a>)` },
    { id: `J-09`, cite: `Attai I. Abubakar, Kenechi G. Omeke, Metin Ozturk, Sajjad Hussain, Muhammad A. Imran (2020). The Role of Artificial Intelligence Driven 5G Networks in COVID-19 Outbreak: Opportunities, Challenges, and Future Outlook. <i>Frontiers in Communications and Networks</i>, 1, 575065. (<a href="https://www.frontiersin.org/journals/communications-and-networks/articles/10.3389/frcmn.2020.575065/full">Link to the paper</a>)` },
    { id: `J-08`, cite: `Ozturk, M., Abubakar, A., Nadas, J. P.B., Rais, R. N. B., Hussain, S. and Imran, M. A. (2021). Energy optimization in Ultra-Dense Radio Access Networks via Traffic-Aware Cell Switching. <i>IEEE Transactions on Green Communications and Networking</i>, 5(2), 832-845.` },
    { id: `J-07`, cite: `Omeke, K. G., Mollel, M. S., Ozturk, M., Ansari, S., Zhang, L., Abbasi, Q. H. and Imran, M. A. (2021). DEKCS: A Dynamic Clustering Protocol to Prolong Underwater Sensor Networks. <i>IEEE Sensors Journal</i>, 21(7), 9457-9464.` },
    { id: `J-06`, cite: `Asad, S. M., Ansari, S., Ozturk, M., Rais, R. N. B., Zoha, A., Hussain, S., Abbasi, Q. H. and Imran, M. A. (2020). Mobility Management-Based Autonomous Energy-Aware Framework Using Machine Learning Approach in Dense Mobile Networks. <i>Signals</i>, 1 (2), 170-187.` },
    { id: `J-05`, cite: `Mollel, M. S., Abubakar, A. I., Ozturk, M., Kaijage, S., Kisangiri, M., Zoha, A., Imran, M. A. and Abbasi, Q. H. (2020). Intelligent Handover Decision Scheme Using Double Deep Reinforcement Learning. <i>Physical Communication</i>, 42, 101133.` },
    { id: `J-04`, cite: `Rizwan, A., Ali, N. A., Zoha, A., Ozturk, M., Alomaniy, A., Imran, M. A. and Abbasi, Q. H. (2020). Non-Invasive Hydration Level Estimation in Human Body Using Galvanic Skin Response. <i>IEEE Sensors Journal</i>, 20(9), 4891-4900.` },
    { id: `J-03`, cite: `Ozturk, M., Gogate, M., Onireti, O., Adeel, A., Hussain, A. and Imran, M. A. (2019). A Novel Deep Learning Driven Low-Cost Mobility Prediction Approach for 5G Cellular Networks: The Case of the Control/Data Separation Architecture (CDSA). <i>Neurocomputing</i>, 358, 479-489.` },
    { id: `J-02`, cite: `Metin Ozturk, Muhammad Akram, Sajjad Hussain, Muhammad A. Imran (2019). Novel QoS-Aware Proactive Spectrum Access Techniques for Cognitive Radio Using Machine Learning. <i>IEEE Access</i>, 7, 70811-70827. (<a href="https://ieeexplore.ieee.org/document/8720154/">Link to the paper</a>)` },
    { id: `J-01`, cite: `Metin Ozturk, Mona Jaber, Muhammad A. Imran (2018). Energy-Aware Smart Connectivity for IoT Networks: Enabling Smart Ports. <i>Wireless Communications and Mobile Computing</i>, 2018. (<a href="https://onlinelibrary.wiley.com/doi/10.1155/2018/5379326">Link to the paper</a>)` },
  ],

  conferences: [
    { id: `C-28`, status: `review`,   cite: `Karaman, B., Khennoufa, F., Basturk, I., Ozturk, M., Kara, F., Taskin, S. and Yanikomeroglu, H. (2026). HAPS-RIS or HAPS-Relay: Which Outperforms Under Impairments with NOMA in 6G NTN? In <i>2026 IIEEE Global Communications Conference (IEEE GLOBECOM) </i>. Macau S.A.R., China, 07–11 December 2026. (Under Review)` },
    { id: `C-27`, status: `review`,   cite: `Tanrıkulu, S. N., Başer, E. S. and Ozturk, M. (2026). Risk Sensitive Semantic Flow Management in Capacity Constrained Wireless Systems [<i>to be presented and published in Turkish</i>: Kapasite Kısıtlı Kablosuz Haberleşme Sistemlerinde Risk Duyarlı Anlamsal Veri Akışı Yönetimi]. In <i>2026 IEEE Conference on Signal Processing and Communications Applications</i>. Istanbul, Turkiye, 07–10 July 2026. (Under Review)` },
    { id: `C-26`, status: `review`,   cite: `Çağan, A. T., Ersoy, Ö., Ozturk, M. and Yanikomeroglu, H. (2026). HAPS for Maritime Communications: Performance Comparison of Relaying Techniques [<i>to be presented and published in Turkish</i>: Deniz İletişimi için Yüksek İrtifa Platform İstasyonları: Röleleme Tekniklerinin Başarım Karşılaştırması]. In <i>2026 IEEE Conference on Signal Processing and Communications Applications</i>. Istanbul, Turkiye, 07–10 July 2026. (Under Review)` },
    { id: `C-25`, status: `accepted`, cite: `Eren, T., Ozturk, M. and Aydin, E. (2026). Structural Analysis of Circular Convolution Breakdown in CP-OFDM for Half-Duplex Monostatic ISAC. In <i>2026 IEEE International Black Sea Conference on Communications and Networking (IEEE BlackSeaCom)</i>. Bucharest, Romania. 08-11 June 2026. (Accepted on 01 April 2026)` },
    { id: `C-24`, status: `accepted`, cite: `Khennoufa, F., Abdellatif, K., Ozturk, M., Yanikomeroglu, H. and Alfattani, S. (2026). Outage Probability Analysis of NOMA-Enabled Hierarchical UAV Networks with Non-Linear Energy Harvesting. In <i>2026 IEEE International Conference on Communications (IEEE ICC) Workshops (Workshop on AI-Driven Integration of Terrestrial and Non-Terrestrial Networks)</i>. Glasgow, United Kingdom. 24-28 May 2026. (Accepted on 09 March 2026)` },
    { id: `C-23`, status: `accepted`, cite: `Ulucinar, M. E., Ersoy, O., Ciloglu, B., Ozturk, M. and Gorcin, A. (2026). Propagation and Rate-Aware Cell Switching Optimization in HAPS-Assisted Wireless Networks. In <i>2026 IEEE International Conference on Communications (IEEE ICC) Workshops (Workshop on Sustainable and Sustainability-Enabling 6G).</i> Glasgow, United Kingdom. 24-28 May 2026. (Accepted on 09 March 2026)` },
    { id: `C-22`, status: `accepted`, cite: `Ciloglu, B., Ersoy, O., Ozturk, M. and Gorcin, A. (2026). ISAC-over-NTN: HAPS-UAV Framework for Post-Disaster Responsive 6G Networks. In <i>2026 IEEE International Conference on Communications (IEEE ICC).</i> Glasgow, United Kingdom. 24-28 May 2026. (Accepted on 19 Jan 2026)` },
    { id: `C-21`, cite: `Salamatmoghadasi, M., Ozturk, M. and Yanikomeroglu, H. (2025). Enhancing Sustainability in HAPS-Assisted 6G Networks: Load Estimation Aware Cell Switching. In <i>2025 IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (IEEE PIMRC).</i> Istanbul, Turkiye, 01-04 September 2025.` },
    { id: `C-20`, cite: `Karaman, B., Basturk, I., Kara, F., Ozturk, M., Taskin, S. and Yanikomeroglu, H. (2025). On the Trade-off Between Sum-Rate and Energy Efficiency Through the Convergence of HAPS and Active RIS Technologies. In <i>2025 IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (IEEE PIMRC).</i> Istanbul, Turkiye, 01-04 September 2025.` },
    { id: `C-19`, cite: `Koc, G. B. and Ozturk, M. (2025). Score-Based Allocation Method for Post-Disaster Communications via Multi-Layer NTN Architecture [<i>to be presented and published in Turkish</i>: Çok Katmanlı KOA Mimarisi ile Afet Sonrası Haberleşme İçin Skor Tabanlı Tahsis Yöntemi]. In <i>2025 IEEE Conference on Signal Processing and Communications Applications</i>. Istanbul, Turkiye, 25–28 June 2025.` },
    { id: `C-18`, cite: `Khennoufa, F., Abdellatif, K., Yanikomeroglu, H., Ozturk, M., Elganimi, T., Kara, F. and Rabie, K. (2025). Multi-Layer Network Formation Through HAPS Base Station and Transmissive RIS-Equipped UAV. In <i>2025 IEEE Wireless Communications and Networking Conference (IEEE WCNC).</i> Milan, Italy, 24-27 March 2024.` },
    { id: `C-17`, cite: `Koc, G. B., Ciloglu, B., Ozturk, M. and Yanikomeroglu, H. (2024). A Lightweight Machine Learning Approach for Delay-Aware Cell-Switching in 6G HAPS Networks. In <i>2024 IEEE International Conference on Communications (IEEE ICC) Workshops (xURLLC6G Workshop)</i>. Denver, CO, USA, 09–13 June 2024.` },
    { id: `C-16`, cite: `Ozturk, M., Ciloglu, B., Koc, G. B. and Yanikomeroglu, H. (2024). Multi-Tier Non-Terrestrial Networking for Disaster Communications: A Layered Clustering Approach. In <i>2024 IEEE Conference on Signal Processing and Communications Applications (IEEE SIU)</i>. Mersin, Turkiye, 15–18 May 2024.` },
    { id: `C-15`, cite: `Cagan, A. T., Kaymak, O., Ersoy, O. and Ozturk, M. (2023). Enabling Smart Port Connectivity via UAV-IRS Assisted Relaying. In <i>2023 Innovations in Intelligent Systems and Applications Conference (ASYU-2023) (Sponsored by IEEE)</i>. Sivas, Turkiye, 11–12 October 2023.` },
    { id: `C-14`, cite: `Koc, G. B., Ciloglu, B., Ozturk, M. and Yanikomeroglu, H. (2023). HAPS-enabled Sustainability Provision in Cellular Networks through Cell-Switching. In <i>2023 IEEE International Black Sea Conference on Communications and Networking (IEEE BlackSeaCom)</i>. Istanbul, Turkiye, 04–07 July 2023.` },
    { id: `C-13`, cite: `Ashgari, M. Z., Ozturk, M. and Hamalainen, J. (2021). Reinforcement Learning Based Mobility Load Balancing with the Cell Individual Offset. In <i>2021 IEEE Conference on Vehicular Technology (IEEE VTC-Spring) Workshops (ICNET Workshop)</i>. Helsinki, Finland, 25-28 April 2021.` },
    { id: `C-12`, cite: `Abubakar, A., Ozturk, M., Rais, R. N. B., Hussain, S. and Imran, M. (2020). Load-Aware Cell Switching in Ultra-Dense Networks: An Artificial Neural Network Approach. In <i>2020 International Conference on UK-China Emerging Technologies (UCET)</i>. Glasgow, United Kingdom, 20-21 August 2020.` },
    { id: `C-11`, cite: `Asad, S. M., Ozturk, M., Rais, R. N. B., Zoha, A., Hussain, S., Abbasi, Q. H. and Imran, M. A. (2019). Reinforcement Learning Driven Energy Efficient Mobile Communication and Applications. In <i>2019 IEEE International Symposium on Signal Processing and Information Technology (IEEE ISSPIT)</i>. Ajman, United Arab Emirates, 10-12 December 2019.` },
    { id: `C-10`, cite: `Ozturk, M., Nadas, J. P.B., Klaine, P. H.V., Hussain, S. and Imran, M. A. (2019). Clustering Based UAV Base Station Positioning for Enhanced Network Capacity. In <i>2019 International Conference on Advances in the Emerging Computing Technologies (AECT 2019)</i>. Medina, Saudi Arabia, 08-10 December 2019.` },
    { id: `C-09`, cite: `Abubakar, A., Ozturk, M., Hussain, S. and Imran, M. (2019). Q-learning Assisted Energy-Aware Traffic Offloading and Cell Switching in Heterogeneous Networks. In <i>IEEE 2019 International Workshop on Computer Aided Modeling and Design of Communication Links and Networks (IEEE CAMAD)</i>. Limassol, Cyprus, 11-13 September 2019.` },
    { id: `C-08`, cite: `Sambo, Y. A., Valastro, G. C., Patane, G. M. M., Ozturk, M., Hussain, S., Imran, M. A. and Panno, D. (2019). Motion Sensor-based Small Cell Sleep Scheduling for 5G Networks. In <i>IEEE 2019 International Workshop on Computer Aided Modeling and Design of Communication Links and Networks (IEEE CAMAD)</i>. Limassol, Cyprus, 11-13 September 2019.` },
    { id: `C-07`, cite: `Patane, G. M. M., Valastro, G. C., Sambo, Y. A., Ozturk, M., Hussain, S., Imran, M. A. and Panno, D. (2019). Flexible SDN/NFV-based Testbed for 5G Mobile Networks. In <i>IEEE/ACM  International Symposium on Distributed Simulation and Real Time Applications (DS-RT) 2019</i>. Cosenza, Italy, 7-9 October 2019.` },
    { id: `C-06`, cite: `Mollel, M., Ozturk, M., Kaijage, S., Kisangiri, M., Onireti, O., Imran, M. A. and Abbasi, Q. H. (2019). Handover Management in Dense Networks with Coverage Prediction from Sparse Networks. In <i>2019 IEEE Wireless Communications and Networking Conference (IEEE WCNC) Workshops (uHSLLC Workshop)</i>. Marrakech, Morocco, 15-18 April 2019.` },
    { id: `C-05`, cite: `Ozturk, M., Abubakar, I., Hassan, N. U., Hussain, S., Imran, M. A. and Yuen, C. (2019). Spectrum Cost Optimization for Cognitive Radio Transmission over TV White Spaces Using Artificial Neural Networks. In <i>4th International Conference on UK - China Emerging Technologies (UCET) 2019</i>. Glasgow, UK, 21-22 August 2019.` },
    { id: `C-04`, cite: `Turkmen, A., Mollel, M. S., Ozturk, M., Yao, S., Zhang, L., Ghannam, R. and Imran, M. A. (2019). Coverage Analysis for Indoor-Outdoor Coexistence for Millimetre-Wave Communication. In <i>4th International Conference on UK - China Emerging Technologies (UCET) 2019</i>. Glasgow, UK, 21-22 August 2019.` },
    { id: `C-03`, cite: `Ozturk, M., Valente Klaine, P. and Imran, M. A. (2018). Introducing a Novel Minimum Accuracy Concept for Predictive Mobility Management Schemes. In <i>2018 IEEE International Conference on Communications (IEEE ICC) Workshops (5G-UDN Workshop)</i>. Kansas City, MO, USA, 20-24 May 2018.` },
    { id: `C-02`, cite: `Ozturk, M., Valente Klaine, P. and Imran, M. A. (2018). 3D Transition Matrix Solution for a Path Dependency Problem of Markov Chains-Based Prediction in Cellular Networks. In <i>2017 IEEE Conference on Vehicular Technology (IEEE VTC-Fall) Workshops (BackNets Workshop)</i>. Toronto, Canada, 24-27 September 2017.` },
    { id: `C-01`, cite: `Ozturk, M., Valente Klaine, P. and Imran, M. A. (2018). Improvement on the Performance of Predictive Handover Management by Setting a Threshold. In <i>2017 IEEE Conference on Vehicular Technology (IEEE VTC-Fall) Workshops (BackNets Workshop)</i>. Toronto, Canada, 24-27 September 2017.` },
  ],

  bookChapters: [
    { id: `B-07`, cite: `Ozturk, M. (2023). Long Distance Power Transmission. In  M. A. Imran, A. Taha, S. Ansari, M. Usman and Q. H. Abbasi (Eds.), <i>The Role of 6G and Beyond on the Road to Net-Zero Carbon</i> (pp. 89–111). ISBN: 9781839537363. The Institution of Engineering and Technology (IET).` },
    { id: `B-06`, cite: `Ozturk, M., Abubakar, A., Valente Klaine, P., Hussain, S., Abbasi, Q. H. and Imran, M. A. (2020). Cognitive Radio Spectrum Sensing: From Conventional Approaches to Machine Learning-based Predictive Techniques. In H. Arslan and E. Basar (Eds.), <i>Flexible and Cognitive Radio Access Technologies for 5G and Beyond</i> (pp. 481-512). ISBN: 978-1839530791. The Institution of Engineering and Technology (IET). ` },
    { id: `B-05`, cite: `Rizwan, A., Ozturk, M., Ali, N. A., Zoha, A., Abbasi, Q. H. and Imran, M. A. (2020). Machine Learning for Decision Making in Healthcare. In R. Ghannam, M. A. Imran and Q. H. Abbasi (Eds.), <i>Engineering and Technology for Healthcare</i> (pp. 95-116). ISBN: 9781119644248. Wiley-IEEE Press.` },
    { id: `B-04`, cite: `Ozturk, M., Valente Klaine, P., Hussain, S. and Imran, M. A. (2020). Predictive Mobility Management in Cellular Networks. In M. Z. Shakir and N. Ramzan (Eds.), <i>AI for Emerging Verticals: Human-Robot Computing, Sensing and Networking</i> (pp. 135-155). ISBN: 9781785619823. The Institution of Engineering and Technology (IET).` },
    { id: `B-03`, cite: `Imran, M. A., Ozturk, M., Abubakar, A. I., Valente Klaine, P., Hussain, S. and Abbasi, Q. H. (2019). Mobility Prediction Based Resource Management. In R. Tafazolli, C.-L. Wang and P. Chatzimisios (Eds.), <i>Wiley 5G Ref: The Essential 5G Reference Online</i> (pp. 1-18). ISBN 9781119471509. Wiley.` },
    { id: `B-02`, cite: `Imran, M. A., Turkmen, A., Ozturk, M., Nadas, J. P. B. and Abbasi, Q. H. (2019). Seamless Indoor/Outdoor Coverage in 5G. In R. Tafazolli, C.-L. Wang and P. Chatzimisios (Eds.), <i>Wiley 5G Ref: The Essential 5G Reference Online</i> (pp. 1-18). ISBN 9781119471509. Wiley.` },
    { id: `B-01`, cite: `Ozturk, M., Jaber, M. and Imran, M. A. (2019). Life-Span Extension for Sensor Networks in the Industry. In M. A. Imran, S. Hussain and Q. H. Abbasi (Eds.), <i>Wireless Automation as an Enabler for the Next Industrial Revolution</i> (pp. 19-45). ISBN 9781119552611. Wiley-IEEE Press.` },
  ],

  // The descriptive sentences under each publication count (numbers are automatic).
  pubNotes: {
    journals:     `All are international and peer reviewed.`,
    conferences:  `All are peer-reviewed, full-text, and IEEE-related (either organized or sponsored).`,
    bookChapters: `All are in international and well-established publishers.`,
  },

  /* ---- TEACHING --------------------------------------------------------- */
  teachingIntro: `I have been involved in teaching various undergraduate and graduate courses, including:`,
  gradCourses: [
    `Non-Terrestrial Communication Networks`,
    `Research Methods and Ethics`,
    `Machine Learning for Wireless Communication Networks`,
    `Artificial Intelligence and Security`,
    `Wireless Communications`,
    `Tactical Wireless Communications and 5G Networks`,
  ],
  undergradCourses: [
    `Mobile Communications`,
    `Coding Theory`,
    `Introduction to Electrical and Electronics Engineering`,
    `Introduction to Electronics`,
    `Analog Electronics`,
    `Materials Science for Electrical and Electronics Engineers`,
    `Fundamentals of Electrical and Electronics Engineering`,
    `Electrical Circuits and Electronic Devices`,
  ],

  /* ---- TALKS & SEMINARS ------------------------------------------------- */
  /* kind = the type shown in bold; body = everything after it.             */
  talks: [
    { kind: `Tutorial`, body: `Title: "Towards Sustainable 6G: The Role of Non-Terrestrial Networks in Intelligent Green Communication Systems". 2025 International Conference on Engineering and Computing Technologies (EngiTek 2025). Irbid, Jordan, 28 December 2025.` },
    { kind: `Invited Talk`, body: `Title: "Internet Above the Clouds: The Promise of High-Altitude Platform Stations (HAPS)". IXCHANGING IDEAS #64 Global 5G Evolution. Online, 05 August 2025. <a href="https://youtu.be/c_G4mRSp-hM?si=tcVoMdAu2HuRwxm1">Click here to watch on YouTube (my part starts at 01:09:00)</a>` },
    { kind: `Tutorial`, body: `Title: "6G and Beyond Wireless Communication Systems with High Altitude Platform Stations (HAPS)". IEEE SIU 2025 (Signal Processing and Communication Applications Conference). Istanbul, Turkiye, 25 June 2025.` },
    { kind: `Seminar`, body: `Title: "Elevating Connectivity: HAPS-Based Communications for a Connected Future". Electrical and Electonics Engineering, Middle East Technical University (METU). Ankara, Turkiye, 09 May 2025.` },
    { kind: `Webinar`, body: `Title: "The AI Revolution in Wireless Communications: Magic, Myth, or the Next Reality?". Jointly organized by IEEE Women in Engineering Ottawa Section and Carleton University NTN-Lab. Ottawa, ON, Canada, 23 April 2025.` },
    { kind: `Panelist`, body: `Title: "Meeting with Academics". Organized by IEEE AYBU Student Branch, Ankara Yıldırım Beyazıt University. Ankara, Turkiye, 19 December 2024.` },
    { kind: `Seminar`, body: `Title: "Sky-High Solutions for Connectivity: How HAPS is Redefining Non-Terrestial Networks". TUBITAK-Bilgem. Gebze, Kocaeli, Turkiye, 15 November 2024. <a href="https://www.youtube.com/watch?v=YlzWjxC_cmc">Click here to watch on YouTube</a>` },
    { kind: `Panelist`, body: `Title: "Non-Terrestrial Networks for Sustainable and Intelligent 6G Networks". Title of the Panel Session: "Technologies That Will Revolutionize 6G". Workshop on Ultra High Data Rate Enabled Next Generation Hyper-Reliable and Low-Latency Communications for Futuristic 6G Networks (xURLLC6G), IEEE International Conference on Communications (ICC) 2024. Denver, CO, USA, 14 June 2024.` },
    { kind: `Webinar`, body: `Title: "Sustainability in Wireless Communications: Can HAPS Be Instrumental?". Computer Engineering, Abdullah Gul University. Kayseri, Turkiye, 24 May 2024.` },
    { kind: `Guest Lecture in a PhD Course`, body: `Title: "Machine Learning Based Predictive and Requirement-Specific Spectrum Access". Course Title: Machine Learning for Wireless Communications (ML4WC). Graduate School, University of Electronic Science and Technology of China (UESTC). China, 11 May 2023 (2022-2023/Spring).` },
    { kind: `Seminar`, body: `Title: "Artificial Intelligence in the Perspective of Law and Engineering: Can AI think?". School of Law, Ankara Yıldırım Beyazıt University. Ankara, Turkiye, 07 December 2022.` },
    { kind: `Seminar`, body: `Title: "Artificial Intelligence Strategies for Security, Health and Economy". Institute for International Relations and Strategic Studies (ULİSA), Ankara Yıldırım Beyazıt University. Ankara, Turkiye, 25 November 2022.` },
    { kind: `Invited Talk`, body: `Title: "The Role of AI in Shaping the 5G+ Communication Networks". Training on 5G+ Communication Systems and Their Applications, Abdullah Gül University. Kayseri, Turkiye, May-2022.` },
    { kind: `Keynote Speech`, body: `Title: "Intelligent Wireless Connectivity in 5G-enabled Smart Cities". 5G-enabled Smart Cities Workshop in IEEE International Smart Cities Conference. Manchester, United Kingdom, 07 September 2021.` },
    { kind: `Guest Lecture in a PhD Course`, body: `Title: "QoS-Aware Proactive Cognitive Radio Spectrum Access with Machine Learning". Course Title: Machine Learning for Wireless Communications (ML4WC). Graduate School, University of Electronic Science and Technology of China (UESTC). China, 02 June 2021 (2020-2021/Spring).` },
  ],

  /* ---- MEDIA COVERAGE --------------------------------------------------- */
  media: [
    `A media interview on Artificial Intelligence (AI) with gdh.digital, a large media outlet in Türkiye <a href="https://gdh.digital/haber-120829">[Link]</a> <a href="https://x.com/gundemedairhs/status/1813269685913465148">[Twitter/X Link]</a> [16 July 2024]`,
  ],

  /* ---- BLOG ------------------------------------------------------------- */
  blog: `I write blog articles on Medium: <a href="https://medium.com/@metin.ozturk">[My Medium Profile]</a>`,
};
