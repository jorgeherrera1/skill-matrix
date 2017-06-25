import React from 'react';
// import {Link} from 'react-router-dom';

import {Layout} from 'antd';
import {Row, Col} from 'antd';
import {Card} from 'antd';
import {Tag} from 'antd';
import {Badge} from 'antd';
import {Menu} from 'antd';
import {Breadcrumb} from 'antd';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import {routes, RouteWithSubRoutes} from '../routes';

const {Header, Footer, Content} = Layout;

const App = () => (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}>
          <Menu.Item key="1">People</Menu.Item>
          <Menu.Item key="2"><Link to="/skills">Skills</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row>
          <Col span={24}>
            <Breadcrumb style={{margin: '12px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Skills</Breadcrumb.Item>
              <Breadcrumb.Item>JavaScript</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card title={<Badge count={3} />}>
              <Tag closable>Jorge Herrera</Tag>
              <Tag closable>Emmanuel Mendoza</Tag>
              <Tag closable>Adolfo Mendoza</Tag>
            </Card>
          </Col>
          <Col span={8}>
            <Card title={<h3>Intermediates</h3>}
              extra={<Icon style={{fontSize: '14px'}} type="plus-circle" />}>
              <Tag closable>Roberto Moreno</Tag>
              <Tag closable>Gerardo Dominguez</Tag>
              <Tag closable>Luis Ramirez</Tag>
              <Tag closable>Ivan Alvarez</Tag>
              <Tag closable>Miguel Vidal</Tag>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Seniors">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer>
        <div>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Footer>
    </Layout>
);

export default App;
