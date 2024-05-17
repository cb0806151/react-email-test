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

const baseUrl = "https://newsletter.sgf.dev/uploads"// "http://localhost:3000/static";

export const SgfDevNightEmail = () => {
	const eventsTitle = "Lightning Round: a trio of lightning talks"
	const eventDate = "Wednesday, June 5th at 6:00 PM"
	const eventATitle = "Frameworks, Libraries, Code & Corn";
	const eventASpeaker = "Bud Siebold";
	const eventADescriptionParagraph1 = "Follow Billy Joe Jim Bob's culinary journey to discover the differences between Frameworks, Libraries, Code & Corn";
	const eventBTitle = "sgf.dev is hosted in SGF!";
	const eventBSpeaker = "Ryan De Lap";
	const eventBDescriptionParagraph1 = "Migrating to metal, the story of provisioning new hardware for Springfield Developers to save us time and money on our hosting bill. We discuss the logistics of building and deploying a new server in the Springfield Underground and what lessons were learned along the way.";
	const eventCTitle = "Software Engineering + Pomodoro = ?";
	const eventCSpeaker = "Christopher Baunach";
	const eventCDescriptionParagraph1 = "A lot of us have probably heard of Pomodoro but how does it work in practice? Is it helpful? What are the problems with it? Well I've been practicing it at my job for the last few months and can give some answers to those questions.";
	const discordLink = "https://discord.com/invite/VNNJwJk";
	const eventMeetupLink = "https://www.meetup.com/sgfdevs/events/301072755/";
	const developerProfileLink = "https://sgf.dev/register";
	const twitchLink = "https://www.twitch.tv/sgfdevs";

	return (
		<Html>
			<Head />
			<Preview>{eventsTitle}</Preview>
			<Body style={main}>
				<Container style={noBorder}>
					<Section style={{...content, ...noBorder}}>
						<Row style={noBorder}>
							<Column style={emailHeader}>
								<Img
									style={{ maxWidth: "100%" }}
									src={`${baseUrl}/emailHeader.png`}
								/>
								<Heading style={emailHeadingText}>
									Dev Night: In-Person + Online
								</Heading>
								<Heading style={emailHeadingText}>
									{eventDate}
								</Heading>
								<div style={centered}>
									<Button style={buttonStyle} href={eventMeetupLink}>
										RSVP on Meetup
									</Button>
								</div>
								<div style={centered}>
									<Button style={buttonStyle} href={discordLink}>
										Join the Discord
									</Button>
								</div>
							</Column>
						</Row>

						<Row style={{ ...boxInfos, ...noBorder, paddingBottom: "0" }}>
							<Column>
								<Row style={{ ...noBorder, marginBottom: "10px" }}>
									<Column style={eventDescription}>
										<Text style={eventTitle}>{eventsTitle}</Text>
										<hr/>
										<Text style={eventTitle}>{eventATitle}</Text>
										<Text style={eventHosts}>Presented by {eventASpeaker}</Text>
										<Text>
											{eventADescriptionParagraph1}
										</Text>
										<Text style={eventTitle}>{eventBTitle}</Text>
										<Text style={eventHosts}>Presented by {eventBSpeaker}</Text>
										<Text>
											{eventBDescriptionParagraph1}
										</Text>
										<Text style={eventTitle}>{eventCTitle}</Text>
										<Text style={eventHosts}>Presented by {eventCSpeaker}</Text>
										<Text>
											{eventCDescriptionParagraph1}
										</Text>
										<Text style={italics}>
											For dev night agenda, parking map, etc check out the
											details on the meetup page by clicking the "Meetup
											Details" button below.
										</Text>
									</Column>
								</Row>
								<Row style={noBorder}>
									<Column>
										<div style={centered}>
											<Button style={buttonStyle} href={twitchLink}>
												Watch on Springfield Devs Twitch
											</Button>
										</div>
										<div style={centered}>
											<Button style={buttonStyle} href={eventMeetupLink}>
												Meetup Details
											</Button>
										</div>
									</Column>
								</Row>
								<Text style={sectionTitle}>Our Sponsors</Text>
								<Row style={noBorder}>
									<Column style={sponsorColumn}>
										<Link href={'https://logicforte.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/logic-forte.jpg`}
										/></Link>
										<Link href={'https://efactory.missouristate.edu/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/efactory.jpg`}
										/></Link>
										<Link href={'https://warehqlabs.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/wareHq.png`}
										/></Link>
									</Column>
									<Column style={sponsorColumn}>
										<Link href={'https://www.codefiworks.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/codefi.jpg`}
										/></Link>
										<Link href={'https://hearo.net/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/hearo.jpg`}
										/></Link>
										<Link href={'https://edwardjrice.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/ejRiceCompany.png`}
										/></Link>
										<Link href={'https://www.mostlyserious.io/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/mostlySerious.jpg`}
										/></Link>
									</Column>
									<Column style={sponsorColumn}>
										<Link href={'https://www.buildmidwestern.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/midwestern.jpg`}
										/></Link>
										<Link href={'https://www.nlsnow.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/nls.png`}
										/></Link>
										<Link href={'https://sgftechcouncil.com/'}>
										<Img
											style={imageStyle}
											src={`${baseUrl}/stc.png`}
										/>
										</Link>
									</Column>
								</Row>
								<Text style={sectionTitle}>
									Do You Have a Springfield Devs Profile Yet?
								</Text>
								<Row style={noBorder}>
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
										<div style={centered}>
											<Button style={buttonStyle} href={developerProfileLink}>
												Create a Profile Here
											</Button>
										</div>
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

export default SgfDevNightEmail;

const noBorder = {
	border: 'none'
}

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
