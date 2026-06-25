import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Fix It Up Pty Ltd — Commercial Shopfitting & Joinery, Brisbane';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand-styled Open Graph image, applied site-wide
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0A1628',
          backgroundImage:
            'radial-gradient(ellipse at top right, rgba(249,115,22,0.18), transparent 60%)',
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            width: '90px',
            height: '8px',
            borderRadius: '4px',
            backgroundColor: '#F97316',
            marginBottom: '40px',
          }}
        />

        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Fix It Up Pty Ltd
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: '88px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.05,
          }}
        >
          Commercial&nbsp;<span style={{ color: '#F97316' }}>Shopfitting</span>
          &nbsp;& Joinery
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '38px',
            color: 'rgba(255,255,255,0.7)',
            marginTop: '40px',
          }}
        >
          Brisbane &amp; South East Queensland · QBCC Licensed
        </div>
      </div>
    ),
    { ...size }
  );
}
