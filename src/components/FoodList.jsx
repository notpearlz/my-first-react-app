
function ListItem(props){
    return <li>{props.food}</li>;
}

function List({foods}){
    if(!foods){
        return <div>Loading...</div>;
    }

    if(foods.length == 0) {
        return <div>There are no animals in the list.</div>;
    }


    return (
        <ul>
            {foods.map((food) => {
                return <ListItem key={food} food={food}/>;
            })}
        </ul>
    );
}


function FoodList({foodsList}){


    return <div>
        <h1>Foods:</h1>
        <List foods={foodsList}/>
    </div>
}


export {FoodList}