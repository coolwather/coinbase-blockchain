import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '9b716h58',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skuEFJTIsZjwufhPE0Zo5DXm9udngyW75EuEcebnpy49NbRLmFmV3goS76CrFgXFjCuxxqssvsjpJvVBpNFscm4zoJXEnQgUwv4jWuBCN2IYShjo59Y9m5vJIw3NAhL7xbIeqGrPFq5KKhMGvb08dQyFOdR4i0DBn4rBA5ZmN9DTj0ZaTIDA',
    useCdn: false,
});
