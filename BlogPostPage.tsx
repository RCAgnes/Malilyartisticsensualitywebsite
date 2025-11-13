import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import img1 from "figma:asset/d213a03ed966da47f0efd26edfaaec50c9f270d4.png";
import img2 from "figma:asset/d21e8bb238c245d25449f9aee58b814bdc8afcf9.png";
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";
import galleryImg1 from "figma:asset/de658fb0a2ae56cedbe6f4c39d5038e1f21d6189.png";
import galleryImg2 from "figma:asset/c2f19584388557a286f306b5f00760edab6d1771.png";
import blog2Img1 from "figma:asset/8ef34050c0231a1f2bbafef4f380cac16aa7e3f3.png";
import blog2Img2 from "figma:asset/2a6e6fbc61d8d9ee49c04b863da04eadd7a6b611.png";
import peggingImg1 from "figma:asset/33014da3965bf06cb197f749a572fdd4d21aaf9a.png";
import peggingImg2 from "figma:asset/13f0c737329352cf4d5e8124ae73783c1d5030eb.png";
import logoM from "figma:asset/129c9cfa369dbac8602987ce84a2b8f5339886e7.png";
import { useState, useEffect } from "react";

interface BlogPostPageProps {
  postId: string;
  onNavigate: (page: string) => void;
}

const blogContent = {
  "humiliation-bdsm": {
    title: "How to Safely Explore Humiliation in BDSM",
    image: img1,
    category: "Safety & Consent",
    source: "DomSubLiving",
    sourceUrl: "https://domsubliving.com/how-to-safely-explore-humiliation-in-bdsm/",
    readTime: "8 min read",
    photos: [galleryImg1, galleryImg2],
    content: `
      <p>Let's imagine you want to shift the power dynamics in your bedroom. Specifically, so the scales are tipped a little bit toward or away from your partner. Let's even imagine you want to introduce a hefty bit of negativity into that power shift.</p>

      <p>While those into vanilla sexual experiences might balk at such an idea, take note. The truth is there are legions of folks who like a bit of darkness or hostility layered into their encounters. For someone to be into a bit of degradation, we would say they have a "humiliation kink."</p>

      <p>It's one of countless kinks that are considerably more common than you might think. And the BDSM humiliation kink is one that is sure to deliver a new layer of sexual discovery.</p>

      <p>However, playing with erotic humiliation fetishes comes with its risks. Remember, this is a scenario in which both body and mind are about as raw as it gets. With this type of kinky experience, it's important to have clear boundaries, agreements, and understandings with your partner.</p>

      <p>But we're getting way ahead of ourselves. Let's first dive into defining humiliation in BDSM. We can then dive into different ways you can safely play it out in your next encounter.</p>

      <h3>What is Humiliation in BDSM?</h3>
      <p>Have you ever found yourself in a sexual encounter in which you unwittingly uttered some role-based dirty talk? Think something like, "I'm a dirty little slut" or "I'm a bad boy." Ta-da! You've already experienced a form of humiliation in BDSM.</p>

      <p>The key to BDSM humiliation is power dynamics. As with many BDSM encounters, one partner finds themselves empowered while the other finds themselves powerless.</p>

      <p>Sometimes, these dynamics can play out as they would in the context of your everyday relationship. But this can also make for great role-playing fodder between a trophy Dominant and submissive role. This can take countless forms. Here are just a few examples:</p>

      <ul>
        <li>Teacher and student</li>
        <li>Boss and employee</li>
        <li>Warden and prisoner</li>
        <li>Etc., etc., etc.</li>
      </ul>

      <p>In each of these dynamics (and the myriad others that follow a similar pattern), the key is control. One partner has a psychological hold on the other partner simply due to their position in the "hierarchy."</p>

      <p>So, you're likely wondering, where does the humiliation fetish come in? Well, bundled with that imbalanced power dynamic comes an immense opportunity for erotic humiliation.</p>

      <p>Let's take the warden and prisoner dynamic, for example. In a normal setting, a warden has physical power over a prisoner. It's a complicated and ever-shifting dynamic that both parties are actively aware of at all times.</p>

      <p>But for a prison humiliation fetish, for example, the dynamics are pushed even further.</p>

      <p>Imagine the warden ordering the prisoner to remove a piece of their clothing. Imagine, then, the warden tearing the cloth from the prisoner's body when they refuse. You can start to see where sexual arousal comes in.</p>

      <p>The warden has control of the prisoner's very free will. And that control can be erotically abused, which is where the humiliation angle comes into play. For someone who enjoys humiliation in sexual experiences, these moments are pure gold.</p>

      <h3>Layering in Erotic Humiliation Fetishes</h3>
      <p>Let's imagine you want to play with a teacher/student dynamic in your erotic humiliation encounters. The very first question you need to answer is who is going to play which role. Power dynamics can't easily shift from partner to partner during play. Be sure to establish clear roles and guidelines before play has begun.</p>

      <p>There is more to consider when it comes to guidelines, though. Roles are great, but without the ability to enforce them, they can be rendered meaningless. Even worse, without established boundaries and exits, you may find you or your partner become lost in the roles you've taken on.</p>

      <p>Before play begins, have an honest conversation with your partner about each of the rules you plan to follow. This should include:</p>

      <ul>
        <li>Consent</li>
        <li>Limits</li>
        <li>Safe Words</li>
        <li>Aftercare Plans</li>
        <li>And more</li>
      </ul>

      <p>Once you've had the setup conversation, we recommend you ease into a humiliation dynamic first. The last thing you want is to tentatively agree to something and then be thrown into the deep end. Work with your partner actively on what feels good/right and what feels too far. Together, you can define a dynamic that is as exciting as it is safe.</p>

      <h3>Discover a New World with Humiliation in BDSM</h3>
      <p>Humiliation fetishes are something to be celebrated when carried out smartly, safely, and freely.</p>

      <p>At Dom Sub Living, we love guiding sexual explorers toward new levels of pleasure. Discovering yourself in the context of a BDSM experience can awaken new parts of yourself.</p>

      <p>This is where our expert BDSM courses come into play. Through tailored, expert-led trainings, we can unlock the keys to better, safer, and more fulfilling play for countless kinks and fantasies. And it can be done on your terms, at your pace.</p>

      <p>Discover a new you in the bedroom. Get expert BDSM education now!</p>
    `,
  },
  "femdom-porn": {
    title: "Finding Free Femdom Porn on the Internet Safely",
    image: img2,
    category: "Digital Resources",
    source: "Collar N Cuffs",
    sourceUrl: "https://collarncuffs.com/finding-free-femdom-porn-on-the-internet-safely/",
    readTime: "6 min read",
    photos: [blog2Img1, blog2Img2],
    content: `
      <p>Explore the inherent risks of engaging with online adult content, particularly free femdom porn. This article highlights common dangers such as scams, malware, and privacy issues. Learn how to identify legitimate sources of adult content and employ safe browsing practices to protect your personal information while enjoying your online experiences. Discover alternative options like subscription services and community forums that prioritize safety and enhance your search for quality material. Navigate the complex landscape of adult entertainment with caution and informed strategies.</p>

      <h3>Understanding the Risks of Online Adult Content</h3>
      <p>Engaging with online adult content, particularly free femdom porn, can present various risks that users must recognize before exploring such material. One of the most significant dangers is the prevalence of scams, which are often disguised as enticing offers or premium memberships on seemingly legitimate sites. These scams may lead to financial loss or unauthorized charges on personal accounts, leaving individuals vulnerable to further exploitation. Users must be vigilant and critically evaluate the authenticity of websites claiming to provide free access to adult content.</p>

      <p>Another considerable risk involves the introduction of viruses and malware to users' devices. Many free adult content sites operate without proper security measures, making them prime targets for malicious attacks. Users who inadvertently visit compromised sites may download harmful software or experience data breaches, which can result in the loss of personal information or damage to their devices. Consequently, it is crucial to ensure that antivirus software is up to date and that users refrain from clicking on dubious links that may appear on these platforms.</p>

      <p>Privacy risks also pose a significant concern for individuals seeking free femdom porn online. Many websites collect personal data without explicit consent, leaving users exposed to unwanted solicitation or, in some cases, identity theft. Utilizing a Virtual Private Network (VPN) can add an additional layer of security, helping maintain anonymity while browsing adult content. Nevertheless, users should carefully read the privacy policies of websites and remain aware of the types of information requested during their visit.</p>

      <p>Ultimately, while the allure of free adult content can be strong, understanding the inherent risks associated with these sites is essential. Practicing caution and employing protective measures will significantly enhance the safety and security of users navigating the complex landscape of online adult entertainment.</p>

      <h3>Identifying Legitimate Sources for Free Femdom Porn</h3>
      <p>Searching for free femdom porn can be intriguing yet challenging, especially with the proliferation of websites offering adult content. To ensure a safe browsing experience, users must identify legitimate sources that provide high-quality and ethical content. One of the primary ways to discern trustworthy platforms is through user reviews. Before accessing a site, it is advisable to research feedback from other users. Engaging in discussions on trusted forums or communities dedicated to adult content can yield valuable recommendations and warnings about particular websites.</p>

      <p>Another crucial aspect in identifying credible sources is the presence of certifications or safe browsing indicators. Websites displaying SSL certificates, indicated by "https" in the URL, signify that user data is encrypted, enhancing security. Here at CollarNcuffs.com we are SSL certificate. Additionally, reputable platforms often bear certifications from industry watchdogs, ensuring ethical content practices. It is wise to remain vigilant and avoid sites that do not provide clear information about their content sourcing or lack transparency regarding user safety.</p>

      <p>Utilizing search engines effectively can also play a significant role in finding legitimate free femdom porn sources. Users should consider incorporating specific terms alongside "free femdom porn" to refine their search, such as including "review" or "recommended." This approach helps to surface articles or blog posts evaluating various sites, making the selection process more informed. Moreover, applying advanced search settings, such as filtering by date or region, can lead to discovering recent and relevant platforms with positive reputations.</p>

      <p>By following these guidelines—analyzing user feedback, checking for certifications, and employing strategic search methods—individuals can significantly minimize risks while enhancing their chances of finding genuine and enjoyable free femdom porn. Through diligence and careful investigation, it is possible to enjoy adult content responsibly and sustainably.</p>

      <h3>Utilizing Safe Browsing Practices When searching for Free Femdom Porn</h3>
      <p>When it comes to accessing free femdom porn on the internet, ensuring your online safety should be a top priority. One of the most effective ways to enhance your security is by utilizing private browsing modes available on most web browsers. This feature, also known as incognito mode, prevents your browsing history from being stored and helps to anonymize your online activities, making it more difficult for others to track your exploration patterns.</p>

      <p>In addition to private browsing, using a Virtual Private Network (VPN) is highly recommended. A VPN encrypts your internet connection, allowing you to browse anonymously and protecting your personal information from prying eyes. By masking your IP address, a VPN can help to improve your online privacy significantly, reducing the likelihood of exposure to unwanted alerts or targeted advertisements related to femdom content.</p>

      <p>Additionally, implementing robust antivirus software is crucial for maintaining device integrity while frequenting various adult sites. A reputable antivirus program can detect and neutralize malware threats, which are commonly associated with adult content. Regularly scanning your device with this software ensures that you are not unwittingly downloading harmful files that could compromise your security.</p>

      <p>Furthermore, keeping your software updated is essential in protecting against vulnerabilities that could be exploited by malicious entities. Whether it's your browser, operating system, or antivirus software, timely updates often include patches that defend against the latest threats, enhancing your overall browsing security.</p>

      <p>By following these safe browsing practices, you can enjoy your pursuit of free femdom porn while significantly reducing the risk of encountering scams or malware, ultimately fostering a more secure online experience.</p>

      <h3>Exploring Alternative Options for Adult Content</h3>
      <p>In a digital landscape often dominated by free porn sites, finding safe and enjoyable femdom content can pose significant challenges. However, there are several alternative options that not only provide quality material but also prioritize user safety and experience. One prominent avenue is subscription-based services. Many platforms offer a range of adult content, including femdom, often featuring exclusive videos and professional-grade productions. These services frequently provide free trials, allowing users to explore their offerings without immediate financial commitment while ensuring a secure environment for viewing.</p>

      <p>Community forums dedicated to femdom and other kink-related themes can serve as a valuable resource. These spaces encourage user engagement and sharing, where individuals can discuss their interests, recommend reputable sources, and exchange links to safe content. Some forums are dedicated to femdom enthusiasts and host discussions that can lead you to lesser-known, safe sites that cater specifically to your preferences. Participating in these communities can significantly enhance your search for satisfying content while fostering connections with like-minded individuals.</p>

      <p>Moreover, social media platforms can be surprisingly effective for discovering safe femdom content. Many creators maintain profiles showcasing their work and engaging with their audience. By following these accounts, users can access curated content, promotions for subscription services, and direct links to trustworthy sites. Engaging with femdom communities on platforms such as Twitter, Instagram, or specialized adult communities allows users to learn about new offerings and tap into shared interests without compromising safety.</p>

      <p>Overall, while free porn sites may initially seem appealing, exploring subscription services, engaging in community forums, and utilizing social media can provide more secure avenues for accessing high-quality femdom content. Approach your search with consideration, and prioritize safety as you navigate the ever-changing landscape of adult entertainment.</p>
    `,
  },
  "femdom-pegging": {
    title: "A Beginner's Guide to Femdom Pegging",
    image: img3,
    category: "Education",
    source: "Collar N Cuffs",
    sourceUrl: "https://collarncuffs.com/a-beginners-guide-to-femdom-pegging-what-it-is-why-people-do-it-and-how-to-talk-about-it/",
    readTime: "10 min read",
    photos: [peggingImg2, peggingImg1],
    content: `
      <p>Femdom pegging involves a dominant woman using a strap-on dildo to penetrate her male partner, often within a BDSM dynamic. This practice allows couples to explore role-reversal and submission, enhancing both psychological and physical pleasure. Key elements include mutual consent, open communication, and appropriate equipment such as strap-ons and lubricants. Preparation and aftercare are crucial for a positive experience. Understanding each other's boundaries and desires, and approaching the activity with respect and an open mind, can deepen intimacy and strengthen relationships.</p>

      <h3>What is Femdom Pegging?</h3>
      <p>Femdom pegging is a practice where a dominant woman uses a strap-on dildo to penetrate her male partner. This activity is often part of a larger Femdom or female domination dynamic, where the woman assumes a controlling and authoritative role in the relationship. The male partner, in this context, takes on a submissive role, allowing the woman to dictate the terms of their sexual encounters.</p>

      <p>The equipment typically used in femdom pegging includes the strap-on dildo, which is worn by the dominant partner. Strap-ons come in various sizes, shapes, and materials, allowing for a personalized experience that caters to the preferences and comfort levels of both participants. Other accessories, such as lubricants and harnesses, are also commonly used to ensure safety and enhance pleasure during the activity.</p>

      <p>The concept of pegging has a rich history and cultural context within the BDSM community. While the term "pegging" was only popularized in recent decades, the practice itself has ancient roots. Historical records suggest that similar activities were performed in various cultures around the world, often as part of rituals or power dynamics. In modern times, pegging has become more widely recognized and accepted, partly due to the increasing visibility and normalization of BDSM practices.</p>

      <p>Within the BDSM community, pegging is often seen as an expression of trust and intimacy between partners. It allows individuals to explore different aspects of their sexuality and can be a powerful way to reinforce the dominant-submissive dynamic. Communication and consent are crucial in this practice, as with any BDSM activity, to ensure that both partners are comfortable and willing participants.</p>

      <p>Understanding the basics of femdom pegging, the roles involved, and the equipment used can help demystify this practice and encourage open, respectful conversations about sexual preferences and boundaries. As with any sexual activity, it is essential to approach femdom pegging with an open mind and a commitment to mutual respect and consent.</p>

      <h3>Why People Engage in Femdom Pegging</h3>
      <p>Femdom pegging, a practice that involves a woman using a strap-on dildo to penetrate her male partner, is embraced by various individuals for a myriad of reasons. One significant driver is the psychological thrill that comes with role-reversal. In conventional heterosexual dynamics, men are often seen as the dominant figures, and pegging flips this script, placing women in a position of control. This shift can be exhilarating for both partners, providing a fresh and exciting way to explore their sexuality.</p>

      <p>The desire for submission is another compelling reason behind the appeal of femdom pegging. For some men, relinquishing control and submitting to their partner can be profoundly liberating. This act of submission can fulfill deep-seated fantasies and desires, offering a sense of release and satisfaction that might be hard to achieve through more traditional sexual activities. On the other hand, the dominant partner may find empowerment and a heightened sense of connection through this exchange of roles.</p>

      <p>Beyond the psychological and emotional factors, femdom pegging can also enhance physical pleasure. The receiver can experience intense sensations from prostate stimulation, which can lead to powerful orgasms. This form of pleasure is often described as different from penile stimulation, opening up new avenues for sexual exploration. Additionally, the giver can derive pleasure from the act itself, feeling empowered and connected with their partner.</p>

      <p>Femdom pegging can also foster a deeper sense of intimacy between partners. Engaging in such a vulnerable and trust-based activity necessitates open communication and mutual respect. This can strengthen the emotional bond, as both partners must navigate their boundaries and desires together. Ultimately, the practice can lead to a more satisfying and comprehensive sexual relationship, enriching the overall connection between partners.</p>

      <h3>How to Talk About Femdom Pegging with Your Partner</h3>
      <p>Open communication is fundamental when introducing any new activity into a sexual relationship, particularly something as intimate as femdom pegging. Initiating this conversation requires sensitivity and a non-judgmental approach. Begin by choosing a comfortable and private setting where both you and your partner feel at ease. It's essential to create a safe space for an honest dialogue.</p>

      <p>Start the conversation by expressing your feelings and desires clearly. Use "I" statements to articulate your thoughts, such as "I've been curious about femdom pegging and would like to explore it with you." This approach ensures that your partner does not feel blamed or pressured. It's also helpful to provide context and information about femdom pegging, emphasizing that it is a consensual and enjoyable practice for many couples.</p>

      <p>Encourage your partner to share their feelings and concerns openly. Listen actively and validate their responses. It's normal for your partner to have questions or reservations; address these with empathy and patience. Highlighting the importance of mutual consent and respect can help alleviate any apprehensions. Reassure your partner that their comfort and boundaries are paramount and that exploring femdom pegging is a journey you can navigate together.</p>

      <p>Additionally, it's beneficial to discuss any practical aspects, such as safety measures and the use of appropriate tools and lubricants. This demonstrates your commitment to a safe and pleasurable experience. If needed, suggest researching the topic together or consulting reputable resources for further information.</p>

      <p>Ultimately, the goal is to foster a trusting and open relationship where both partners feel comfortable expressing their desires and boundaries. By approaching the conversation with respect and care, you can enhance your sexual connection and explore new dimensions of intimacy together.</p>

      <h3>What to Use: Equipment and Supplies</h3>
      <p>For an enjoyable and comfortable pegging experience, selecting the right equipment and supplies is paramount. One of the primary items needed is a strap-on, which typically consists of a harness and a dildo. There are various types of strap-ons available, each designed to cater to different preferences and comfort levels. For beginners, a simple harness with adjustable straps is advisable, as it provides flexibility and ease of use.</p>

      <p>Dildos come in a wide range of sizes, shapes, and materials. When choosing a dildo for pegging, it's important to consider the comfort of both partners. Beginners might prefer smaller, smoother dildos made from body-safe materials such as silicone, which is non-porous and easy to clean. Additionally, some dildos are designed with a curved shape to target the prostate, enhancing the pleasure for the receiving partner.</p>

      <p>Lubrication is crucial for a safe and pleasurable pegging experience. Anal play requires a generous amount of lube to reduce friction and prevent discomfort or injury. Water-based lubes are popular due to their versatility and ease of cleaning. However, silicone-based lubes are also highly recommended for their long-lasting properties, especially during extended sessions. It's essential to ensure the lube is compatible with the materials of the dildo and harness to avoid any damage.</p>

      <p>Safety considerations should never be overlooked. Opt for equipment made from high-quality, body-safe materials to minimize the risk of irritation or infection. Silicone, stainless steel, and glass are excellent choices. Additionally, thorough cleaning of all equipment before and after use is vital. Warm water and mild soap are usually sufficient, but some toys may also be sanitized by boiling or using a dishwasher, depending on the material.</p>

      <p>In summary, choosing the right equipment and supplies, such as strap-ons, dildos, and lubricants, is essential for a comfortable and enjoyable pegging experience. Prioritizing safety through material selection and proper cleaning practices will ensure a pleasurable and safe exploration for both partners.</p>

      <h3>Where to Start: Preparing for Pegging</h3>
      <p>Preparation plays a crucial role in ensuring a positive pegging experience, especially for beginners. The first step is to create a relaxed and comfortable environment. Both partners should feel at ease, free from distractions, and in a space where they can communicate openly. Taking time to relax is essential; consider engaging in activities that help reduce stress and set a positive mood, such as taking a warm bath or practicing deep breathing exercises.</p>

      <p>Foreplay is another fundamental aspect that should not be overlooked. It helps to build intimacy and trust, preparing both partners physically and mentally for the experience ahead. Start with gentle touches, massages, and affectionate gestures to enhance arousal and relaxation. This gradual buildup is vital for ensuring that the receiving partner is sufficiently aroused and ready for penetration.</p>

      <p>Initial penetration can be a source of anxiety for many beginners; therefore, taking a gradual approach is essential. Begin with well-lubricated fingers to gently explore and stimulate the anal area. This can help the receiving partner become accustomed to the sensation and reduce any discomfort. Gradually progress to using small, beginner-friendly toys designed for pegging. These toys are typically tapered and made from body-safe materials, making them ideal for easing into the experience.</p>

      <p>Throughout the entire process, communication is paramount. Both partners should feel comfortable expressing their feelings, boundaries, and any concerns they may have. Establishing safe words or signals can provide an additional layer of security and ensure that both parties can communicate effectively even in the heat of the moment. Regularly checking in with each other can help maintain comfort and enjoyment, making the pegging experience positive and fulfilling for both partners.</p>

      <h3>Aftercare: Taking Care of Each Other Post-Pegging</h3>
      <p>Aftercare is an essential component of any BDSM activity, including pegging. It involves a period of time following the session where both partners come together to address their physical and emotional needs. This practice is crucial for maintaining the well-being of both individuals, ensuring they feel safe, respected, and cared for after the experience.</p>

      <p>One of the primary reasons aftercare is so important is that it helps transition from the intense dynamics of a pegging session back to everyday life. Pegging, like other BDSM activities, can be physically and emotionally demanding. Aftercare provides a space for both partners to reconnect, ensuring any residual feelings of vulnerability or discomfort are addressed promptly.</p>

      <p>Cuddling is a common and comforting aftercare activity. Physical closeness can help both partners feel secure and cherished. It allows for a gentle return to normalcy while reinforcing the bond between them. Discussing the experience is equally vital. Open communication helps in understanding each other's feelings, addressing any concerns, and celebrating what was enjoyable. This dialogue fosters mutual respect and deepens the connection between partners.</p>

      <p>Physical care is another critical aspect of aftercare. Cleaning up after a pegging session is necessary to maintain hygiene and prevent infections. Partners should take the time to gently clean each other, using warm water and mild soap. Addressing any discomfort or physical strain is also important. Applying soothing lotions or engaging in a gentle massage can help alleviate any soreness or tension.</p>

      <p>Incorporating these aftercare practices ensures that the post-pegging experience is positive and nurturing. It reinforces the trust and intimacy shared between partners, allowing them to feel valued and supported. By prioritizing aftercare, both individuals can enjoy a more fulfilling and respectful BDSM relationship.</p>

      <h3>Takeaway: Embracing New Experiences Together</h3>
      <p>As we conclude this guide on femdom pegging, it is essential to reiterate the core principles that make such an intimate and unique experience both enjoyable and fulfilling. Mutual consent, open communication, and unwavering respect form the foundation of any successful exploration into femdom pegging. By prioritizing these elements, couples can ensure that their journey into this realm is both safe and satisfying.</p>

      <p>Understanding each other's boundaries and desires is crucial. Before embarking on the experience, partners should engage in honest conversations about what they hope to gain from pegging and any concerns they may have. This dialogue fosters a sense of trust and partnership, allowing both individuals to feel comfortable and secure. Remember, consent is not a one-time agreement but an ongoing process that should be respected at every step.</p>

      <p>Approaching femdom pegging with an open mind and a willingness to explore can significantly enhance the experience. It is an opportunity to discover new dimensions of pleasure and intimacy within the relationship. Being receptive to each other's needs and reactions can lead to deeper emotional and physical connections, enriching the bond between partners.</p>

      <p>In essence, femdom pegging can be a rewarding and enriching journey when approached with the right mindset. Embracing new experiences together, while maintaining a strong foundation of mutual consent, communication, and respect, can lead to profound discoveries and strengthen the relationship. By being open and supportive, couples can unlock new dimensions of their connection, creating lasting memories and deepening their intimacy.</p>
    `,
  },
};

export function BlogPostPage({ postId, onNavigate }: BlogPostPageProps) {
  const post = blogContent[postId as keyof typeof blogContent];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          x: showScrollTop ? 0 : 100,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed right-6 bottom-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-wine-red to-dark-red hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-wine-red/50 flex items-center justify-center group p-2"
        style={{ 
          pointerEvents: showScrollTop ? "auto" : "none",
          filter: 'drop-shadow(0 0 8px rgba(184, 32, 48, 0))',
        }}
        whileHover={{
          filter: 'drop-shadow(0 0 12px rgba(184, 32, 48, 0.6))',
        }}
      >
        <img 
          src={logoM} 
          alt="Scroll to top" 
          className="w-full h-full object-contain filter drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
        />
      </motion.button>

      {/* Fixed Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${post.image})`,
          filter: 'blur(8px)',
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate("blog")}
          className="flex items-center gap-2 text-ice-white/70 hover:text-wine-red transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </motion.button>

        {/* Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-deep-gray/40 backdrop-blur-md border border-wine-red/20 rounded-2xl overflow-hidden mb-12"
        >
          {/* Featured Image Header */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            A Beginner's Guide to Femdom Pegging

            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-1.5 bg-wine-red/80 backdrop-blur-sm rounded-full text-ice-white text-sm mb-4">
                {post.category}
              </span>
              <h1 className="text-wine-red mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-ice-white/70">
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div
                className="text-ice-white/90 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.8",
                }}
              />
            </motion.div>

            {/* Gallery Highlights - Photos in Article */}
            {post.photos && post.photos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="my-12 space-y-6"
              >
                <h3 className="text-wine-red text-center mb-8">Gallery Highlights</h3>
                <div className={`grid ${post.photos.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'} gap-6`}>
                  {post.photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="relative overflow-hidden rounded-lg aspect-[3/4] group cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`Gallery highlight ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Source Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-8 mt-12 border-t border-wine-red/20"
            >
              <div className="flex items-center gap-2 text-ice-white/60">
                <span className="italic">Article Resource:</span>
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine-red hover:text-wine-red/80 transition-colors inline-flex items-center gap-1"
                >
                  {post.source}
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-ice-white/40 text-sm mt-2">
                This content is copyright-free educational material. All rights belong to the original source.
              </p>
            </motion.div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-deep-gray/40 backdrop-blur-md border border-wine-red/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-wine-red mb-8 text-center">Continue Exploring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogContent)
              .filter(([id]) => id !== postId)
              .slice(0, 2)
              .map(([id, otherPost]) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => onNavigate("blog-post", id)}
                  className="cursor-pointer group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={otherPost.image}
                      alt={otherPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-wine-red/80 backdrop-blur-sm rounded-full text-ice-white text-xs">
                        {otherPost.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-ice-white group-hover:text-wine-red transition-colors">
                    {otherPost.title}
                  </h4>
                  <p className="text-ice-white/60 text-sm mt-2">{otherPost.readTime}</p>
                </motion.div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("blog")}
              className="bg-wine-red hover:bg-wine-red/80 text-ice-white px-8"
            >
              View All Articles
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}