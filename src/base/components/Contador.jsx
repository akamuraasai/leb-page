import React from 'react';
import Header from "semantic-ui-react/dist/es/elements/Header/Header";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment-duration-format';

const styles = {
  main: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 40,
    marginTop: -4,
    maxWidth: 330,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 14,
    // padding: 30,
  },
  value: {
    fontSize: 50,
    marginLeft: 0.001,
    lineHeight: '1em',
  },
  text: {
    fontSize: 16,
    fontWeight: 100,
    marginTop: -16,
    color: '#FFF'
  },
  value2: {
    fontSize: 42,
    lineHeight: '1em',
    marginTop: 0,
  },
  text2: {
    fontSize: 12,
    fontWeight: 100,
    marginTop: -16,
  },
  column: {
    paddingLeft: '0.1rem',
  }
}

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.lancamento = moment('11/12/2017 12:00:00', 'DD/MM/YYYY H:m:s');
    this.state = {
      distancia: moment.duration(this.lancamento.diff(this.hoje), 'ms').format('D H m s')
    };
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.hoje =  moment();
    this.setState({
      distancia: moment.duration(this.lancamento.diff(this.hoje), 'ms').format('D HH mm ss')
    });
  }

  render() {
    const { distancia } = this.state;

    return (
      <div style={styles.main}>
        <Grid verticalAlign="middle">
          <Grid.Row style={{marginLeft: 4}}>
            <Grid.Column width={5} textAlign="left" style={styles.column}>
              <Header color="teal" dividing style={styles.value}>
                <p style={{color: '#FFF', lineHeight: '1em'}}>{distancia.split(' ')[0]}</p>
              </Header>
              <Header inverted content="Dias" style={styles.text}/>
            </Grid.Column>
            <Grid.Column width={11} textAlign="left" style={styles.column}>
              <Grid>
                <Grid.Column width={1} textAlign="left" style={styles.column}/>
                <Grid.Column width={5} textAlign="left" style={styles.column}>
                  <Header color="teal" dividing style={styles.value2}>
                    <p style={{color: '#FFF', lineHeight: '1em'}}>{distancia.split(' ')[1]}</p>
                  </Header>
                  <Header inverted content="Horas" style={styles.text2}/>
                </Grid.Column>
                <Grid.Column width={5} textAlign="left" style={styles.column}>
                  <Header color="teal" dividing style={styles.value2}>
                    <p style={{color: '#FFF', lineHeight: '1em'}}>{distancia.split(' ')[2]}</p>
                  </Header>
                  <Header inverted content="Minutos" style={styles.text2}/>
                </Grid.Column>
                <Grid.Column width={5} textAlign="left" style={styles.column}>
                  <Header color="teal" dividing style={styles.value2}>
                    <p style={{color: '#FFF', lineHeight: '1em'}}>{distancia.split(' ')[3]}</p>
                  </Header>
                  <Header inverted content="Segundos" style={styles.text2}/>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default Contador;
