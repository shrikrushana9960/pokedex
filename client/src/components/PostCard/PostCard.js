import React from 'react'
import { Card, Image,Badge } from "antd";

import {useHistory} from "react-router-dom";
export const PostCard = ({id,img,funds,title}) => {
      
    const { Meta } = Card;
    const history=useHistory();
    return (
      <div style={{ width: "98%", margin: "10px" }}>
        <Badge.Ribbon
          text={funds ? "Sponsered" : "Need Funds"}
          color={funds ? "green" : "red"}
        >
          <Card
            onClick={() => {
              history.push(`/post/${id}`);
            }}
            hoverable
            style={{ width: "100%", borderRadius: "10px" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                alt="Nature enviorment"
                src={
                  img[0] ||
                  "https://www.ugaoo.com/knowledge-center/wp-content/uploads/2017/05/shutterstock_417312760-850x525.jpg"
                }
                height="300px"
                width="100%"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                {" "}
                {img[1] && (
                  <Image
                    style={{ objectFit: "fill" }}
                    width="30%"
                    height="64px"
                    src={img[1]}
                  />
                )}
                {img[2] && (
                  <Image
                    style={{ objectFit: "fill" }}
                    width="30%"
                    height="64px"
                    src={img[2]}
                  />
                )}
                {img[3] && (
                  <Image
                    style={{ objectFit: "fill" }}
                    width="30%"
                    height="64px"
                    src={img[3]}
                  />
                )}
              </div>

              <h2>{title}</h2>
            </div>
          </Card>
        </Badge.Ribbon>
      </div>
    );
}
