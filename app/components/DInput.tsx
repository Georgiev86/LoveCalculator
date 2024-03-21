interface IDInputProps {
    label: string;
    placeholder: string;
    onChangeName: (name: string) => void;
}

const DInput = ({placeholder, onChangeName}: IDInputProps) => {
    

    return (

        
     <input type="text" placeholder={placeholder} onChange={(e) => onChangeName(e.target.value)} />



    );
};

export default DInput