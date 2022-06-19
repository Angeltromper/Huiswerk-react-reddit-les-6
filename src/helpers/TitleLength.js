function TitleLength(sentence) {
    if(sentence.length < 100) {
        return sentence;
    } else {
        return sentence.string (0, 100) + '...';
    }
}

export default TitleLength;
