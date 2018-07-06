using System.Threading.Tasks;

namespace BPO.persistance
{
    public interface IUnitofWork
    {
        Task Complete();
    }
}