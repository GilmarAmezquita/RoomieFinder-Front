import PageTemplate from "../components/ui/PageTemplate"
import RoomCard from "../components/rooms/RoomCard"
import styles from "../styles/rooms.module.css"

const rooms = [
    {
        title: "Room 1",
        description: "This is room 1",
        price: 100,
        image: "https://images.unsplash.com/photo-1558980664-8f9c0c0f0a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 2",
        description: "This is room 2",
        price: 200,
        image: "https://images.unsplash.com/photo-1558980664-8f9c0c0f0a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["1", "2", "3"]
    },
    {
        title: "Room 3",
        description: "This is room 3",
        price: 300,
        image: "https://images.unsplash.com/photo-1558980664-8f9c0c0f0a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        personalAttributes: ["1", "2", "3"]
    },
]

export default function Page() {
    return (
        <PageTemplate>
            <div className={styles.container}> 
                <h1>Rooms</h1>
                <div className={styles.roomsContainer}>
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.title}
                            title={room.title}
                            description={room.description}
                            image={room.image}
                            price={room.price}
                            personalAttributes={room.personalAttributes}
                        />
                    ))}
                </div>
            </div>
        </PageTemplate>
    )
}