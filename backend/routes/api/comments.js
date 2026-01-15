/**
 * Comments API Router
 * 
 * Provides endpoints for managing comments in the Anythink Market application.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments from the database.
 * 
 * @route GET /
 * @returns {Object} JSON object containing an array of comments
 * @returns {Array} comments - Array of comment objects
 * @throws {Error} Passes any database errors to error handling middleware
 */

/**
 * Deletes a comment by its ID.
 * 
 * @route DELETE /:comment
 * @param {string} req.params.comment - The ID of the comment to delete
 * @returns {void} Returns HTTP 204 No Content on successful deletion
 * @throws {Error} Passes any database errors to error handling middleware
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", function (req, res, next) {
  Comment.find()
    .then(function (comments) {
      return res.json({ comments: comments });
    })
    .catch(next);
});

//add another endpoint for deleting a comment
router.delete("/:comment", async function (req, res, next) {
    try {
        await Comment.findByIdAndDelete(req.params.comment);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

