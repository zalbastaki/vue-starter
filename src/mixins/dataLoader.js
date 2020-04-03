import parseMD from 'parse-md';

export default function dataLoader(file) {
    return {
        data() {
            return {
                data: null,
            };
        },

        created() {
            this.data = parseMD(file).metadata;
        },
    };
}
