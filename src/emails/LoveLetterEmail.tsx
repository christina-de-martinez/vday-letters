import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Font,
  Preview,
  Link,
  Tailwind,
  pixelBasedPreset,
} from "@react-email/components";

interface LoveLetterEmailProps {
  valentineName: string;
  loveAbout: string;
  memory: string;
  meaning: string;
  signOff: string;
  senderName: string;
}

export function LoveLetterEmail({
  valentineName,
  loveAbout,
  memory,
  meaning,
  signOff,
  senderName,
}: LoveLetterEmailProps) {
  return (
    <Html lang="en">
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                cream: "#FFF8F0",
                stationery: "#FFFDF7",
              },
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="Instrument Serif"
            fallbackFontFamily="Georgia"
            webFont={{
              url: "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fCjOQ3OCxRqoN6Lwqqh.woff2",
              format: "woff2",
            }}
          />
        </Head>
        <Preview>A love letter just for you, {valentineName}</Preview>
        <Body className="bg-cream font-sans m-0 py-10 px-0">
          <Container className="mx-auto max-w-xl">
            {/* Heart header */}
            <Section className="text-center pt-4 pb-6">
              <Text className="text-3xl leading-none m-0">&#9829;&#65039;</Text>
            </Section>

            {/* Top accent bar */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      height: "4px",
                      backgroundColor: "#be123c",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </tr>
              </tbody>
            </table>

            {/* Letter body */}
            <Section
              style={{
                backgroundColor: "#FFFDF7",
                borderLeft: "1px solid #fecdd3",
                borderRight: "1px solid #fecdd3",
                borderBottom: "1px solid #fecdd3",
                borderStyle: "solid",
                padding: "44px 40px 36px 40px",
              }}
            >
              <Heading
                as="h1"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "28px",
                  color: "#881337",
                  marginBottom: "28px",
                  fontWeight: 400,
                  marginTop: "0",
                }}
              >
                Dear {valentineName},
              </Heading>

              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#4a0d20",
                  marginBottom: "20px",
                  marginTop: "0",
                }}
              >
                {loveAbout}
              </Text>
              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#4a0d20",
                  marginBottom: "20px",
                  marginTop: "0",
                }}
              >
                {memory}
              </Text>
              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#4a0d20",
                  marginBottom: "20px",
                  marginTop: "0",
                }}
              >
                {meaning}
              </Text>

              <Hr
                style={{
                  borderTop: "1px solid #fecdd3",
                  borderBottom: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  margin: "32px 0",
                }}
              />

              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  color: "#881337",
                  fontStyle: "italic",
                  marginBottom: "4px",
                  marginTop: "0",
                }}
              >
                {signOff}
              </Text>
              <Text
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "22px",
                  color: "#881337",
                  fontWeight: 400,
                  marginTop: "0",
                }}
              >
                {senderName}
              </Text>
            </Section>

            {/* Bottom accent bar */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      height: "4px",
                      backgroundColor: "#be123c",
                      borderRadius: "0 0 4px 4px",
                    }}
                  />
                </tr>
              </tbody>
            </table>

            {/* Footer */}
            <Section className="text-center pt-8 pb-4">
              <Text
                style={{
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#be8a8a",
                  margin: "0 0 8px 0",
                }}
              >
                This is a one-time love letter sent to you by someone who cares
                about you via{" "}
                <Link
                  href="https://ilysm.email"
                  style={{ color: "#be8a8a", textDecoration: "none" }}
                >
                  ilysm.email
                </Link>
                . You won&apos;t receive any further emails unless someone sends
                you another letter.
              </Text>
              <Text
                style={{
                  fontSize: "11px",
                  lineHeight: "16px",
                  color: "#d4b4b4",
                  margin: "0",
                }}
              >
                ilysm.email, 2261 Market St #5039, San Francisco CA 94114
                United States
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

LoveLetterEmail.PreviewProps = {
  valentineName: "Alex",
  loveAbout:
    "I love the way you always know how to make me laugh, even on my worst days. Your smile lights up every room you walk into.",
  memory:
    "I still think about the night we stayed up talking until sunrise. I never wanted that conversation to end.",
  meaning:
    "You make every ordinary moment feel extraordinary. I can't imagine my life without you in it.",
  signOff: "Forever yours,",
  senderName: "Jamie",
} satisfies LoveLetterEmailProps;
