import React from "react";
import './Content.css'
import { CenterFocusStrong } from "@mui/icons-material";


const Content = ({ searchTerm }) => {
  const contents = [
    {
      title: 'TodaysTopHits',
      Image: "https://routenote.com/blog/wp-content/uploads/2022/02/1.-Todays-Top-Hits.jpg"
    },
    {
      title: 'Sleep',
      Image: "https://pbs.twimg.com/media/Dr92-ABX4AARs2P.jpg"
    },
    {
      title: 'Mega Hit Mix',
      Image:"https://i.scdn.co/image/ab67706c0000da84679591faf5559606b578b25c"
    },

    {
      title: 'Chill Rap',
      Image: "https://i.scdn.co/image/ab67706c0000da845351ea01d19d608b0be9f895"
    },
    {
      title: 'Tunes',
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Y4FwXLSQqd70U5ujpLcRQjy6IGNzl3Co-g&usqp=CAU"
    },
    {
      title: 'Long Drive',
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ot5fxXEkJye48KEIcGpjMYlTT1LY74XcEN7nhwGaxmsaxX8tVcvl8z2W4YAzPSkWGoQ&usqp=CAU"
    },

   
  ];


  const filteredContents = contents.filter((content) =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="imagelist">
      {filteredContents.map((content, index) => (
          <div key={index}>
              {content.Image &&
                  <img src={content.Image} value={content.title} alt={content.title} />}
              <h5>{content.title}</h5></div>
      ))}
      </div>
    </div>
  );
};

export default Content;