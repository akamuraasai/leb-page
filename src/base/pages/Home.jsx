import React from 'react';
import Particles from 'react-particles-js';
import Header from "semantic-ui-react/dist/es/elements/Header/Header";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import Image from "semantic-ui-react/dist/es/elements/Image/Image";
import Contador from "../components/Contador";

const params = {
  particles: {
    number: {
      value: 50
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
}

const styles = {
  div: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
    right: 0,
  },
  particles: {
    position: 'fixed',
    top: 0,
    background: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300,
    fontSize: 10,
    paddingTop: 10,
  },
  call: {
    fontFamily: 'Lekton, serif',
    fontWeight: 100,
    fontSize: 16,
    marginTop: -4,
    fontSmoothing: 'antialiased',
    textShadow: 'none',
    textRendering: 'optimizeLegibility',
  },
  button: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300,
    fontSize: 12,
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icons: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  icon: {
    marginLeft: 6,
    marginRight: 6,
  },
  footer: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 10,
  },
  copy: {
    fontFamily: 'Lekton, serif',
    fontWeight: 100,
    fontSize: 10,
    marginTop: 34,
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: true };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ ...this.state, isMobile: height < 400 });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <div>
          <Particles params={params} style={styles.particles} />
        </div>
        <Container text textAlign="center" style={styles.div}>
          {isMobile ? null : (<Image src="https://via.placeholder.com/80x80" centered/>)}
          <Header as='h5' inverted content='CONGRESSO DO MESTRE DESENVOLVEDOR' style={styles.title}/>
          <Contador />
          <Header as='h4' inverted content='Não fique de fora deste evento que revolucionará sua vida!' style={styles.call} />
          <Button inverted color="black" circular size='big' style={styles.button}>NOTIFIQUE-ME</Button>
        </Container>
        <div style={styles.footer}>
          <div style={styles.icons}>
            <Icon inverted color='grey' name='facebook' style={styles.icon} size="large" />
            <Icon inverted color='grey' name='users' style={styles.icon} size="large" />
            <Icon inverted color='grey' name='youtube' style={styles.icon} size="large" />
            <Icon inverted color='grey' name='mail outline' style={styles.icon} size="large" />
          </div>
          <Header as='h5' textAlign="center" inverted style={styles.copy}>
            &copy; 2017 CONMDev. Todos os direitos reservados.
          </Header>
        </div>
      </div>
    );
  }
}

export default Home;
