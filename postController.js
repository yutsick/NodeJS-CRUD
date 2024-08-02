
import Post from './Post.js';
import PostService from './postService.js';



class PostController {
    async create (req, res){
        try {
            // console.log(req.files);
            const post = await PostService.create(req.body, req.files.picture);
            res.send(post);
        } catch (error) {
            res.status(500).json({error: error.message});
            
        }
    }

    async getAll (req, res){
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getOne (req, res){
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async update (req, res){
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async delete (req, res){
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

}

export default new PostController();