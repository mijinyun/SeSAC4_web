package sesac.spring.study.sesacProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sesac.spring.study.sesacProject.domain.Board;
import sesac.spring.study.sesacProject.dto.BoardDTO;
import sesac.spring.study.sesacProject.service.BoardService;

import java.util.List;
import java.util.Optional;

@Controller
public class BoardController {
    private static BoardService boardService = new BoardService();

    @GetMapping("board-write")
    public String getBoardWrite() {
        return "board-write";
    }
    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO boardDTO) {
        // boardDTO = { name: d ,content: d}
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        // board = { name: d, content: d, ID: X }
        boardService.write(board);
        // -> repository 에 있는 map에 전달받은 name,content로 board가 저장되었다.
        return "redirect:/board-view";
    }

    @GetMapping("board-view")
    public String getBoardView(Model model) {
        List<Board> result = boardService.findBoards();

        model.addAttribute("list", result);
        return "board-view";
    }

    @PostMapping("board-search")
    @ResponseBody
    public Optional<Board> postBoardSearch(@RequestBody BoardDTO boardDTO) {
        return boardService.findOneByName(boardDTO.getName());
    }
}
