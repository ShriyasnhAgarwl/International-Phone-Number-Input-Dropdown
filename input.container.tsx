 const [phoneCode, setPhoneCode] = useState("+91");
    const [country, setCountry] = useState("IN");
    const togglePhone = (i: string | undefined): void => {
        console.log(i);
        if (i !== undefined) {
            setPhoneCode(i);
        }
    };
    const toggleCountry = (i: string | undefined): void => {
        console.log(i);
        if (i !== undefined) {
            setCountry(i);
        }
    };
