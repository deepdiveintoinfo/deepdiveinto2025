export const HeroSection = () => (
    <section className="container relative bg-white rounded-lg shadow-lg p-8">
      <div className="mt-0 max-w-md lg:max-w-[550px] mx-auto text-center">
        <div className="relative overflow-hidden rounded-lg shadow-md" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full max-w-[550px] max-h-[315px]"
            src="https://www.youtube.com/embed/3h8C0QDEgsA?si=FJHzOwGIjcRrtexG"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <small className="text-muted-foreground text-sm mt-4 block">
          Donald Trump endorses a 'mandate' from The Heritage Foundation. Following this endorsement, The Heritage Foundation released their Mandate for Leadership, also known as Project 2025.
        </small>
      </div>
      <p className="text-lg xs:text-sm xs:max-w-md text-center text-muted-foreground mt-6 leading-relaxed">
        Project 2025 outlines a vision for significant government restructuring and policy changes. Our mission is to critically analyze this document, uncovering its potential risks, impacts, and underlying motives. By collaborating on this analysis, we aim to create a transparent, accessible resource to inform and prepare communities for the possible implications of these proposals.
      </p>
    </section>
  );