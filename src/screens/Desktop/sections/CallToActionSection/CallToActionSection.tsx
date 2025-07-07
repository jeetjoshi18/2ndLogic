import React from "react";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full relative" style={{ marginTop: '100px', marginBottom: '100px', height: '300px' }}>
      <div className="max-w-[1440px] mx-auto px-[188px] relative">
        {/* Ready to Get Started? */}
        <h2 
          className="absolute text-white font-bold text-center"
          style={{
            width: '652px',
            height: '81px',
            left: 'calc(50% - 652px/2)',
            top: '0px',
            fontFamily: "'Outfit'",
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '81px',
            textAlign: 'center',
            color: '#FFFFFF',
            textShadow: '9px 5px 6.4px rgba(0, 0, 0, 0.25)',
          }}
        >
          Ready to Get Started?
        </h2>

        {/* Description text */}
        <p 
          className="absolute text-white text-center"
          style={{
            width: '837px',
            height: '60px',
            left: 'calc(50% - 837px/2 + 0.5px)',
            top: '93px',
            fontFamily: "'Outfit'",
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Stop choosing between growth and sanity. Our automation systems let you scale without the stress, complexity, or extra hiring.
        </p>

        {/* Fully clickable Book a Call button */}
        <a
          href="https://forms.gle/u6QAqoKaFkK7zQ7H6"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 hover:brightness-110"
          style={{
            width: '344.39px',
            height: '58.9px',
            left: 'calc(50% - 344.39px/2 + 0.2px)',
            top: '187px',
            background: '#00A9A5',
            borderRadius: '63px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit'",
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '35px',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            Book a Call
          </span>
        </a>
      </div>
    </section>
  );
};
