using System.Threading.Tasks;
using BPO.persistance;

namespace BPO.persistance
{
    public class UnitofWork : IUnitofWork
    {
        private readonly BpoDbcontext context;

        public UnitofWork(BpoDbcontext context)
        {
            this.context = context;

        }
        public async Task Complete()
        {
          await context.SaveChangesAsync();
        }
    }
}