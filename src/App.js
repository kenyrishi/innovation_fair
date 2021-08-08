
import './App.css';

import { Layout, Card } from 'antd';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'



function App() {

  const {Header, Footer, Sider, Content} = Layout;

  const cardStyle = {
    width: 500, 
    color: "black", 
    backgroundColor: "beige", 
    alignItems: "center",
    border: "1px solid #000000"
  }

  const items = [
    {
      id: 0,
      name: "University of Waterloo",
      rating: 3.5
    },
    {
      id: 1,
      name: 'University of Toronto',
      rating: 4.2
    },
    {
      id: 2,
      name: 'Queens University',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Western University',
      rating: 4.1
    },
    {
      id: 4,
      name: 'McMaster University',
      rating: 3.9
    },
    {
      id: 5,
      name: 'McGill University',
      rating: 2.9
    }
  ]
  

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
        </Sider>
        <Content style = {{'backgroundColor': 'lightblue'}}> 
          <div className="App">
            <header className="App-search">
              <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  styling = {
                    {
                      border: "2px solid #000000",
                    }
                  }
                />
              </div>
            </header>
              <div className="App-card">
                <Card title="University of Toronto Chestnut Residence" extra={<a href="#">More</a>} style={cardStyle}>
                  <p>4.3 Rating</p>
                  <p>Information about residence</p>
                </Card>
                <Card title="University of Toronto Innis College" extra={<a href="#">More</a>} style={cardStyle}>
                  <p>3.8 Rating</p>
                  <p>Information about residence</p>
                </Card>
                <Card title="University of Toronto Trinity College" extra={<a href="#">More</a>} style={cardStyle}>
                  <p>3.5 Rating</p>
                  <p>Information about residence</p>
                </Card>
                <Card title="University of Toronto University College" extra={<a href="#">More</a>} style={cardStyle}>
                  <p>3.4 Rating</p>
                  <p>Information about residence</p>
                </Card>
              </div>
          </div>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    
  )
}

export default App