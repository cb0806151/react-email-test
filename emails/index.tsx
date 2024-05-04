import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "http://localhost:3000/static";
const baseSponsorUrl = "http://localhost:3000/static/sponsors";

export const sgfDevNightEmail = () => {
	const eventsTitle = "My Wireless Hacking Toy Box";
	const eventSpeaker = "Chris Kincaid";
	const eventSpeakersGroup = "Springfield Devs";
	const descriptionParagraph1 =
		"Explore the realm of wireless auditing tools! This session explores popular wireless auditing tools, featuring devices like thumb-drive-sized NICs, external wireless adapters, WiFi Pineapples, Flipper Zero, Pwnagotchi, and custom Arduino-type boards designed for ethical WiFi hacking practice or group games.";
	const descriptionParagraph2 =
		"Disclaimer: Ethical hacking only! Unauthorized access or malicious actions towards any wireless network without expressed permissions is illegal and not condoned. The topics covered in this session are intended for entertainment, knowledge reinforcement, and emphasizing the importance of strong wireless security.";
	const descriptionParagraph3 =
		"Note: Due to the nature of this kind of event, it will have to be in-person only event (no twitch stream); however, we will be posting a recording of the event in the weeks following.";
	const discordLink = "https://discord.com/invite/VNNJwJk";
	const eventMeetupLink = "https://www.meetup.com/sgfdevs/events/300461471";
	const developerProfileLink = "https://sgf.dev/register";
	const twitchLink = "https://www.twitch.tv/sgfdevs";

	return (
		<Html>
			<Head />
			<Preview>{eventsTitle}</Preview>
			<Body style={main}>
				<Container>
					<Section style={content}>
						<Row>
							<Column style={emailHeader}>
								<Img
									style={{ maxWidth: "100%" }}
									src={`${baseUrl}/emailHeader.png`}
								/>
								<Heading style={emailHeadingText}>
									Dev Night: In-Person + Online
								</Heading>
								<Heading style={emailHeadingText}>
									Wednesday, May 1st at 6:00 PM
								</Heading>
								<Container style={centered}>
									<Button style={buttonStyle} href={eventMeetupLink}>
										RSVP on Meetup
									</Button>
								</Container>
								<Container style={centered}>
									<Button style={buttonStyle} href={discordLink}>
										Join the Discord
									</Button>
								</Container>
							</Column>
						</Row>

						<Row style={{ ...boxInfos, paddingBottom: "0" }}>
							<Column>
								<Row style={{ marginBottom: "10px" }}>
									<Column style={eventDescription}>
										<Text style={eventTitle}>{eventsTitle}</Text>
										<Text style={eventHosts}>Presented by {eventSpeaker}</Text>
										<Text style={eventGroup}>{eventSpeakersGroup}</Text>
										<Text>
											{descriptionParagraph1}
											{descriptionParagraph2.length > 0 && (
												<>
													<br />
													<br />
													{descriptionParagraph2}
												</>
											)}
											{descriptionParagraph3.length > 0 && (
												<>
													<br />
													<br />
													{descriptionParagraph3}
												</>
											)}
										</Text>
										<Text style={italics}>
											For dev night agenda, parking map, etc check out the
											details on the meetup page by clicking the "Meetup
											Details" button below.
										</Text>
									</Column>
								</Row>
								<Row>
									<Column>
										<Container style={centered}>
											<Button style={buttonStyle} href={twitchLink}>
												Watch on Springfield Devs Twitch
											</Button>
										</Container>
										<Container style={centered}>
											<Button style={buttonStyle} href={eventMeetupLink}>
												Meetup Details
											</Button>
										</Container>
									</Column>
								</Row>
								<Text style={sectionTitle}>Our Sponsors</Text>
								<Row>
									<Column style={sponsorColumn}>
										<Link href={'https://logicforte.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/logic-forte.jpg`}
										/></Link>
										<Link href={'https://efactory.missouristate.edu/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/efactory.jpg`}
										/></Link>
										<Link href={'https://warehqlabs.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/wareHq.png`}
										/></Link>
									</Column>
									<Column style={sponsorColumn}>
										<Link href={'https://www.codefiworks.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/codefi.jpg`}
										/></Link>
										<Link href={'https://hearo.net/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/hearo.jpg`}
										/></Link>
										<Link href={'https://edwardjrice.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/ejRiceCompany.png`}
										/></Link>
										<Link href={'https://www.mostlyserious.io/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/mostlySerious.jpg`}
										/></Link>
									</Column>
									<Column style={sponsorColumn}>
										<Link href={'https://www.buildmidwestern.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/midwestern.jpg`}
										/></Link>
										<Link href={'https://www.nlsnow.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/nls.png`}
										/></Link>
										<Link href={'https://sgftechcouncil.com/'}>
										<Img
											style={imageStyle}
											src={`${baseSponsorUrl}/stc.png`}
										/>
										</Link>
									</Column>
								</Row>
								<Text style={sectionTitle}>
									Do You Have a Springfield Devs Profile Yet?
								</Text>
								<Row>
									<Column>
										<Img
											style={{ maxWidth: "100%" }}
											src={`${baseUrl}/devProfiles.png`}
										/>
										<Text>
											Join over 50 local devs and create a free profile!
										</Text>
										<Text>
											Profiles on the Springfield Devs website help show your
											support for the group, increases your online visibility,
											and gives you the opportunity to showcase your skills as a
											developer.
										</Text>
										<Text style={italics}>
											Profile is not required to attend SGF Dev events.
										</Text>
										<Container style={centered}>
											<Button style={buttonStyle} href={developerProfileLink}>
												Create a Profile Here
											</Button>
										</Container>
									</Column>
								</Row>
							</Column>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default sgfDevNightEmail;

const italics = {
	fontStyle: "italic",
};

const emailHeadingText = {
	textAlign: "center" as const,
	color: "white",
};

const emailHeader = {
	backgroundColor: "#153557",
};

const centered = {
	textAlign: "center" as const,
	marginBottom: "10px",
};

const buttonStyle = {
	padding: "18px",
	borderRadius: "8px",
	backgroundColor: "#4caad8",
	color: "white",
	cursor: "pointer",
};

const sponsorColumn = {
	width: "33%",
};

const imageStyle = {
	maxWidth: 'calc(100% - 20px)',
	padding: "15px",
};

const eventTitle = {
	color: "white",
	fontSize: "24px",
	fontWeight: "bold",
};

const eventHosts = {
	color: "white",
	fontSize: "16px",
	fontWeight: "bold",
};

const eventGroup = eventHosts;

const eventDescription = {
	color: "white",
	backgroundColor: "#153557",
	fontSize: "16px",
	padding: "18px",
	borderRadius: "24px",
};

const sectionTitle = {
	color: "white",
	backgroundColor: "#153557",
	fontSize: "16px",
	padding: "18px",
	textAlign: "center" as const,
	borderRadius: "24px",
	fontWeight: "bold",
};

const main = {
	backgroundColor: "#fff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
	fontSize: 16,
};

const logo = {
	padding: "30px 20px",
};

const containerButton = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
};

const button = {
	backgroundColor: "#e00707",
	borderRadius: 3,
	color: "#FFF",
	fontWeight: "bold",
	border: "1px solid rgb(0,0,0, 0.1)",
	cursor: "pointer",
	padding: "12px 30px",
};

const content = {
	border: "1px solid rgb(0,0,0, 0.1)",
	borderRadius: "3px",
	overflow: "hidden",
};

const image = {
	maxWidth: "100%",
};

const boxInfos = {
	padding: "20px",
};

const containerImageFooter = {
	padding: "45px 0 0 0",
};
