import React from 'react';
import { App, Panel, View, Page, Block, Navbar, Row, Col, Button, Link } from 'framework7-react';
import './panel.css';

export default () => (
  <App>
    <Panel resizable left reveal>
      <View>
        <Page>
          <Block>Left panel content</Block>
        </Page>
      </View>
    </Panel>
    <Panel resizable right themeDark>
      <View>
        <Page>
          <Block>Right panel content</Block>
        </Page>
      </View>
    </Panel>
    <View main>
      <Page id="panel-page">
        <Navbar title="Panel"></Navbar>

        <Panel left cover themeDark containerEl="#panel-page" id="panel-nested">
          <Page>
            <Block strong>
              <p>This is page-nested Panel.</p>
              <p>
                <Link panelClose>Close me</Link>
              </p>
            </Block>
          </Page>
        </Panel>

        <Block>
          <Row tag="p">
            <Col tag="span">
              <Button raised fill panelOpen="left">
                Open left panel
              </Button>
            </Col>
            <Col tag="span">
              <Button raised fill panelOpen="right">
                Open right panel
              </Button>
            </Col>
          </Row>
          <Row tag="p">
            <Col tag="span">
              <Button raised fill panelOpen="#panel-nested">
                Open nested panel
              </Button>
            </Col>
          </Row>
        </Block>
      </Page>
    </View>
  </App>
);
