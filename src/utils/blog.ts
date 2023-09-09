import { getCollection } from "astro:content";

export const fetchCollection = async () => await getCollection("post");
