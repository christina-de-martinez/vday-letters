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
                "rose-line": "#f5e1e1",
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
            <Section className="text-center py-5">
              <Text className="text-3xl leading-none m-0">&#9829;&#65039;</Text>
            </Section>

            {/* Decorative rose-gold top border */}
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
                      height: "6px",
                      background:
                        "linear-gradient(to right, #fda4af, #f472b6, #fda4af)",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </tr>
              </tbody>
            </table>

            {/* Letter body — notebook paper look */}
            <Section
              style={{
                backgroundColor: "#FFFDF7",
                borderLeft: "1px solid rgba(253,164,175,0.3)",
                borderRight: "1px solid rgba(253,164,175,0.3)",
                borderBottom: "1px solid rgba(253,164,175,0.3)",
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, #f5e1e1 31px, #f5e1e1 32px)",
                backgroundPositionY: "8px",
                padding: "40px 36px 32px 36px",
              }}
            >
              {/* Greeting */}
              <Heading
                as="h1"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "28px",
                  color: "#8B3A4A",
                  marginBottom: "24px",
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
                  lineHeight: "1.8",
                  color: "#5C2434",
                  marginBottom: "16px",
                }}
              >
                {loveAbout}
              </Text>
              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#5C2434",
                  marginBottom: "16px",
                }}
              >
                {memory}
              </Text>
              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#5C2434",
                  marginBottom: "16px",
                }}
              >
                {meaning}
              </Text>

              <Hr
                style={{
                  borderTop: "1px solid #f5e1e1",
                  borderBottom: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  margin: "28px 0",
                }}
              />

              <Text
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "16px",
                  color: "#8B3A4A",
                  fontStyle: "italic",
                  marginBottom: "4px",
                }}
              >
                {signOff}
              </Text>
              <Text
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: "20px",
                  color: "#8B3A4A",
                  fontWeight: 400,
                  marginTop: "0",
                }}
              >
                {senderName}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center pt-6 pb-4">
              <Text className="text-xs m-0 mb-2" style={{ color: "#C4A0A0" }}>
                This is a one-time love letter sent to you by someone who cares
                about you via{" "}
                <Link
                  href="https://sillysoftware.club"
                  className="no-underline"
                  style={{ color: "#C4A0A0" }}
                >
                  Silly Software
                </Link>
                . You won&apos;t receive any further emails unless someone sends
                you another letter.
              </Text>
              <Text className="text-xs m-0" style={{ color: "#D4B4B4" }}>
                <Link
                  href="mailto:hi@sillysoftware.club?subject=Unsubscribe&body=Please%20unsubscribe%20me%20from%20future%20love%20letters."
                  style={{ color: "#D4B4B4" }}
                >
                  Unsubscribe from future letters
                </Link>
                {" | "}Silly Software, PO Box 7775, San Francisco, CA 94120
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
