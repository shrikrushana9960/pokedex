import React from "react";
import { Avatar,Divider,Tag } from "antd";
import styles  from "./popup.module.scss";
const Popup = ({data,index}) => {
  
  return (
      <>
    {data&&<div className={styles.popupbody}>
        <div className={styles.model_container}>

<Avatar shape="square" size={64} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} />


<p className={styles.title}>{data.name&&data.name}</p>
</div>
<Divider className={styles.divider}/>
<p className={styles.tagtitle}> Moves</p>
<div className={styles.moves}>
{data.moves&&data.moves.map(item=><Tag key={`move_name_${item.move&&item.move.name}`} color="#f50">{item.move&&item.move.name}</Tag>)}

</div>
<Divider className={styles.divider}/>
<p className={styles.tagtitle}>Abilities</p>
<div className={styles.moves}>
{data.abilities&&data.abilities.map(item=><Tag  key={`tag_color_red_${item.ability&&item.ability.name}`} color="red">{item.ability&&item.ability.name}</Tag>)}

</div>
<Divider className={styles.divider}/>
<p className={styles.tagtitle}>Stats</p>
<div className={styles.moves}>
{data.stats&&data.stats.map(item=><Tag key={`tag_color_blue_1_${item.stat&&item.stat.name}`} color="blue">{item.stat&&item.stat.name}</Tag>)}

</div>
<Divider className={styles.divider}/>
<p className={styles.tagtitle}>types</p>
<div className={styles.moves}>
{data.types&&data.types.map(item=><Tag key={`tag_color_blue_2_${item.type&&item.type.name}`}color="blue">{item.type&&item.type.name}</Tag>)}

</div>
<Divider className={styles.divider}/>
<p className={styles.tagtitle}>Weight</p>
<div className={styles.moves}>
<Tag>{data.weight&&data.weight}</Tag>
</div>

<Divider className={styles.divider}/>
<p className={styles.tagtitle}>Sprites</p>
    <div className={styles.model_container}>
    <Avatar shape="square" size={64} src={data.sprites.back_default} />
    <Avatar shape="square" size={64} src={data.sprites.back_shiny} />
    <Avatar shape="square" size={64} src={data.sprites.front_shiny} />
    <Avatar shape="square" size={64} src={data.sprites.front_default} />

        </div>
    </div>}
    

    
    </>
  );
};

export default Popup;