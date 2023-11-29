var endpoints = {
    "getAllRooms": "/api/room",
    //Tiene que devolver el siguiente json: arreglo de los siguientes jsons
    // {
    //      
    //      title : string
    //      description : string
    //      image : string (binary base64)
    //      price : string
    //      personalAttributes: string[]
    //      
    //      id : string
    //}
    "getRoomById": "/api/room/",
    //Tiene que devolver el siguiente json:
    // {
    //      title: string
    //      bathroom: string
    //      space: string
    //      wardrobe: string
    //      images: string[] (binary base64)
    //      price: string
    //      neighborhood: string
    //      location: string
    //      description: stiring
    //      user: {
    //          name: string
    //          city: string
    //          personalities: string[]
    //          university: string
    //       }
    //}
    "newRoom": "/api/rooms",
    //Tiene que recibir el siguiente json: es un POST
    //      data = {
    //          title : string
    //          price : string
    //          bathroom : string
    //          space : string
    //          wardrobe : string
    //          address : string
    //          description : string
    //          images : string[] (binary base64)
    //      };
    "getAllRoomies": "/api/roomies",
    //Tiene que devolver el siguiente json: arreglo de los siguientes jsons
    //      
    //      id=string
    //      name=string
    //      image=string (binary base64)
    //      personalAttributes=string[]
    //      university=string
    //      phone=string
    "getRoomieById": "/api/roomies/",
    //Tiene que devolver el siguiente json:
    // 
    //      name: string
    //      photo: string (binary base64)
    //      university: string
    //      career: string
    //      personalities: string[]
    //      hobbies: string[]
    
}

export default endpoints;