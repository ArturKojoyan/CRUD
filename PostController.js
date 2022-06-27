import Post from "./Post.js"

class PostController{

  async create(req,res){
      try {
      const {name,surname,age} = req.body;
      const post = await Post.create({name,surname,age});
      res.json(post);  
      } catch (e) {
          res.status(500).json(e);
      }
  }
  async getAll(req,res){
      try {
      const posts = await Post.find();
      return res.json(posts);
      } catch (e) {
          res.status(505).json(e); 
      }

}
  async getOne(req,res){
      try {
      const {id} = req.params;
      const post = await Post.findById(id);
      res.json(post);
       } catch (e) {
            res.status(500).json(e);
       } 
    
}
  async Update(req,res){
    try {
        const post = req.body;
        if(!post._id){
           res.sendStatus(400); 
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post , {new: true})
        return res.json(updatedPost);
   
       } catch (e) {
            res.status(500).json(e);
       } 
  }
  async Delete(req,res){
    try {
        const {id} = req.params;
        const post = await Post.findByIdAndDelete(id);
        return res.json(post);
    } catch (e) {
        return res.status(500).json(e);
    }
  }
  

}

export default new PostController();