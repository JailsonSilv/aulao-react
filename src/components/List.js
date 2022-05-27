// Renderizar uma lista...imprimir itens de uma lista
const List = () => {
    // LISTA
    const items = () => [{
        id: 1,
        name: "Jailson",
    }, {
        id: 2,
        nome: "Nascimento",
    }, {
        id: 3,
        nome: "Silva",
    }
];

    return <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}    
        </div>;
};

export default List;