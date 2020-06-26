import { Card } from 'antd';
const { Meta } = Card;

import React from 'react'

const FacilityCard = ({ id, type, description }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example"
        src="https://image.freepik.com/free-vector/isometric-landscape-city-park-with-playground_1441-4069.jpg"
      />}
    >
      <Meta title={type} description={description || "A facility"} />
    </Card>
  )
}

export default FacilityCard