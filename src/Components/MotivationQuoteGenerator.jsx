import { Button, Input, Select, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function MotivationQuoteGenerator() {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    axios(`https://quotes-generator-zds4.onrender.com/generate?keyword=${keyword}&type=${type}`)
    .then(res=>{
      console.log(res.data)
    setQuote(res.data.content)
    }).catch(err=>{
      console.log(err)
      setQuote('Failed to generate a quote. Please try again later.');
    })
  };
  // console.log(quote,type,keyword);

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select a Category</option>
        <option value="Shayari">Shayari</option>
        <option value="Joke">Joke</option>
        <option value="Motivational Quotes">Motivational Quotes</option>
      </Select>

      <Button
        colorScheme="teal"
        isDisabled={!keyword || !type}
        onClick={generateQuote}
      >
        Generate
      </Button>
      {quote && <Text>{quote}</Text>}
    </VStack>
  );
}

export default MotivationQuoteGenerator;
