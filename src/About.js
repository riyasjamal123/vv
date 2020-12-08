import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Fade cascade>
      <Card raised={true} style={{maxWidth:"500px",margin:"auto"}}>
        <CardContent>
          <Row>
              <Col>
                <Row style={{alignItems:"center"}}>
                  <Col>
              <Typography variant="h2">Team</Typography>
                  </Col>
                  <Col>
                    <Button size="large" style={{float:"right"}} onClick={()=>window.open("https://www.apardrishti.com/")}>
                    <i className="fab fa-github"/>&nbsp;Website
                    </Button>
                  </Col>
                </Row>
              <br />
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{ width: "100px", height: "100px", marginRight:"12px" }}
                      src="./images/devs/mahesh.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">Riyas J</Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography variant="subtitle2">
                          Deep Learning Practitioner
                        </Typography>
                        <Tooltip title="xx">
                        <IconButton onClick={()=>window.open("xx")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="xx">
                        <IconButton onClick={()=>window.open("xxx")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram:xxx">
                        <IconButton onClick={()=>window.open("xx")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="xxx">
                        <IconButton onClick={()=>window.open("xxx")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/xx.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">xx</Typography>
                    }
                    secondary={
                      <React.Fragment>
                      <Typography variant="subtitle2">
                          Deep Learning Practitioner
                      </Typography>
                        <Tooltip title="Github: @xxx">
                      <IconButton  onClick={()=>window.open("xxx")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Linkedin: xx">
                        <IconButton onClick={()=>window.open("xxxx")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram: @xxx">
                        <IconButton onClick={()=>window.open("xxx")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: xxx">
                        <IconButton onClick={()=>window.open("xxxx")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/xxx.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h5">xxxxxx</Typography>}
                    secondary={
                      <React.Fragment>
                      <Typography variant="subtitle2">
                          Full Stack Developer
                      </Typography>
                        <Tooltip title="Github: @xxxxx">
                      <IconButton onClick={()=>window.open("xxxxx")}>
                        <i className="fab fa-github"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="xxxxx">
                        <IconButton onClick={()=>window.open("xxxxxxxx")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram: xxxxxx">
                        <IconButton onClick={()=>window.open("xxxxxx")}>
                        <i className="fab fa-telegram"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email:xxxxxxxxxxxx">
                        <IconButton onClick={()=>window.open("mailto:xxxxxxxxx")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                    style={{ width: "100px", height: "100px", marginRight:"12px" }}
                    src="./images/devs/mmmmm.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h5">xxxxxxxxxxxxxx</Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography variant="subtitle2">Domain Expert</Typography>
                        <Tooltip title="Linkedin: xxxxxxxxxxx">
                        <IconButton onClick={()=>window.open("xxxxxxxxxxxxxxxx")}>
                        <i className="fab fa-linkedin-in"></i>
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Email: xxxxxxxxxxxxx">
                        <IconButton onClick={()=>window.open("mailto:xxxxxxxxxxxxxx")}>
                        <i className="fas fa-envelope"></i>
                        </IconButton>
                        </Tooltip>
                      </React.Fragment>
                    }
                  ></ListItemText>
                </ListItem>
            <br/>
              </List>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* TODO */}
            </Col>
          </Row>
        </CardContent>
        </Card>
        </Fade>
    </div>
  );
};
export default About;
