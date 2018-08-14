import React from 'react'
import { Container } from 'next/app';
import Head from '../components/head';
import Space from '../components/Space';

class Route extends React.Component {
  static getInitialProps({ query: { selected, img }}) {
    return ({ selected, img });
  }
  render() {
    const { selected, img } = this.props;
    return (
      <Container>
        <Head title={selected}/>
        <Space selected={selected} img={img} />
      </Container>
    );
  }
}

export default Route;
