import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPath = (folder) =>{
    // get full path
    return path.join(process.cwd(), `/${folder}`)
}

export const getFileContent = (fileName, folder)=>{
    const POST_PATH = getPath(folder);
    return fs.readFileSync(path.join(POST_PATH,fileName));
}
export const getAllPosts = (folder)=>{
    /*
        - Get the full path to the content folder using the path module
        - Get the files in the content folder using fs.readdirSync() method
        - Filter the file to only includes files with.md extension.
        - Retrive the contents of each file, including the front matter using the map method.
        - Return an array containing the front matter and the slug (the file name without the .md extension) of each file.
    */
    const POST_PATH = getPath(folder);
    return fs
        .readdirSync(POST_PATH) //get files in the path
        .filter((path)=>/\\.md?$/.test(path)) //only .md files
        .map(fileName =>{ //map over each file
            const source = getFileContent(fileName,folder);// retrieve the file contents
            const slug = fileName.replace(/\\.md?$/,"") // get the slug from the file name
            const {data} = matter(source); // extract frontmatter
            return{
                frontmatter: data,
                slug: slug,
            };
        });
}

export const getAllPublished = (folder) =>{
    const posts = getAllPosts(folder);
    const published = posts.filter(post =>{
        return post.frontmatter.isPublished === true;
    })
    return published
}

export const getSinglePost = (slug,folder)=>{
    const source = getFileContent(`${slug}.md`,folder);
    const {data: frontmatter, content} = matter(source);
    return {
        frontmatter,
        content,
    }
}